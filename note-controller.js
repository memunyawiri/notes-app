(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);

  }

  NoteController.prototype.getsHtml = function () {
    var htmlView = this.noteListView.viewHTML();
    document.getElementById('app').innerHTML = htmlView;
  };

  exports.NoteController = NoteController;
})(this);

var noteList = new NoteList;
noteList.createNote("Favourite drink: seltzer");
var noteController = new NoteController(noteList);
noteController.getsHtml();
