import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget, addCategory, removeCategory } from '../redux/actions';
 const Dashboard = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    
    const [newWidget, setNewWidget] = useState({ name: '', text: '' });
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    const handleAddWidget = () => {
        if (selectedCategoryId && newWidget.name && newWidget.text) {
        const widget = {
        id: `widget${Date.now()}`,
        ...newWidget
        };
        dispatch(addWidget(selectedCategoryId, widget));
        setNewWidget({ name: '', text: '' });
        }
        };
        
        const handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
        };
    
return( 
    <div className='container-fluid'>
    <div className='dashboard'>
    <h2>Add Widget</h2>
   <input
type="text"
placeholder="Widget Name"
value={newWidget.name}
onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
/>
<input
type="text"
placeholder="Widget Text"
value={newWidget.text}
onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
/>
<select onChange={handleCategoryChange} value={selectedCategoryId}>
<option value="">Select Category</option>
{categories.map(category => (
<option key={category.id} value={category.id}>{category.name}</option>
))}
</select>
        </div>
    </div>

) ;      

};
export default Dashboard;