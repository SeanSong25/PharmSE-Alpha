const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
            
    const authorSchema = new Schema({
        authorId:{
            type:Number,
            required: true
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type: Number,
            required:true,
        } 
});
            
module.exports = mongoos.models("Author",authorSchema)