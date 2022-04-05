const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesAPI = require("./notesAPI");

const model = new NotesModel();
const api = new NotesAPI();
const notesView = new NotesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  notesView.displayNotes();
});
