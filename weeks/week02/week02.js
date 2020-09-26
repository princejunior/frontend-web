const notes = [
  {
    note: 'helllllo',
  },
  {
    note: 'helllllo',
  },
  {
    note: 'helllllo',
  },
  {
    note: 'helllllo',
  },
];

notes.forEach(readNotes);

function readNotes(note) {
  console.log(note.note);

  document.getElementById('notes').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}
