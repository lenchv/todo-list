import _ from 'lodash';
import storageService from '../common/storageService';
import idService from '../common/idService';

export const isAuthenticated = (state) => !_.isEmpty(state.user) || storageService.getItem('token');

export const login = (login, password) => new Promise((resolve, reject) => {
    const user = storageService.getItem('users', [])
        .find(user => user.login === login && user.password === password);
    
    if (!user) {
        return reject(new Error('User is not defined'));
    }

    storageService.setItem('token', user.id);

    resolve(user);
});

export const register = (userData) => {
    const user = Object.assign({}, userData, { id: idService.getId() });
    const users = storageService.getItem('users', []);
 
    users.push(user);
    storageService.setItem('users', users);

    return login(userData.login, userData.password);
};

export const logout = () => {
    storageService.setItem('token', null);
};

export default {
    isAuthenticated, login, register, logout
};
