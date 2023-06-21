const fs = require('fs');
const path = require('path');

const noteListPath = path.resolve(__dirname, '../database/notes.json');
const noteList = JSON.parse(fs.readFileSync(noteListPath, 'utf8'));

const notesControllers = {
    getAllNotes:(req,res)=> {
        res.render('index',{
            note: noteList
        })
}
    }
module.exports = notesControllers;
