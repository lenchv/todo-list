const baseRepository = require('./baseRepository');
const User = require('../models/User');

const userRepository = baseRepository(User);

module.exports = userRepository;
