// const asyncHandler = require('async-handler');
// const mongoose = require('mongoose');

// const DbConnect = async() => {
//     try {
//         const db = await mongoose.connect(process.env.TZ)
//         undefinedTopology = true
//         console.log('Connected to database ' + db)
//     } catch (error) {
//         console.log(error)
//         process.exit(1);
//     }

// }

// module.exports= {DbConnect}



//API//

const CreateUser = asyncHandler(async(req, res) => {
    if (caches) {
        
    }
    const user = await db.create

    throw new Error
    console.log("Creating new user...")
})


const CreateUser1 = asyncHandler(async (req, res) => {
    {name, email, password} req.body;
    if (!email || !password || !name) {
        res.status(400); 
        console.log(error)
        throw new Error(`Invalid email or phone, all fields are required`);
    }
    const userAvaliable = await User.findOne({email});
    if (userAvaliable) {
        res.status(200);
        throw new Error(`user already authenticated`);
    }
    //hash password
    const harsedPassword = bcrypt.hash(password);
    const user = await User.create({
        name,
        email,
        password:harsedPassword
    })
    console.log(user +'created successfully');
    if (user) {
        res.status(201)('success');
    }else{
        res.status(400)
        throw new Error('request failed');
    }
    res.json({message:'registered successfully'})
    res.status(201).json({_id: user.id, email: user.email});
})













