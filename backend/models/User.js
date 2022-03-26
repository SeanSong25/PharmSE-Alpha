const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    roles:{
        type:Number,
        required:true,
        default:1
    },
    password:{
        type:String,
        required: true
    },
    authorId:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.models("User",userSchema)