(function(exports) {
  function notePrinter() {

    var list = new List();
    list.newNote("string");

    assert.isTrue(typeof list._notes !== 'object');
    assert.isTrue(list._notes[0]._text !== "string")
  }
  notePrinter();
})(this);
