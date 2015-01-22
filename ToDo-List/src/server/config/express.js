var express = require('express');
var morgan = require('morgan');
var compress = require('compress');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config.js');

module.exports = configureExpress();

function configureExpress() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        // log all requests
        app.use(morgan('dev'));
    } else {
        app.use(compress());
    }

    // app ability to parse json fron request body
    app.use(bodyParser.urlencoded(
            {extended: true})
    );
    app.use(bodyParser.json());

    // support for PUT and DELETE verbs
    app.use(methodOverride());

    app.set('views', './server/views')
    app.set('view engine', 'ejs');

    require('../routes/index.route.js');
    require('../routes/todo.route.js');

    //setup static file serving for all assets
    app.use(express.static('./public'));

    return app;

}