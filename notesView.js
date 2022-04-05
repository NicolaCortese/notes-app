class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");

    const addNoteButton = document.querySelector("#add-note");

    addNoteButton.addEventListener("click", () => {
      const noteText = document.querySelector("#user-input");

      this.model.addNote(noteText.value);

      this.displayNotes();
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
}

module.exports = NotesView;
