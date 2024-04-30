const User = require('../models/userModel');
const bycrypt = require('bycrypt');
const jwt = ('jsonwebtoken')
const asyncHandler = require('async-Handler');
//register a user
//route post /api/users/register
//private route

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error(`Invalid username or email address or password`)
    }
    const userAvaliable = await User.findOne({ email });
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
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400)
        throw new Error('request failed');
    }
    res.json({ message: 'registered successfully' })
});


//login a user
//route post /api/users/login
//private route

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error(`Invalid email or password, all fields are required`);
    }
    const user = await User.findOne({ email });
    //compare password with hash password
    if (user && (await bycrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                id: user.id,
                email: user.email,
            }
        }, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m"})
        res.status(200).json({ accessToken});
    } else {
        res.status(401)
        throw new Error(`Invalid email or password`);
    }
});



//currnet user information
//route post /api/users/currnet
//private route

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = { registerUser, loginUser, currentUser }