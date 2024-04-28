const User = require('../models/userModel');
const bycrypt = require('bycrypt');
const asyncHandler = require('async-Handler');
//register a user
//route post /api/users/register
//public route

const registerUser = asyncHandler(async(req, res) =>{
    const {username,email,password} = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error(`Invalid username or email address or password`)
    }
    const userAvaliable = await User.findOne({email});
    if (userAvaliable) {
        res.status(400)
        throw new Error(`user already authenticated`);
    }
    //hash password
    const HarshedPassword = await bycrypt.hash(password, 10)
    console.log(HarshedPassword + ' password')
    const user = await User.create({
        username,
        email,
        password: HarshedPassword,
    });
    console.log(user + ' created successfully');
    if (user) {
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400)
        throw new Error('request failed');
    }
    res.json({message: 'registered successfully'})
});


//login a user
//route post /api/users/login
//public route

const loginUser = asyncHandler(async(req, res) =>{
    throw new Error
    res.json({message: 'login successfully'})
});



//currnet user information
//route post /api/users/currnet
//private route

const currentUser = asyncHandler(async(req, res) =>{
    throw new Error
    res.json({message: 'info saved successfully'})
});

module.exports = {registerUser, loginUser, currentUser }