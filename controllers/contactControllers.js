//description get all contacts
//routes get/api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get all contacts ' })
};

//description get all contact
//routes get/api/contacts/:id
//@route public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get  contact${req.params.id}` })
};


//description UPDATE contact
//routes POST /api/contacts/:id
//@route public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Updated contact${req.params.id}` })
};


//description DELETE contact
//routes get/api/contacts/:id
//@route public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact ${req.params.id}` })
};

//description Create contact
//routes POST /api/contacts/
//@route public
const createContact = (req, res) => {
    console.log("the request body is", req.body)
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400); 
        throw new Error("ALL fields are required")
    }
    res.status(201).json({ message: "create contact " })
};


module.exports = {
    deleteContact,
    updateContact,
    createContact,
    getContacts,
    getContact
}; 