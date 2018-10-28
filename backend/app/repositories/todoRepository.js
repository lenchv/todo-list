let id = 1;
const todos = [];

const findAll = () => new Promise((resolve, reject) => {
    resolve(todos);
});

const add = (todo) => new Promise((resolve, reject) => {
    todo.id = id++;
    todos.push(todo);

    resolve(todo);
});

const deleteById = (id) => new Promise((resolve, reject) => {
    const i = todos.findIndex(todo => todo.id === id);

    todos.splice(i, 1);

    resolve();
});

const find = (id) => new Promise((resolve, reject) => {
    const todo = todos.find(todo => todo.id === id);

    resolve(todo);
});

module.exports = {
    findAll,
    add,
    deleteById,
    find
};
