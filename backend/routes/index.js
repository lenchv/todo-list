const getRouter = require('express').Router;
const router = getRouter();
const getController = require('../helpers/requireHelper').requireController;

const todo = require('./todo');
const auth = require('./auth');

module.exports = (checkAuth) => {
    router.use('/todo', checkAuth(), todo(getRouter(), getController));
    router.use('/auth', auth(getRouter(), getController));

    return router;
};
