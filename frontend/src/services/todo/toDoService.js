import normalizeService from '../common/normalizeService';
import requestService from '../common/requestService';
import { decode, decodeError } from '../common/responseService';

const getItem = (todoItem = {}) => {
    const shape = {
        id: todoItem.id,
        isCompleted: todoItem.isCompleted,
        text: todoItem.text
    };

    return shape;
};

export default {
    createItem({ text }) {
        return requestService.post('/todo', {
            text
        })
        .then(decode)
        .then((response) => {
            return getItem(response.data);
        }, (errorResponse) => {
            return Promise.reject(decodeError(errorResponse));
        });
    },

    getItemById(todos, id) {
        return normalizeService.getById(todos, id);
    },

    getAll() {
        return requestService.get('/todo')
            .then(decode)
            .then((response) => {
                return !Array.isArray(response.data)
                    ? []
                    : response.data.map(getItem)
            }, (error) => {
                return Promise.reject(decodeError(error));
            })
    },

    deleteItem(id) {
        return requestService.delete('/todo/' + id)
            .then(decode, error => Promise.reject(decodeError(error)));
    },

    updateItem(item) {
        return requestService.put('/todo/' + item.id, item)
            .then(decode, error => Promise.reject(decodeError(error)))
            .then(response => {
                return response.data;
            });
    }
};
