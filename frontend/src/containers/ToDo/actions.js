import * as constant from './constants';

export const addItem = (text) => {
    return {
        type: constant.TODO_SEND_ADD_ITEM_REQUEST,
        text
    };
};

export const loadTodoItems = () => ({
    type: constant.TODO_SEND_GET_ALL_ITEMS_REQUEST
});

export const deleteItem = (id) => ({
    type: constant.TODO_SEND_DELETE_ITEM_REQUEST,
    id
});

export const completeItem = (id) => ({
    type: constant.TODO_SEND_COMPLETE_ITEM_REQUEST,
    id
});

export const editItem = (id, text) => ({
    type: constant.TODO_SEND_CHANGE_TEXT_REQUEST,
    text,
    id
});

export const undoTodo = () => ({
    type: constant.TODO_UNDO_ITEM,
});

export const redoTodo = () => ({
    type: constant.TODO_REDO_ITEM,
});

export const takeSnapshot = () => ({
    type: constant.TODO_TAKE_SNAPSHOT
});
