import thunk from "redux-thunk";

const { combineReducers, createStore , compose, applyMiddleware } = require("redux");
const { authReducer } = require("../reducers/authReducer");


const reducers = combineReducers({
    auth: authReducer
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);