const path = require('path');

const requireHelper = (namespace, name) => {
    return require(path.join('../app', namespace, name));
};

module.exports = {
    requireController: (name) => requireHelper('controllers', name),
    requireService: (name) => requireHelper('services', name),
    requireRepository: (name) => requireHelper('repositories', name)
};
