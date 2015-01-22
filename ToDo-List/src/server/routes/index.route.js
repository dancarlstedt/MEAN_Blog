var controller = require('../controllers/index.controller.js');

module.exports = function (app) {
    app.route('/', controller.render);
};