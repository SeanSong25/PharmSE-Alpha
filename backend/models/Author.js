const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true,
    },
    type:{
        type: String,
        required:true,
    } 
});

module.exports = mongoose.model("Author",authorSchema)