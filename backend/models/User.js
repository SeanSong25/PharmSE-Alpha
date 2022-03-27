const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    roles:{
        type:String,
        required:true,
        default:1
    },
    email:{
        type:String,
        required:true,
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

module.exports = mongoose.model("User",userSchema)