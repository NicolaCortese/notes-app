const NotesModel = require("./notesModel");

const model = new NotesModel();
model.addNote("Joe is having a sandwhich for lunch");
console.log(model.getNotes());
