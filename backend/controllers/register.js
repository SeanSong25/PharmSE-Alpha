const express = require('express')
const User = require('../models/User.js');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router()

router.post('/register', async (req,res)=>{
    const { username, password, email, role } = req.body;
    console.log(req.body)
    if (!username || !password || 
        !email || !role) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

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

        console.log(result);

        res.status(201).json({ 'success': `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
})

module.exports = router;