var controller = require('../controllers/index.controller.js');

module.exports = function (app) {
    app.get('/', controller.render);
};