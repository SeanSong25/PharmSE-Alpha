const Answer = require ("./Answer.js")
const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
            
    const questionSchema = new Schema({
        questionId:{
            type:String,
            required: true,
        },
        authorId:{
            type:String,
            required: true
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type: String,
            required:true,
        },
        answers:[{
            questionId:{
                type:String,
                required: true,
            },
            answerId:{
                type:String,
                required: true,
            },
            authorId:{
                type:String,
                required: true
            },
            content:{
                type:String,
                required:true,
            },
        }]
        
});
            
module.exports = mongoose.model("Question",questionSchema)