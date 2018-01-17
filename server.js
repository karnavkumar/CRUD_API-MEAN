process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var exp = require('express');
var config = require('./configs/configs.server');
var express = require('./configs/express.server');
var mongoose = require('./configs/mongoose.server');

if (global.permission) {
} else {
    global.permission = [];
}

var db = mongoose();
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use(exp.static(__dirname + '/front'));
app.get('/', function (req, res) {
    res.sendfile('./front/index.html');
});

app.listen(config.serverPort);
console.log('Server running at http://localhost:' + config.serverPort + '/');