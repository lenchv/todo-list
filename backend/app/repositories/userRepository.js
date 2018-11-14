const users = [];
let id = 1;

const findById = (id) => new Promise((resolve, reject) => {
    resolve(users.find(user => user.id === id));
});

const findByCriteria = (criteria) => new Promise((resolve, reject) => {
    resolve(users.find(user => Object.keys(criteria).every(key => user[key] === criteria[key])));
});

const add = (user) => new Promise((resolve) => {
    user.id = id++;
    users.push(user);

    resolve(user);
});

module.exports = {
    add,
    findById,
    findByCriteria
};
