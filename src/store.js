import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(
    AppReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;