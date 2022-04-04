/**
 * @jest-environment jsdom
 */

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const fs = require("fs");

describe("the notesView page", () => {
  it("return 2 divs with .note as class", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    model.addNote("note 1");
    model.addNote("note 2");

    const view = new NotesView(model);
    view.displayNotes();
    const divs = document.querySelectorAll("div.note");
    console.log(document.querySelectorAll("div.note"));
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
