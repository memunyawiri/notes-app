function testViewHTMLString() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.createNote("Favourite food: pesto");
  noteList.createNote("Favourite drink: seltzer");
  assert.isTrue(noteListView.viewHTML() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>", "testViewHTMLString");
}
testViewHTMLString();
