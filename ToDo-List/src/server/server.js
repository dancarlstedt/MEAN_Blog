process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var mongoose = require('./config/mongoose');

// initialize the mongoose
var db = mongoose();

var app = express();
app.listen('3000');

module.exports = app;
console.log('Server started on port http://localhost:3000');