const notes = [
    {
        note: `Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation.`
    },
    {
        note: `Built-in form validation uses HTML5 form validation features, which we've discussed in many places throughout this module. This validation generally doesn't require much JavaScript. Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.`
    },
    {
        note: `JavaScript validation is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library).`
    },
    {
        note: `required: Specifies whether a form field needs to be filled in before the form can be submitted.
        
       
        pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.`
    },
    {
        note: `a — Matches one character that is a (not b, not aa, and so on).
        abc — Matches a, followed by b, followed by c.
        ab?c—Matches a, optionally followed by a single b, followed by c. ( ac or abc)
        ab*c—Matches a, optionally followed by any number of bs, followed by c. ( ac , abc, abbbbbc, and so on).
        a|b — Matches one character that is a or b.
        abc|xyz — Matches exactly abc or exactly xyz (but not abcxyz or a or y, and so on). 
        required pattern="[Bb]anana|[Cc]herry"`
    },
    {
        note: `minlength and maxlength: Specifies the minimum and maximum length of textual data (strings). Example: input type="text" id="choose" name="i_like" required minlength="6" maxlength="6"`
    },
    {
        note: `min and max: Specifies the minimum and maximum values of numerical input types. Example input type="number" id="number" name="amount" value="1" min="1" max="10"`
    },
    {
        note: ` type: Specifies whether the data needs to be a number, an email address, or some other specific preset type. Example: input type="radio" required name="driver" id="r1" value="yes" or input type="number" min="12" max="120" step="1" id="n1" name="age"
        pattern="\d+"`
    },
    {
        note: `Validating forms using JavaScript`
    },
    {
        note: `validity: Returns a ValidityState object that contains several properties describing the validity state of the element. input type="email" id="mail" name="mail" const email = document.getElementById("mail");

        email.addEventListener("input", function (event) {
          if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an e-mail address!");
          } else {
            email.setCustomValidity("");
          }
        });`
    },
    {
        note: `Using Fetch`
    },
    {
        note: `The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.`
    },
    {
        note: `Example: fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));`
    },
    {
        note: `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a>`
    },
];
  
  notes.forEach(readNotes);
  
  function readNotes(note) {
    console.log(note.note);
  
    document.getElementById('notes').innerHTML +=
      '<li id="note" class="note"><p>' + note.note + '</p></li>';
  }
  