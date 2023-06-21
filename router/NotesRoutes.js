const express = require('express'); 
const router = express.Router();

const notesControllers = require ("../controllers/notesControllers")

router.get ("/" , notesControllers.getAllNotes);

module.exports = router;
