'use strict';

const todoController = require('./../controllers/todolist-controller');

module.exports = (app) => {
    app.route('/todolists')
        .get(todoController.list)
        .post(todoController.save);

    app.route('/todolists/:id')
        .get(todoController.get)
        .put(todoController.update)
        .delete(todoController.delete);
};

