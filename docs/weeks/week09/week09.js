const notes = [
    {
        note: `If you don’t know the name of the global object, you can also refer to it using the keyword this in the global scope. The following code provides a quick way of assigning the variable global to the global object:
        // from within the global scope
        const global = this;`
    },
    {
        note: `Global variables are actual properties of a global object. In a browser environment, the global object is the window object. This means that any global variable created is actually a property of the window object, as can be seen in the example below: x = 6;  // global variable created
        << 6
        window.x // same variable can be accessed as a property of the window object
        << 6
        // both variables are exactly the same
        window.x === x;
        << true`
    },
    {
        note: `The window.location property is an object that contains information about the URL of the current page. It contains a number of properties that provide information about different fragments of the URL. The href property returns the full URL as a string: window.location.href. The protocol property returns a string describing the protocol used (such as http , https , pop2 , ftp etc.). Note that there is a colon ( : ) at the end: The host property returns a string describing the domain of the current URLandthe port number (this is often omitted if the default port 80 is used): The hostname property returns a string describing the domain of the current URL: The port property returns a string describing the port number, although it will return an empty string if the port is not explicitly stated in the URL: The pathname property returns a string of the path that follows the domain: The search property returns a string that starts with a “?” followed by the query string parameters. It returns an empty string if there are no query string parameters. This is what I get when I search for “JavaScript” on SitePoint:`
    },
    {
        note: `The window.location object also has the following methods: The reload() method can be used to force a reload of the current page. If it’s given a parameter of true , it will force the browser to reload the page from the server, instead of using a cached page. The assign() method can be used to load another resource from a URL provided as a parameter, for example: The replace() method is almost the same as the assign() method, except the current page will not be stored in the session history, so the user will be unable to navigate back to it using the back button. The toString() method returns a string containing the whole URL:`
    },
    {
        note: `The window.history property can be used to access information about any previously visited pages in the current browser session. Avoid confusing this with the new HTML5 History API. (See http://www.sitepoint.com/javascript-history-pushstate/ post for details.)

        The window.history.length property shows how many pages have been visited before arriving at the current page.
        
        The window.history.go() method can be used to go to a specific page, where 0 is the current page: There are also the window.history.forward() and window.history.back() methods that can be used to navigate forwards and backwards by one page respectively, just like using the browser’s forward and back buttons.`
    },
    {
        note: `A new window can be opened using the window.open() method. This takes the URL of the page to be opened as its first parameter, the window title as its second parameter, and a list of attributes as the third parameter. This can also be assigned to a variable, so the window can then be referenced later in the code:

        const popup = window.open('https://sitepoint.com','
        SitePoint','width=400,height=400,resizable=yes'); The close() method can be used to close a window, assuming you have a reference to it:

        popup.close();`
    },
    {
        note: `The window.screen object contains information about the screen the browser is displayed on. You can find out the height and width of the screen in pixels using the height and width properties respectively:

        window.screen.height
        << 1024
        window.screen.width
        << 1280
        The availHeight and availWidth can be used to find the height and width of the screen, excluding any operating system menus:
        
        window.screen.availWidth
        << 1280
        window.screen.availHeight
        << 995
        The colorDepth property can be used to find the color bit depth of the user’s monitor, although there are few use cases for doing this other than collecting user statistics:
        
        window.screen.colorDepth;
        << 24`
    },
    {
        note: `The document.cookie property acts like a special type of string. Assigning another cookie to it won’t overwrite the entire property, it will just append it to the end of the string. So we can add more cookies by assigning them to document.cookie :

        document.cookie = 'hero=true';
        << "hero=true" 
        A cookie’s value can be changed by reassigning it to document.cookie using the same name but a different value. The following code will update the value of two of the cookies that we set in the previous section:
        document.cookie = 'name=Batman'
        << "name=Batman"
        To see the current contents of the cookie jar, simply enter document.cookie :`
    },
    {
        note: `We can use the split method to break the string into an array containing each name/value pair, then use a for of loop to iterate through the array:

        const cookies = document.cookie.split("; ");
        for (crumb of cookies){
            const [key,value] = crumb.split("=");
            console.log("The value of $\{key} is $\{value}");
        }
        << The value of name is Batman
        The value of hero is true
        The value of city is Gotham`
    },
    {
        note: `Adding the string ; secure to the end of a cookie will ensure it’s only transmitted over a secure HTTPS network:
        document.cookie = 'name=Batman; secure';
        To remove a cookie, you need to set it to expire at a time in the past:
        document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';`
    },
    {
        note: `The HTML5 specification contains a number of APIs that help to gain access to hardware, such as cameras, batteries, geolocation, and the graphics card. Hardware evolves quickly, and APIs are frequently introduced to give developers access, and control new features that appear in the latest devices.`
    },
    {
        note: `The Web Storage API has some crucial differences with cookies:

        Information stored isnotshared with the server on every request.
        
        Information is available in multiple windows of the browser (but only if the domain is the same).
        
        Storage capacity limit is much larger than the 4KB limit for cookies ( There is no actual limit in the specification, but most browsers have a limit set at 5GB per domain.).
        
        Any data stored does not automatically expire as it does with cookies. This potentially makes cookies a better choice for something like showing a popup once a day.`
    },
    {
        note: `The audio or video element can be referenced by a variable using one of the DOM methods we saw in Chapter 6:

        const video = document.getElementsByTagName('video')[0];
        Audio and video elements have a number of properties and methods to control the playback of the clip.
        
        The play() method will start the clip playing from its current position:
        
        video.play();
        The pause() method will pause the clip at its current position:
        
        video.pause();
        The volume property is a number that can be used to set the audio volume:
        
        video.volume = 0.9;
        The muted property is a boolean value that can be used to mute the audio:
        
        video.muted = true;
        The currentTime property is a number value that can be used to jump to another part of the clip:
        
        video.currentTime += 10; // jumps forward 10 seconds
        The playbackRate property is used to fast-forward or rewind the clip by changing its value. A value of 1 is playback at normal speed:
        
        video.playbackRate = 8; // fast-forward at 8 times as fast
        The loop property is a boolean value that can be set to true to make the clip repeat in a loop:
        
        video.loop = true;
        The duration property can be used to see how long the clip lasts:
        
        video.duration;
        << 52.209`
    },
    {
        note: ``
    },
    {
        note: ``
    },
    {
        note: ``
    },
    
];
  
  notes.forEach(readNotes);
  
  function readNotes(note) {
    console.log(note.note);
  
    document.getElementById('notes').innerHTML +=
      '<li id="note" class="note"><p>' + note.note + '</p></li>';
  }
  