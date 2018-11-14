const passport = require('passport');

module.exports = () => {
    return (request, response, next) => passport.authenticate('jwt', { session: false }, (user, info, err) => {
        if (err) {
            err.status = 401;
            next(err);
        } else {
            next();
        }
    })(request, response, next);
};