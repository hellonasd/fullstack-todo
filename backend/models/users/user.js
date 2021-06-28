const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
    },
    username : {
        type : String
    },
    todos : [{type : mongoose.Types.ObjectId, ref : 'todo'}]
    
})

const UserModel = mongoose.model('user',schema);

module.exports = UserModel;