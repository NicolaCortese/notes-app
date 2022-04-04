const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
model.addNote("Joe is having a sandwhich for lunch");
const notesView = new NotesView(model);
notesView.displayNotes();
