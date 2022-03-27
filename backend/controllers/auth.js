// // User login authentication

const config = require("../config/authConfig");
const User = require("../models/User");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);

	try {
		User.findOne({
			username: username,
		})
			.populate("role", "-__v")
			.exec((err, user) => {
				// Valid user is created
				if (!user) {
					return res.status(404).send({ message: "User Not found." });
				}

				// Valid password is correct
				var passwordIsValid = password === user.password;
				if (!passwordIsValid) {
					return res.status(401).send({
						accessToken: null,
						message: "Invalid Password!",
					});
				}
				var token = jwt.sign({ id: user.authorId }, config.secret, {
					expiresIn: 86400, // 24 hours
				});

				res.status(200).send({
					authorId: user.authorId,
					username: user.username,
					email: user.email,
					role: user.role,
					accessToken: token,
				});
			});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
