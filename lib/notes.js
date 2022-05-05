const fs=require('fs');
const path=require('path');

function createNewNote(body,notesArray){
const note=body;
notesArray.push(note);
fs.writeFileSync(
    path.join(__dirname,'../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
);
return note;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
 
  function removeById(id, notesArray) {
    
      const index =findWithAttr(notesArray,'id',id);
      //console.log(index);
      //console.log(id);
      const myresult = notesArray.splice(index,1);
      fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
      return myresult;
  }

module.exports={
    createNewNote,
    findById,
    removeById
};