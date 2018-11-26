import _ from 'lodash';
import storageService from '../common/storageService';
import requestService from '../common/requestService';
import { decode } from '../common/responseService';

export const isAuthenticated = (state) => !_.isEmpty(state.user) || storageService.getItem('token');

export const login = (email, password) => {
    return requestService.get('/auth/', {
        params: {
            email, password
        }
    })
    .then(decode)
    .then(({ data }) => {
        if (data.token) {
            storageService.setItem('token', data.token);
        }

        return data.user;
    }, ({ response }) => {
        return Promise.reject(new Error(decode(response).data.error));
    });
};

export const register = (userData) => {
    return requestService.post('/auth', userData).then(decode).then(({ data }) => {
        if (data.token) {
            storageService.setItem('token', data.token);
        }

        return data.user;
    }, ({ response }) => {
        return Promise.reject(new Error(decode(response).data.error));
    });
};

export const logout = () => new Promise((resolve, reject) => {
    storageService.setItem('token', null);

    resolve();
});

export default {
    isAuthenticated, login, register, logout
};
