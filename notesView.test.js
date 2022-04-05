/**
 * @jest-environment jsdom
 */

const fetchMock = require("jest-fetch-mock").enableMocks();
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

  it("clears the previous notes after adding a new one", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    const noteText1 = document.querySelector("#user-input");
    noteText1.value = "First test text";

    const buttonEl = document.querySelector("#add-note");
    buttonEl.click();

    const noteText2 = document.querySelector("#user-input");
    noteText2.value = "Second test text";
    buttonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "First test text"
    );
    expect(document.querySelectorAll("div.note")[1].innerText).toEqual(
      "Second test text"
    );
  });

  // it("displays the result from API call", () => {
  //   document.body.innerHTML = fs.readFileSync("./index.html");

  //   const model = new NotesModel();
  //   const view = new NotesView(model);

  //   fetch.mockResponse(() => )

  //   api.loadNotes((notes) => {
  //     model.setNotes(notes);
  //     notesView.displayNotes();
  //   });

  //   loadNotes(callback) {
  //     fetch("http://localhost:3000/notes")
  //       .then((response) => response.json())
  //       .then((notes) => callback(notes));
  //   }

  //   expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
  //     "This note is coming from the server"
  //   );
  // });
});
