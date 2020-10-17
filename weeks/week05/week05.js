const notes = [
    {
      note: `System error ― there’s a problem with the system or external devices with which the program is interacting.`    },
    {
      note: `Programmer error ― the program contains incorrect syntax or faulty logic; it could even be as simple as a typo.
      `,
    },
  
    {
      note: `User error ― the user has entered data incorrectly, which the program is unable to handle.`,
    },
    {
      note: `Strict mode simply requires the following string to be added to the first line of a JavaScript file: 'use strict'; ES6 introduced JavaScript modules (covered later in chapter 15). These are self-contained pieces of code that are in strict mode by default, so the 'use strict' declaration is not required.`,
    },
    {
        note: `An error object can be created by the host environment when an exception occurs, or it can be created in the code using a constructor function, like so: const error = new Error(); This constructor function takes a parameter that’s used as the error message: const error = new Error('Oops, something went wrong');`,
      },
      {
        note: `It’s also possible to throw your own exceptions using the throw statement. This will allow for any problems in your code to be highlighted and dealt with, rather than lurk quietly in the background.`,
      },{
        note: `Jestis a TDD framework, created by Facebook, that has gained a lot of popularity recently. It makes it easy to create and run tests by providing helper methods for common test assertions. npm install -g jest`,}
  ];
  
  notes.forEach(readNotes);
  
  function readNotes(note) {
    console.log(note.note);
  
    document.getElementById('notes').innerHTML +=
      '<li id="note" class="note"><p>' + note.note + '</p></li>';
  }
  