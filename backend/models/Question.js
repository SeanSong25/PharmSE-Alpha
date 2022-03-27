const answer = require ("./Answer.js")
const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
            
    const questionSchema = new Schema({
        questionId:{
            type:String,
            required: true,
        },
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
        },
        answers:[answer]
        
});
            
module.exports = mongoose.models("Question",questionSchema)