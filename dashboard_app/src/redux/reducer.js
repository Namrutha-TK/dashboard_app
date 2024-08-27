import { ADD_WIDGET, REMOVE_WIDGET, ADD_CATEGORY, REMOVE_CATEGORY } from './actions';

const initialState = {
categories: []
};

const dashboardReducer = (state = initialState, action) => {
switch (action.type) {
case ADD_WIDGET:
return {
...state,
categories: state.categories.map(category =>
category.id === action.payload.categoryId
? {
...category,
widgets: [...category.widgets, action.payload.widget]
}
: category
)
};
case REMOVE_WIDGET:
return {
...state,
categories: state.categories.map(category =>
category.id === action.payload.categoryId
? {
...category,
widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
}
: category
)
};
case ADD_CATEGORY:
return {
...state,
categories: [...state.categories, action.payload]
};
case REMOVE_CATEGORY:
return {
...state,
categories: state.categories.filter(category => category.id !== action.payload)
};
default:
return state;
}
};

export default dashboardReducer;
