const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.addContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.removeContact);
router.delete('/', contactController.removeAllContacts);

module.exports = router;
