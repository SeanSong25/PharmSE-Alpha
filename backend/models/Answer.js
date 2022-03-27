const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
            
    const answerSchema = new Schema({
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
});
            
module.exports = mongoose.model("Answer",answerSchema)