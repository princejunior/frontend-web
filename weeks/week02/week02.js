const notes = [
  {
    note:
      'JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects.',
  },
  {
    note: 'The trim method removes whitespaces from both ends of a string.',
  },
  {
    note:
      'The split method splits a string into substrings using a separator string. The substrings are returned as an array. The original string is not changed.',
  },
  {
    note:
      'Event listeners are called only when the event happens in the context of the object they are registered on.',
  },
];

notes.forEach(readNotes);

function readNotes(note) {
  console.log(note.note);

  document.getElementById('notes').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}
