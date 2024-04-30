const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    username:{
        type: 'string',
        required: [true,'please add a name' ] 
    },
    email:{
        type: 'string',
        required: [true,'please add an email address'],
        unique: true,
    },
    password:{
        type: 'string',
        required: [true,'please add a password'],

    },
},
{
    timestap: true,
},
);

module.exports = mongoose.model('User', userSchema)