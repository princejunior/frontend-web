const object = [
  {
    note: 'Creating Objects: const object = {}',
  },
  {
    note: 'long way: const object  = { name: name, realName: realName };',
  },
  {
    note: 'short way: const object = { name, realName };',
  },
  {
    note: 'access properties: object.____ or object["____"]',
  },
  {
    note: 'calling methods: object.____() or object["__"]',
  },
  {
    note:
      'The "in" operator can be used to check whether an object has a particular property. "city" in object',
  },
  {
    note:
      'The Object.keys() method will return an array of all the keys of any object that is provided as an argument. also adds some the Object.values() that works in the same way, but returns an array of all the objects value:',
  },
];

const json = [
  {
    note: `It is an extremely popular lightweight data-storage format that is used by a large number of services
     for data serialization and configuration. It is often used to exchange information between web services, 
     and is employed by sites such as Twitter, Facebook and Trello to share information. The beauty of JSON is 
     that it manages to hit the sweet spot between being both human- and machine-readable.`,
  },
  {
    note: `Property names must be double-quoted
    Permitted values are double-quoted strings, numbers, true, false, null, arrays and objects
    Functions are not permitted values'`,
  },
  {
    note: `The parse() method takes a string of data in JSON format and returns a JavaScript object. 
    The stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data, as can be seen in the example:`,
  },
];

const objectModel = [
  {
    note: `Document.body returns the body element of a web page.`,
  },
  {
    note: `Document.images returns a node list of all the images contained in the document.`,
  },
  {
    note: `Document.links returns a node list of all the <a> elements and <area> elements that have an href attribute.`,
  },
  {
    note: `Document.anchors returns a node list of all the <a> elements that have a name attribute.`,
  },
  {
    note: `Document.forms returns a node list of all the forms in the document. `,
  },
];

object.forEach(readNotes);

function readNotes(note) {
  // console.log(note.note);

  document.getElementById('notes').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}

objectModel.forEach(readOM);

function readOM(note) {
  // console.log(note.note);

  document.getElementById('objectModel').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}

json.forEach(readJson);

function readJson(note) {
  // console.log(note.note);

  document.getElementById('json').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}
