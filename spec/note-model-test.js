(function(exports) {
  function firstNote() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  exports.firstNote = firstNote();
})(this);
