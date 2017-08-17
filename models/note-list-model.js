(function(exports) {

  function List() {
    this._notes = [];
  };

  List.prototype.getNotes = function() {
    return this._notes;
  };

  List.prototype.newNote = function(text) {
    this._notes.push(new Note(text));
  };

  exports.Note = Note;
})(this);
