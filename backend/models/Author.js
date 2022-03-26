const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    id:{
        type:Number,
        required: true
    },
    name:{
        type:String,
        required:true,
    },
    userId:{
        type: Number,
        required:true,
    } 
});

module.exports = mongoos.models("Author",authorSchema)