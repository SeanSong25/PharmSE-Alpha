const express = require("express");
const User = require("../models/User.js");
const config = require("../config/authConfig");
const router = express.Router();
var jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	const { username, password, email, role, authorId } = req.body;
	console.log(req.body);
	if (!username || !password || !email || !role)
		return res.status(400).json({ message: "Username and password are required." });

	// Check for duplicate usernames in the db
	const duplicateUser = await User.findOne({ username: username }).exec();
	if (duplicateUser) return res.status(409).json({ message: "Username already exists" });

	// Check for duplicate email in db
	const duplicateEmail = await User.findOne({ email: email }).exec();
	if (duplicateEmail) return res.status(409).json({ message: "Email already exists" });

	try {
		//encrypt the password
		//const hashedPwd = await bcrypt.hash(pwd, 10);

		//create and store the new user
		const result = await User.create({
			username: username,
			password: password,
			email: email,
			role: role,
			authorId: authorId,
		});

		console.log(result);

		var token = jwt.sign({ id: User.authorId }, config.secret, {
			expiresIn: 86400, // 24 hours
		});

		res.status(201).send({
			username: username,
			password: password,
			email: email,
			role: role,
			authorId: authorId,
			accessToken: token,
			success: `New user ${username} created!`,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
