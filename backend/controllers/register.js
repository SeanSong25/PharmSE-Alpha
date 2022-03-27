<<<<<<< HEAD
const express = require('express')
const User = require('../models/User.js');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router()

router.post('/register', async (req,res)=>{
    const { username, password, email, role } = req.body;
    console.log(req.body)
    if (!username || !password || 
        !email || !role) return res.status(400).json({ 'message': 'Username and password are required.' });
=======
const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

router.post("/register", async (req, res) => {
	const { username, password, email, role } = req.body;
	console.log(req.body);
	if (!username || !password || !email || !role)
		return res.status(400).json({ message: "Username and password are required." });
>>>>>>> 4e6a75ead360fa17e3f5d1362fa6db570481aa9e

	// check for duplicate usernames in the db
	const duplicate = await User.findOne({ username: username }).exec();
	if (duplicate) return res.sendStatus(409); //Conflict

<<<<<<< HEAD
    try {
        //encrypt the password
        //const hashedPwd = await bcrypt.hash(pwd, 10);
        
        id = ObjectID();

        //create and store the new user
        const result = await User.create({
            "username": username,
            "password": password,
            "email" : email,
            "role" : role,
            "authorId" : id
        });
=======
	try {
		//encrypt the password
		//const hashedPwd = await bcrypt.hash(pwd, 10);

		//create and store the new user
		const result = await User.create({
			username: username,
			password: password,
			email: email,
			role: role,
			authorId: 1,
		});
>>>>>>> 4e6a75ead360fa17e3f5d1362fa6db570481aa9e

		console.log(result);

		res.status(201).json({ success: `New user ${username} created!` });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
