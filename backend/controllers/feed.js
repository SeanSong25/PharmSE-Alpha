const express = require('express');
const Question = require('../models/Question.js');
const Author = require('../models/Author.js');
const router = express.Router()

router.get('/getFeed', async (req,res)=>{

    try {
        const filter = {};
        const allQuestions = await Question.find(filter);
        console.log(allQuestions)
        let ans = []
        for(let i of allQuestions){
            if(i.answers.length>0){
                let questionId = i.questionId;
                let title = i.title;
                let authorId = i.answers[0].authorId;
                const author = await Author.find({id:authorId})
                let obj = {
                    id: i.answers[0].answerId,
                    content: i.answers[0].content,
                    author:author,
                    question:{
                        id: questionId,
                        title: title
                    }
                }
                ans.push(obj)
            }
        }
        res.status(201).json(ans);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
})

router.get('/search/:queryString', async (req,res)=>{
    let queryString = req.params.queryString
    try{
        const allQuestions = await Question.find({});
        let filteredQuestions = allQuestions.filter(question => {
            console.log(question.title)
            return question.title.includes(queryString)
        })
        let ans = []
        for(let i of filteredQuestions){
            let authorId = i.answers[0].authorId;
            let questionId = i.questionId;
                let title = i.title;
                const author = await Author.find({id:authorId})
                console.log(author)
                let obj = {
                    id: i.answers[0].answerId,
                    content: i.answers[0].content,
                    author:author,
                    question:{
                        id: questionId,
                        title: title
                    }
                }
                ans.push(obj)
        }
        res.status(201).json(ans);
    }catch(err){
        res.status(500).json({ 'message': err.message });
    }
})



module.exports = router;