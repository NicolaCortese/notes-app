class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");

    const addNoteButton = document.querySelector("#add-note");

    addNoteButton.addEventListener("click", () => {
      const noteText = document.querySelector("#user-input").value;
      this.addNewNote(noteText);
    });
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.mainContainer.append(noteEl);
    });
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView;
