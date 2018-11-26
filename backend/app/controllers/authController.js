const { successResponse, errorResponse } = require('./basicController');
const authService = require('../services/authService');

const signIn = (request, response) => {
    authService.authenticate(request.query.email, request.query.password)
        .then(({user, token}) => successResponse(response, { user, token }))
        .catch(err => errorResponse(response, err));
};

const signUp = (request, response) => {
    authService.signUpUser({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        repeatPassword: request.body.repeatPassword
    })
    .then(({ token, user }) => successResponse(response, { token, user }))
    .catch(err => errorResponse(response, err));
};

module.exports = {
    signIn,
    signUp
};
