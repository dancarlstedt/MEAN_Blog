var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);

    // load models here
    require('../models/todo.model');

    return db;
};