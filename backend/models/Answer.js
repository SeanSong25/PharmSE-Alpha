const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
            
    const answerSchema = new Schema({
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
});
            
module.exports = mongoose.models("Answer",answerSchema)