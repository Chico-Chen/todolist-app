'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for order object.
 */
let TodoSchema = new Schema({
    title: {
        type: String,
        required: "title is missing"
    },
    description: {
        type: String,
        required: "Description are missing"
    },
},
{
    versionKey: false,
    timestamps: {
        createdAt: 'createdDate',
        updatedAt: 'modifiedDate',
    }
});
// Duplicate the id field as mongoose returns _id field instead of id.
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todolist', TodoSchema);