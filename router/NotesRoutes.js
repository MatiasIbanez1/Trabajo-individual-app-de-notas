const express = require('express'); 
const router = express.Router();

const notesControllers = require ("../controllers/notesControllers")

// router.get ("/" , notesControllers.showNotes);

// router.get("/formularioNota",notesControllers.createNote)
// router.post("/",notesControllers.storeNote)

router.get ("/" , notesControllers.getAllNotes);
router.get ("/createNotes" , notesControllers.createNotes);
router.get ("/detailNotes/:id" , notesControllers.getNotebyid);
router.post ("/", notesControllers.storeNotes);

module.exports = router;
