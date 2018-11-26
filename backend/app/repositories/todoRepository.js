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
    const todo = todos.find(todo => todo.id === Number(id));

    resolve(todo);
});

const update = (item) => new Promise((resolve, reject) => {
    const i = todos.findIndex(i => Number(i.id) === item.id);

    if (i === -1) {
        reject(new Error('item not found'));
        return;
    }

    todos[i] = item;

    return resolve(item);
});

module.exports = {
    findAll,
    add,
    update,
    deleteById,
    find
};
