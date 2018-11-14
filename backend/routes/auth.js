module.exports = (router, getController) => {
    const authController = getController('authController');

    router.put('/', authController.signIn);
    router.post('/', authController.signUp);

    return router;
};