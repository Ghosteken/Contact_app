const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Contacts = require('../models/contactModel');
//description get all contacts
//routes get/api/contacts
//@access public
 
const getContacts = asyncHandler(async(req, res) => {
    const Contact =await Contacts.find({user_id: req.user.id}); 
    res.status(200).json(Contact)
});

//description get all contact
//routes get/api/contacts/:id
//@route public
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact not found`);
    }
    res.status(200).json(contact)
});


//description UPDATE contact
//routes POST /api/contacts/:id
//@route public
const updateContact = asyncHandler(async(req, res) => {
    const Contact = await Contact.findById(req.params.id);
    if (!Contact) {
        res.status(400); 
        console.log(error)
        throw new Error(`Invalid email or phone`);
    }
    if (Contacts.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error(`Not authorized to update this contact`);
    }

    const updatedContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact)
});


//description DELETE contact
//routes get/api/contacts/:id
//@route public
const deleteContact = asyncHandler(async (req, res) => {
    const Contact = await Contacts.findById( req.params.id);
    if (!Contact) {
        res.status(404); 
        throw new Error('Contact not found')
    }
    if (Contacts.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error(`Not authorized to update this contact`);
    }
    await Contact.deleteOne({_id: req.user.id})

    res.status(200).json(Contact)
});

//description Create contact
//routes POST /api/contacts/
//@route public
const createContact = asyncHandler(async(req, res) => {
    console.log("the request body is", req.body)
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400); 
        throw new Error("ALL fields are required")
    }
    const contact = await contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })
    res.status(201).json(contact)
});


module.exports = {
    deleteContact,
    updateContact,
    createContact,
    getContacts,
    getContact,
}; 