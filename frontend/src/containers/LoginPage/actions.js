import * as constant from './constants'

export const sendLoginRequest = ({ login, password }) => ({
    type: constant.LOGIN_SEND_REQUEST,
    login,
    password
});
