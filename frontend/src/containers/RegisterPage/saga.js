import { call, takeLatest, put } from 'redux-saga/effects';
import * as constant from './constants';
import * as authConstant from '../App/reducer/auth/constants';
import { register } from '../../services/auth/authService';
import { push } from 'react-router-redux';
import { SET_ERROR, UNSET_ERROR } from '../App/reducer/error/constants';

function* sendRegisterRequest(action) {
    try {
        const user = yield call(register, action.userData);

        yield put({
            type: authConstant.ADD_USER,
            user
        });
    
        yield put(push('/'));

        yield put({
            type: UNSET_ERROR
        });
    } catch (e) {
        yield put({
            type: SET_ERROR,
            message: e.message
        });
    }
}

export default function* watchSaga() {
    yield takeLatest(constant.REGISTER_SEND_REQUEST, sendRegisterRequest);
}
