module.exports = (router, getController) => {
    const authController = getController('authController');

    router.get('/', authController.signIn);
    router.post('/', authController.signUp);

    return router;
};