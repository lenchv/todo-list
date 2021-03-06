import normalizeService from "../../services/common/normalizeService";
import undoReduService from "../../services/undoReduService";
import * as constant from './constants';
import {
    addItem, deleteItem, editItem
} from '../../services/todo/toDoEvents';

const initialState = {
    todos: normalizeService.getState(),
    hasUndo: false,
    hasRedu: false
};
let undoRedo = undoReduService(initialState.todos);

export default (state = initialState, action) => {
    switch (action.type) {
        case constant.LOAD_TODO_ITEMS:
            let loadedToDos = action.items.reduce(normalizeService.add, state.todos);
            undoRedo = undoReduService(loadedToDos);

            return {
                todos: loadedToDos,
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_ADD_ITEM:
            return {
                todos: undoRedo.add(addItem(action.item)),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_DELETE_ITEM:
            return {
                todos: undoRedo.add(deleteItem(action.id)),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_EDIT_ITEM:
            return {
                todos: undoRedo.add(editItem(action.item)),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_UNDO_ITEM:
            return {
                todos: undoRedo.undo(),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_REDO_ITEM:
            return {
                todos: undoRedo.redo(),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        case constant.TODO_TAKE_SNAPSHOT:
            return {
                todos: undoRedo.takeSnapshot(),
                hasUndo: undoRedo.canUndo(),
                hasRedo: undoRedo.canRedo()
            };
        default:
            return state;
    }
};
