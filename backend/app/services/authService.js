const process = require('process');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const jwtSecret = process.env.JWT_SECRET;

const userRepository = require('../repositories/userRepository');
const hashService = require('./hashService');

const getJwtTokenByUser = (user) => {
    return jwt.sign({ id: user._id }, jwtSecret);
};

const getUserById = (id) => {
    return userRepository.findById(id);
};

const getUserByEmailAndPassword = (email, password) => {
    if (!email || !password) {
        return Promise.reject(new Error('Email or password is incorrect!'));
    }

    return hashService.getHash(password)
        .then(password => {
            return userRepository.findByCriteria({
                email, password
            });
        })
        .then(users => {
            if (!users.length) {
                return Promise.reject(new Error('User not found!'));
            }
    
            return users[0];
        });
};

const authenticate = (email, password) => {
    return getUserByEmailAndPassword(email, password)
        .then(user => {
            return ({
                token: getJwtTokenByUser(user),
                user
            })
        });
};

const initJwt = () => {
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    }, (jwtPayload, next) => {
        return getUserById(jwtPayload.id)
            .then(user => {
                return next(null, user);
            })
            .catch(err => {
                return next(err);
            });
    }));
};

const signUpUser = ({
    email, password, repeatPassword, name
}) => {
    if (!password || password.length < 6) {
        return Promise.reject(new Error('Password must contain at least 6 characters'));
    }

    if (password !== repeatPassword) {
        return Promise.reject(new Error('Passwords are different'));
    }

    if (!/[a-z0-9_\.-]+\@[a-z0-9_\.-]+/i.test(email)) {
        return Promise.reject(new Error('Email is incorrect'));
    }

    if (!name) {
        name = 'User';
    }

    return userRepository.findByCriteria({ email })
        .then(user => {
            if (user.length) {
                return Promise.reject(new Error('User has already registered!'));
            }

            return hashService.getHash(password);
        })
        .then(password => {
            return userRepository.create({
                email, password, name
            });
        })
        .then(user => {
            return ({
                token: getJwtTokenByUser(user),
                user
            });
        });
};

module.exports = {
    getUserById,
    getUserByEmailAndPassword,
    authenticate,
    initJwt,
    signUpUser
};
