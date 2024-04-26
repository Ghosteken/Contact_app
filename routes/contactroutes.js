const express = require('express');
const router = express.Router();

router.route('/').get( (req, res) =>{
    //res.send("get all contacts");
    res.status(200).json({
        message: 'get all contacts',
    })
})


router.route('/').post( (req, res) =>{
    res.status(200).json({
        message: 'create a new contact'
    })
})


router.route('/:id').put( (req, res) =>{
    res.status(200).json({
        message: 'Update contacts'
    })
})


router.route('/').get( (req, res) =>{
    res.status(200).json({
        message: 'Hello World!'
    })
})

module.exports = router;