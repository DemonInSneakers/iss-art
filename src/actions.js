import C from './constants'


export const moveItem = (id, startTableName, startIndex, endTableName, endIndex) =>
    ({
        type: C.MOVE_ITEM,
        id,
        startTableName,
        startIndex,
        endTableName,
        endIndex
    });

export const addItem = (tableName, item) =>
    ({
        type: C.ADD_ITEM,
        tableName,
        item
    });

export const removeItem = (tableName, id) =>
    ({
        type: C.REMOVE_ITEM,
        tableName,
        id
    });

export const getItem = (tableName, id) =>
    ({
        type: C.GET_ITEM,
        tableName,
        id
    });

export const requestPosts  = () => {
    return {
        type: C.REQUEST_POSTS
    }
};

export const receivePosts = (json) => {
    return {
        type: C.RECEIVE_POSTS,
        items: json
    }
};

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(requestPosts());
        return fetch(`items.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
};