const fs = require('fs');
const path = require('path');

const noteListPath = path.resolve(__dirname, '../database/notes.json');
const noteList = JSON.parse(fs.readFileSync(noteListPath, 'utf8'));
console.log (noteList)
const notesControllers = {
    getAllNotes:(req,res)=> {
        res.render('index',{
            noteList: noteList
        })


},

getNotebyid: (req,res)=> { 
    let id = req.params.id
    const filteredNote = noteList.find((note) => {
        return note.id == id;
      });
    res.render ("notes/detailNote",{filteredNote})
},
