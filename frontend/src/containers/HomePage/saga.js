import { call, put, takeLatest } from 'redux-saga/effects';
import { HOME_CHANGE_VALUE, START_CHANGE_VALUE } from './constants';

const change = (value) => new Promise((res, rej) => {
    setTimeout(() => {
        res(value);
    }, 500);
});

export function* changeValueAsync(action) {
    const val = yield call(change, action.value);

    yield put({ type: HOME_CHANGE_VALUE, value: val });
}

export default function* sagaWatcher() {
    yield takeLatest(START_CHANGE_VALUE, changeValueAsync);
};
