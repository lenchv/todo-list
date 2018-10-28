import { call, put, takeLatest } from 'redux-saga/effects';
import * as constant from './constants'
import * as authConstant from '../App/reducer/auth/constants'
import { login } from '../../services/auth/authService';
import { push } from 'react-router-redux';

export function* sendLoginRequest(action) {
    try {
        const user = yield call(login, action.login, action.password);

        yield put({
            type: authConstant.ADD_USER,
            user
        });

        yield put(push('/'));

        yield put({
            type: constant.LOGIN_SET_ERROR,
            error: ''
        });
    } catch (e) {
        yield put({
            type: constant.LOGIN_SET_ERROR,
            error: e.message
        });
    }
};

export default function* sagaWatcher() {
    yield takeLatest(constant.LOGIN_SEND_REQUEST, sendLoginRequest);
};
