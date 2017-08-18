(function(exports) {
  function testsNote() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.getText !== "My favourite language is JavaScript");
  };

  exports.testsNote = testsNote();
})(this);
