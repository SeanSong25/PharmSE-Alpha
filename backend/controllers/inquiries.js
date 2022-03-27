const express = require("express");
const Question = require("../models/Question.js");
const router = express.Router();

router.post("/question", async (req, res) => {
	console.log("entered");
	const { questionId, authorId, content, title, answers } = req.body;
	console.log(req.body);

	try {
		//create and store the new user
		const questions = await Question.create({
			questionId: questionId,
			authorId: authorId,
			content: content,
			title: title,
			answers: answers,
		});

		console.log(questions);

		res.status(201).json({ success: `New question ${title} created!` });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/getQuestion/:questionId", async (req, res) => {
	let getId = req.params.questionId;
	console.log(getId);
	let question = await Question.findOne({ questionId: getId }).exec();
	if (question == null) {
		res.status(403).json({ message: `There is no ${getId} related!` });
	} else {
		res.status(200).json(question);
	}
});

router.get("/getQuestion", async (req, res) => {
	const filter = {};
	const allQuestions = await Question.find(filter);
	return res.status(200).json(allQuestions);
});

module.exports = router;
