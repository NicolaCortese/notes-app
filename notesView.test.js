/**
 * @jest-environment jsdom
 */

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const fs = require("fs");
const { createPublicKey } = require("crypto");

describe("the notesView page", () => {
  it("return 2 divs with .note as class", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    model.addNote("note 1");
    model.addNote("note 2");

    const view = new NotesView(model);
    view.displayNotes();
    // const divs = document.querySelectorAll("div.note");
    console.log(document.querySelectorAll("div.note"));
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a new note to the page", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    const noteText = document.querySelector("#user-input");
    noteText.value = "Test text";

    const buttonEl = document.querySelector("#add-note");
    buttonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "Test text"
    );
  });
});
