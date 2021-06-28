const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    refreshToken : {type : String, required : true},
    user : {type : mongoose.Types.ObjectId, ref : 'user'}
})

const TokenModel = mongoose.model('token',schema);

module.exports = TokenModel;