const todoRepository = require('../repositories/todoRepository');

const getAll = () => {
    return todoRepository.findAll();
};

const add = (todoData) => {
    if (Object(todoData) !== todoData) {
        return Promise.reject(new Error('todo item has incorrect format'));
    }

    const text = todoData.text || '';

    return todoRepository.add({ text });
};

const deleteById = (id) => {
    if (!id) {
        throw new Error('id is required');
    }

    return todoRepository.deleteById(id);
};

const getById = (id) => {
    return todoRepository.find(id);
};

module.exports = {
    getAll,
    add,
    deleteById,
    getById
};
