const { successResponse, errorResponse } = require('./basicController');
const authService = require('../services/authService');

const signIn = (request, response) => {
    authService.authenticate(request.email, request.password)
        .then(token => successResponse(response, { token }))
        .catch(err => errorResponse(response, err));
};

const signUp = (request, response) => {
    authService.signUpUser({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        repeatPassword: request.body.repeatPassword
    })
    .then(token => successResponse(response, { token }))
    .catch(err => errorResponse(response, err));
};

module.exports = {
    signIn,
    signUp
};
