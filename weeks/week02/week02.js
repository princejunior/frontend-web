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
  {
    note:
      'An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).',
  },
  {
    note:
      'Callbacks: This style of programming is workable, but the indentation level increases with each asynchronous action because you end up in another function. Doing more complicated things, such as running multiple actions at the same time, can get a little awkward.',
  },
  {
    note:
      'A promise is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.',
  },
];

notes.forEach(readNotes);

function readNotes(note) {
  console.log(note.note);

  document.getElementById('notes').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}
