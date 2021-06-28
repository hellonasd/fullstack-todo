const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: {
        message: String,
        completed: Boolean,
        favorite: Boolean,
        created: Date,
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    },

})

const TodoModel = mongoose.model('todo', schema);

module.exports = TodoModel;