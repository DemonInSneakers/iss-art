import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import initialState from './initialState'
import {tables, isFetching} from './reducers'

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result
};



export const storeFactory = (stateData = initialState) => applyMiddleware(thunkMiddleware, logger)(createStore)(combineReducers({tables, isFetching}), stateData);