const NotesModel = require("./notesModel")

describe("testing the notesModel class", () => {
  const model = new NotesModel();

  it("returns the empty notes", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("adds a note", () => {
    model.addNote("Buy milk");
    expect(model.getNotes()).toEqual(["Buy milk"]);
  });

  it("add a second note", () => {
    model.addNote("Play games");
    expect(model.getNotes()).toEqual(["Buy milk", "Play games"]);
  });

  it("resets our notes", () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
