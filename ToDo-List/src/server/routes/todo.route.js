var controller = require('../controllers/todo.controller.js');

module.exports = function (app) {
    app.route('/api/todo')
        .post(controller.create)
        .get(controller.list);

    app.route('/api/todo/:id')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.param('id',controller.todoById);
};