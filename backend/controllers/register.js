const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

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

		res.status(201).json({ success: `New user ${username} created!` });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
