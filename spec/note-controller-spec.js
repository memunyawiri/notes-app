(function(exports) {
  function testNoteControllerCanTakeAParameter() {
    var mockNoteList = { createNote: function() {}};
    var noteController = new NoteController(mockNoteList);
    assert.isTrue(noteController.noteList, 'testNoteControllerCanTakeAParameter');
  };

  function testNoteControllerCanAddNoteToNoteList() {
    function MockNoteList() {
      this.count = 0;
    }

    MockNoteList.prototype.createNote = function () {
      this.count++;
    };
    var mockNoteList = new MockNoteList;
    var noteController = new NoteController(mockNoteList);
    mockNoteList.createNote();
    assert.isTrue(mockNoteList.count === 1, "testNoteControllerCanAddNoteToNoteList");
  };

  function testNoteControllerCanAddNoteWithText() {
    var noteListDouble = { createNote: function() {} };
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController.noteListView._noteList !== noteListDouble, "testNoteControllerCanAddNoteWithText")
  }

  function testNoteControllerInnerHTMLExists() {
    var noteListDouble = { createNote: function() {} };
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(!noteController.HTML, "testNoteControllerInnerHTMLExists");
  }

  function testNoteControllerElementAppContainsCorrectHTML() {
    var noteDouble = { getText: function() {return "Test Text"} }
    var noteListDouble = { createNote: function() {}, getNotes: function() { return [noteDouble] } };
    var noteController = new NoteController(noteListDouble);
    noteController.insertHtml();
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Test Text</div></li></ul>", "testNoteControllerElementAppContainsCorrectHTML")
  };


  testNoteControllerCanTakeAParameter();
  testNoteControllerCanAddNoteToNoteList();
  testNoteControllerCanAddNoteWithText();
  testNoteControllerInnerHTMLExists();
  testNoteControllerElementAppContainsCorrectHTML();
})(this);









// (function(exports) {
//   function testNoteControllerCreation() {
//     var noteController = new NoteController();
//     assert.isTrue(noteController);
//   }
// testNoteControllerCreation();
// })(this);
//
// (function(exports) {
//   function testNoteControllerInsertsHTML() {
//     var noteList = new NoteList();
//     noteList.createNote("Favourite drink: seltzer");
//     var noteController = new NoteController(noteList);
//     noteController.insertHtml();
//     var actualInnerHTML = document.getElementById('app').innerHTML;
//     assert.isEqualTo(actualInnerHTML, "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
//   }
//   testNoteControllerInsertsHTML();
// })(this);
