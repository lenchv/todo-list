const router = require('express').Router();
const todo = require('./todo');

module.exports = (checkAuth) => {
    router.use('/todo', todo);

    return router;
};
