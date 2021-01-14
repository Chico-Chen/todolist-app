'use strict';

const todoRoute = require('./../routes/todolist-route');

module.exports = (app) => {
    todoRoute(app); 
};