const todoService = require('../services/todoService');
const { successResponse, errorResponse } = require('./basicController');

const getAll = (request, response) => {
    todoService.getAll()
        .then(data => {
            successResponse(response, data);
        })
        .catch(error => {
            errorResponse(response, error);
        });
};

const add = (request, response) => {
    todoService.add(request.body.data)
        .then(todo => {
            successResponse(response, todo);
        })
        .catch(error => {
            errorResponse(response, error);
        });
};

const deleteById = (request, response) => {
    todoService.deleteById(request.params.id)
        .then(() => {
            successResponse(response, {});
        })
        .catch(error => {
            errorResponse(response, error);
        });
};

module.exports = {
    getAll,
    add,
    deleteById
};