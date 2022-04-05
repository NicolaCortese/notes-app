const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesAPI = require("./notesAPI");

const model = new NotesModel();
const notesView = new NotesView(model);
const api = new NotesAPI();

api.loadNotes((notes) => {
  model.setNotes(notes);
  notesView.displayNotes();
});
