const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'please provide a name']
    },
    email:{
        type: 'string',
        required: [true, 'Please enter a valid email address']
    },
    phone: {
        type: 'string',
        required: [true,"Please add the contact number" ],
    },
},
    {
        timestamps : true,
    }
);

module.exports = mongoose.model('Contact', contactSchema)