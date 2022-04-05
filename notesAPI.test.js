const NotesAPI = require("./notesAPI");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("notesAPI class", () => {
  it("calls fetch and loads notes", async () => {
    const api = new NotesAPI();

    fetch.mockResponseOnce(
      JSON.stringify({
        note: "This note is coming from the server",
      })
    );

    api.loadNotes((note) => {
      expect(note.note).toEqual("This note is coming from the server");
    });
  });
});
