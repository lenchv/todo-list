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
    todoService.add({
        text: request.body.text
    }).then(todo => {
        successResponse(response, todo);
    }).catch(error => {
        errorResponse(response, error);
    });
};

const update = (request, response) => {
    todoService.update(request.params.id, {
        text: request.body.text,
        isCompleted: request.body.isCompleted,
    }).then(todo => {
        successResponse(response, todo);
    }).catch(error => {
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
    update,
    deleteById
};