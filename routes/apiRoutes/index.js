const router=require('express').Router();
const  {notes } = require('../../db/db.json');
const { createNewNote,findById,removeById } = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');


router.get('/notes',(req,res) => {
    res.json(notes);
});

router.post('/notes',(req,res) => {
    req.body.id=uuidv4();
    const note=createNewNote(req.body,notes);
    res.json(note);
});

router.delete('/notes/:id',(req,res) => {
    const result = removeById(req.params.id, notes);
    
      if (result) 
      {
        res.send("DELETE Request Called")
      } 
      else 
      {
        res.send(404);
       }
});

module.exports=router;