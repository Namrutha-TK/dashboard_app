import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <h1>Dashboard</h1>
    <Dashboard />
    </div>
    </Provider>
    
  );
}

export default App;
