const notes = [
    {
        note: `All functions have a length property that returns the number of parameters the function has.`
    },
    {
        note: `the sayHello() function refers to an unspecific object called this that has a property called name : function sayHello(){
            return 'Hello, my name is $ { this.name }';
        } const bruce = { name: 'Bruce' }; sayHello.call(bruce);
        << 'Hello, my name is Bruce' oe
        function sayHello(greeting='Hello'){
            return '$ { greeting }, my name is $ { this.name }';
        }sayHello.call(clark, 'How do you do');
        << 'How do you do, my name is Clark'`
    },
    {
        note: `Temporary Variables: (()=>{
            const temp = a;
            a = b;
            b = temp;
        })(); or do this to switch values let [a,b] = [1,2];
        [a,b] = [b,a];`
    },
    {
        note: `The executor initializes the promise and starts the asynchronous operation. It also accepts two functions as arguments: the resolve() function is called if the operation is successful, and the reject() function is called if the operation fails. const promise = new Promise( (resolve, reject) => {
            // initialization code goes here
            if (success) {
                resolve(value);
            } else {
                reject(error);
            }
        });`
    },{
        note: `If each function that performs an asynchronous operation returns a promise, we can chain the then() methods together to form a sequential piece of code that’s easy to read. Each promise will only begin once the previous promise has been settled.`
    },{
        note: `async keyword and allow you to write asynchronous code as if it was synchronous. This is achieved by using the await operator before an asynchronous function. This will wrap the return value of the function in a promise that can then be assigned to a variable. async function loadGame(userName) {
            try {
                const user = await login(userName);
                const info = await getPlayerInfo (user.id);
                // load the game using the returned info
            }
            catch (error){
                throw error;
            }
        }`
    },{
        note: `functions can accept another function as an argument (a callback), but they can also return a function.`
    },
    {
        note: `Asynchronous
        When a request for data is sent, the program doesn’t have to stop and wait for the response. It can carry on running, waiting for an event to fire when a response is received. By using callbacks to manage this, programs are able to run in an efficient way, avoiding lag as data is transferred back and forth.
        JavaScript
        JavaScript was always considered a 'front-end' language, not used to communicate with the server. Ajax enabled JavaScript to send requests and receive responses from a server, allowing content to be updated in real time.
        XML
        When the term Ajax was originally coined, XML documents were often used to return data. Many different types of data can be sent, but by far the most commonly used in Ajax nowadays is JSON, which is more lightweight and easier to parse than XML. (Although it has never really taken off, the termAjaj is sometimes used to describe the technique.)JSON also has the advantage of being natively supported in JavaScript, so you can deal with JavaScript objects rather than having to parse XML files using DOM methods.`
    },
    {
        note: `Fetch API provides a global fetch() method that only has one mandatory argument, which is the URL of the resource you wish to fetch. fetch('https://example.com/data')
        .then( // code that handles the response )
        .catch( // code that runs if the server returns an error )`
    },
    {
        note: `The redirect() method can be used to redirect to another URL. It creates a new promise that resolves to the response from the redirected URL. fetch(url)
        .then( response => response.redirect(newURL)); // redirects to another URL
        .then( // do something else )
        .catch( error => console.log('There was an error: ', error))`
    },
    {
        note: `The text() method takes a stream of text from the response, reads it to completion and then returns a promise that resolves to a USVSting object that can be treated as a string in JavaScript. fetch(url)
        .then( response => response.text() ); // transforms the text stream into a JavaScript string
        .then( text => console.log(text) )
        .catch( error => console.log('There was an error: ', error))`
    },
    {
        note: `The blob() method is used to read a file of raw data, such as an image or a spreadsheet. Once it has read the whole file, it returns a promise that resolves with a blob object. fetch(url)
        .then( response => response.blob() ); // transforms the data into a blob object
        .then( blob => console.log(blob.type) )
        .catch( error => console.log('There was an error: ', error))`
    },
    {
        note: `The json() method is used to deal with these by transforming a stream of JSON data into a promise that resolves to a JavaScript object. fetch(url)
        .then( response => response.json() ); // transforms the JSON data into a JavaScript object
        .then( data => console.log(Object.entries(data)) )
        .catch( error => console.log('There was an error: ', error))`
    },
    {
        note: `Although most of the time you will be dealing with a response object that is returned from a request you make, you can also create your own response objects using a constructor function: const response = new Response( 'Hello!', {
            ok: true,
            status: 200,
            statusText: 'OK',
            type: 'cors',
            url: '/api'
        });`
    },
    
];
  
  notes.forEach(readNotes);
  
  function readNotes(note) {
    console.log(note.note);
  
    document.getElementById('notes').innerHTML +=
      '<li id="note" class="note"><p>' + note.note + '</p></li>';
  }
  