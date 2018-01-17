config = require('./configs.server');
mongoose = require('mongoose');
module.exports = function () {

    var db = mongoose.connect(config.db, {
        useMongoClient: true
    }); // Added for DeprecationWarning: `open()` is deprecated
    mongoose.Promise = global.Promise; // Added For Mpromise Depricaton error.

    require('../app/models/client.server.model');


    return db;
};