import * as constant from './constants';
import toDoService from '../../services/todo/toDoService';

export const addItem = (text) => {
    return {
        type: constant.TODO_ADD_ITEM,
        item: toDoService.getItem({ text })
    };
};

export const completeItem = (id) => {
    return {
        type: constant.TODO_COMPLETE_ITEM,
        id
    };
};

export const deleteItem = (id) => {
    return {
        type: constant.TODO_DELETE_ITEM,
        id
    };
};

export const editItem = (id, text) => {
    return {
        type: constant.TODO_DELETE_ITEM,
        text,
        id
    };
};

export const undoTodo = () => ({
    type: constant.TODO_UNDO_ITEM,
});

export const redoTodo = () => ({
    type: constant.TODO_REDO_ITEM,
});
