module.exports = (router, getController) => {
    const todoController = getController('todoController');

    router.get('/', todoController.getAll);
    router.post('/:id?', todoController.add);
    router.put('/:id?', todoController.update);
    router.delete('/:id?', todoController.deleteById);

    return router;
};
