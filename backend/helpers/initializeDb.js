const mongoose = require('mongoose');

module.exports = ({
    host,
    port,
    user,
    pass,
    dbName
}) => {
    mongoose.connect(`mongodb://${host}:${port}/`, {
        user, pass, dbName
    });
};
