class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainer = document.querySelector("#main-container");

    const addNoteButton = document.querySelector("#add-note");

    addNoteButton.addEventListener("click", () => {
      const noteText = document.querySelector("#user-input");
      this.addNewNote(noteText.value);
      noteText.value = "";
    });
  }

  displayNotes() {
    const notesToClear = document.querySelectorAll(".note");
    notesToClear.forEach((note) => note.remove());

    this.api.loadNotes((notes) => {
      this.model.setNotes(notes);
      const notes2 = this.model.getNotes();
      console.log(notes2);

      notes2.forEach((note) => {
        const noteEl = document.createElement("div");
        noteEl.innerText = note;
        noteEl.className = "note";
        this.mainContainer.append(noteEl);
      });
    });
  }

  addNewNote(note) {
    // this.model.addNote(note);

    this.api
      .createNote("http://localhost:3000/notes", { content: note })
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        this.displayNotes();
      });
  }
}

module.exports = NotesView;
