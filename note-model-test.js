var note = require("./note-model").note;

if (note("My favourite language is JavaScript") !== "My favourite language is JavaScript") {
  throw new Error("Your favourite language is Ruby");
} else {
  console.log("This is not a note");
}
