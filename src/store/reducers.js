import C from '../constants'
import {addItem, removeItem, getItem} from "../actions";

export const items = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return [
                ...state,
                action.item
            ];
        case C.REMOVE_ITEM:
            return state.filter(c => c.id !== action.id);
        default:
            return state
    }
};

export  const table = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return (state.name !== action.tableName) ?
                state : {
                    ...state,
                    items: items(state.items, action)
                };
        case C.REMOVE_ITEM:
            return (state.name !== action.tableName) ?
                state : {
                    ...state,
                    items: items(state.items, action)
                };

        default:
            return state
    }
};

export const tables = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return state.map(c => table(c, action));
        case C.REMOVE_ITEM:
            return state.map(c => table(c, action));
        case C.MOVE_ITEM:
            let item = state.filter(table => table.name === action.startTableName);
            console.log(item);
            /*state.map(c => table(c, addItem(action.endTableName, item)));*/
            state.map(c => table(c, removeItem(action.startTableName, action.id)));
            return state;
        default:
            return state
    }
};