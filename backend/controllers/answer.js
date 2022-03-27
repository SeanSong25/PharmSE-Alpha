const express = require('express')
const Answer = require('../models/Answer.js');
const Question = require('../models/Question.js')
const ObjectID = require('mongodb').ObjectID;
const router = express.Router()

router.post('/answer', async (req,res)=>{
    const { questionId, answerId, authorId, content, title } = req.body;
    console.log(req.body)
    try {
        const result = await Answer.create({
            "questionId": questionId,
            "answerId": answerId,
            "authorId" : authorId,
            "content" : content,
        });

        let question = await Question.findOne({questionId: questionId});
        question.answers.push(result)
        
        var query = {'questionId': questionId};

        await Question.findOneAndUpdate(query, question, {upsert: true});

		console.log(result);

		return res.status(201).json(result);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

module.exports = router;
