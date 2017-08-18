function testNoteList() {
  var noteList = new NoteList();
  notes = noteList.getNotes();
  assert.isTrue(noteList.getNotes().length === 0, "testNoteList");
}
testNoteList();

function testCreatingNote() {
  var noteList = new NoteList();
  noteList.createNote("JavaScript");
  assert.isTrue(noteList.getNotes()[0].getText() === "JavaScript", "testCreatingNote");
}
testCreatingNote();
