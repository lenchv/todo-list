const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync();

const getHash = (data) => {
    return bcrypt.hash(data, salt);
};

module.exports = {
    getHash
};
