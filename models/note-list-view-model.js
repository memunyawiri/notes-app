(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }
  NoteListView.prototype.viewHTML = function() {
    var notes = this.noteList.getNotes();

    var htmlString = "<ul>" + notes.map(function (note) {
      return "<li><div>" + note.getText() + "</div></li>"
    }).join("") + "</ul>";
    return htmlString;
  };
  exports.NoteListView = NoteListView;
})(this);
