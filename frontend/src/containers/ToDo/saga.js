import { call, takeLatest, put, select } from 'redux-saga/effects';
import * as constant from './constants';
import { SET_ERROR, UNSET_ERROR } from '../App/reducer/error/constants';
import toDoService from '../../services/todo/toDoService';

function* baseSaga(f) {
    try {
        yield f();

        yield put({
            type: UNSET_ERROR
        });
    } catch (e) {
        yield put({
            type: SET_ERROR,
            message: e.message
        });
    }
};

function* addTodoItem(action) {
    yield baseSaga(function* () {
        const todoItem = yield call(toDoService.createItem, action);

        yield put({
            type: constant.TODO_ADD_ITEM,
            item: todoItem
        });
    });
}

function* getAllTodoItems(action) {
    yield baseSaga(function* () {
        const todoItems = yield call(toDoService.getAll, action);

        yield put({
            type: constant.LOAD_TODO_ITEMS,
            items: todoItems
        });
    });
}

function* deleteItem(action) {
    yield baseSaga(function* () {
        yield put({
            type: constant.TODO_DELETE_ITEM,
            id: action.id
        });

        yield call(toDoService.deleteItem, action.id);
    });
}

const selectItem = id => state => {
    return toDoService.getItemById(state.todo.todos, id)
};

function* changeTextItem(action) {
    yield baseSaga(function* () {
        const item = yield select(selectItem(action.id));

        item.text = action.text;

        yield updateItem(item);
    });
}

function* completeItem(action) {
    yield baseSaga(function* () {
        const item = yield select(selectItem(action.id));

        item.isCompleted = !item.isCompleted;

        yield updateItem(item);
    });
}

function* updateItem(item) {
    const updatedItem = yield call(toDoService.updateItem, item);

    yield put({
        type: constant.TODO_EDIT_ITEM,
        item: updatedItem
    });
}

export default function* watchSaga() {
    yield takeLatest(constant.TODO_SEND_ADD_ITEM_REQUEST, addTodoItem);
    yield takeLatest(constant.TODO_SEND_GET_ALL_ITEMS_REQUEST, getAllTodoItems);
    yield takeLatest(constant.TODO_SEND_DELETE_ITEM_REQUEST, deleteItem);
    yield takeLatest(constant.TODO_SEND_CHANGE_TEXT_REQUEST, changeTextItem);
    yield takeLatest(constant.TODO_SEND_COMPLETE_ITEM_REQUEST, completeItem);
}
