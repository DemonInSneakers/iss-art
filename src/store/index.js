import { createStore, combineReducers, applyMiddleware } from 'redux'
import { tables } from './reducers'
import initialState from './initialState'

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



const storeFactory = (stateData=initialState) =>
    applyMiddleware(logger)(createStore)(  combineReducers({tables}), stateData  );

export default storeFactory