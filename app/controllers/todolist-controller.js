'use strict';

const todoService = require('./../services/todolist-service');

/**
 * Sets response for todolist search.
 *
 * @param request
 * @param response
*/
exports.list = (request, response) => {
    const titleQuery = request.query.title;
    const params = {};
    if(titleQuery) {
        params.title = titleQuery
    };
    const promise = todoService.search(params);
    const result = (todolists) => {
        response.status(200);
        response.json(todolists);
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new order and sets the response.
 *
 * @param request
 * @param response
*/
exports.save = (request, response) => {
    const todolist = Object.assign({}, request.body);
    const result = (saveTodolist) => {
        response.status(201);
        response.json(saveTodolist);
    };
    const promise = todoService.save(todolist);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Returns order response.
 *
 * @param request
 * @param response
*/
exports.get = (request, response) => {
    const todolistId = request.params.id;
    const result = (todolist) => {
        response.status(200);
        response.json(todolist);
    };
    const promise = todoService.get(todolistId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Updates the order resource.
 *
 * @param request
 * @param response
*/
exports.update = (request, response) => {
    const todolistId = request.params.id;
    const updateTodolist = Object.assign({}, request.body);
    updateTodolist.id = todolistId;
    const result = (todolist) => {
        response.status(200);
        response.json(todolist);
    };
    const promise = todoService.update(updateTodolist);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes an order resource.
 *
 * @param request
 * @param response
*/
exports.delete = (request, response) => {
    const todolistId = request.params.id;
    const result = () => {
        response.status(200);
        response.json({
            message: "Successfully Deleted."
        });
    };
    const promise = todoService.delete(todolistId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return errorCallback;
};