'use strict';
const mongoose = require('mongoose'),
    Todolist = mongoose.model('todolist');

/**
 * Returns a promise for search results.
 *
 * @param search param.
*/
exports.search = (params) => {
    const promise = Todolist.find(params).exec();
    return promise;
};

/**
 * Saves the new todolist object.
 *
 * @param todolist
*/
exports.save = (todolist) => {
    const newTodolist = new Todolist(todolist);
    return newTodolist.save();
};

/**
 * Returns the todolist object by id.
 *
 * @param todolistId
*/
exports.get = (todolistId) => {
    const todoPromise = Todolist.findById(todolistId).exec();
    return todoPromise;
};

/**
 * Updates an existing todolist.
 *
 * @param updateTodolist
*/
exports.update = (updateTodolist) => {
    const promise = Todolist.findByIdAndUpdate(updateTodolist.id, updateTodolist).exec();
    return promise;
};

/**
 * Deletes an existing todolist.
 *
 * @param todolistId
*/
exports.delete = (todolistId) => {
    const promise = Todolist.findByIdAndRemove(todolistId).exec();
    return promise;
};