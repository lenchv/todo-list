import { call, takeLatest, put } from 'redux-saga/effects';
import * as constant from './constants';
import * as authConstant from '../App/reducer/auth/constants';
import { register } from '../../services/auth/authService';
import { push } from 'react-router-redux';

function* sendRegisterRequest(action) {
    const user = yield call(register, action.userData);

    yield put({
        type: authConstant.ADD_USER,
        user
    });

    yield put(push('/'));
}

export default function* watchSaga() {
    yield takeLatest(constant.REGISTER_SEND_REQUEST, sendRegisterRequest);
}
