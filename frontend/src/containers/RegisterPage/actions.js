import * as constant from './constants';

export const sendRegisterRequest = (userData) => ({
    type: constant.REGISTER_SEND_REQUEST,
    userData
});
