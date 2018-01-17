var express = require('express');
config = require('./configs.server');
morgan = require('morgan');
compress = require('compression');
bodyParser = require('body-parser');
methodOverride = require('method-override');
session = require('express-session');
jwt = require('jsonwebtoken');
multer = require('multer'); //middleware for handling multipart/form-data
cors = require('cors'); //For cross domain error
// crypto = require('crypto');
//CryptoJS = require('node-cryptojs-aes').CryptoJS; //For Encryption and Decryption
fs = require('file-system');

/*var MongoStore = require('connect-mongo')(express);
NOTE : - This is used to strore session variable's value in database.
But this is not working right now because it shows some error. please check it if want to use it.*/

module.exports = function () {
    //console.log('env' + process.env.NODE_ENV)
    var app = express();
    //console.log(__dirname)
    
    if (process.env.NODE_ENV === 'development') {
       
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.use(cors());
    // app.use(morgan('combined')); // Just uncomment this line to show logs.

    app.use(session({
        cookie: {
            maxAge: 30000
        },
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));    
    require('../app/routes/client.server.routes.js')(app, express);
    
    return app;
};