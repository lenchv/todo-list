import storageService from './storageService';
import axios from 'axios';

const getAuthHeader = () => {
    const token = storageService.getItem('token');

    if (!token) {
        return {};
    }

    return {
        Authorization: 'Bearer ' + token
    };
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.url = '/api/v1' + config.url;
    config.headers = Object.assign({}, config.headers || {}, getAuthHeader());

    return config;
});

const axiosAdapter = (method) => {
    return axiosInstance[method];
};

export default {
    get: axiosAdapter('get'),
    post: axiosAdapter('post'),
    put: axiosAdapter('put'),
    delete: axiosAdapter('delete'),
    patch: axiosAdapter('patch'),
};
