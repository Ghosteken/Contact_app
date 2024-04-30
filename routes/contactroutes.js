const express = require('express');
const router = express.Router();

const {
    deleteContact,
    updateContact,
    getContacts,
    getContact,
    createContact
}

    = require('../controllers/contactControllers');
const ValidateToken = require('../middleware/ValidateToken');

router.use(ValidateToken);

router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)




module.exports = router;