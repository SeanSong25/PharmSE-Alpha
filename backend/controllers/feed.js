const express = require('express');
const Question = require('../models/Question.js');
const router = express.Router()

router.get('/getFeed', async (req,res)=>{

    try {
        const filter = {};
        const allQuestions = await Question.find(filter);
        console.log(allQuestions)
        let ans = []
        for(let i of allQuestions){
            if(i.answers.length>0){
                ans.push(i.answers[0])
            }
        }
        res.status(201).json(ans);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
})

module.exports = router;