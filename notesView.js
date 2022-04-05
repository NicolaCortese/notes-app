class NotesView {
  constructor(model) {
    this.model = model;
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
