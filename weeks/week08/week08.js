const notes = [
    {
        note: `The CSS3 transform property lets you lets you translate, rotate, scale, and/or skew any element on the page. 2D and 3D`
    },
    {
        note: `Translation functions allow you to move elements left, right, up, or down. transform: translate(x, y); or transform: translateX(45px); or transform: translateY(-30px);`
    },
    {
        note: `The scale(x,y) function scales an element by the defined factors horizontally then vertically. scale(1) would leave the element the same size, scale(2) would double its proportions, scale(0.5) would halve them. example transform: scale(1.5, 0.25);`
    },
    {
        note: `The rotate() function rotates an element around the point of origin by a specified angle value.`
    },
    {
        note: `The skew(x,y) function specifies a skew along the x and y axes. transform: skew(15deg, 4deg);`
    },
    {
        note: `To support older WebKit browsers, you need to include the -webkit- prefix for all of your transition properties. You may also need to specify the -webkit- prefixed forms of properties. For example, you’re unable to animate transform in a browser that only understands -webkit-transform :`
    },
    {
        note: `The transition-timing-function lets you control the pace of the transition in even more granular detail. Do you want your animation to start off slow and become faster, start off fast and end slower, advance at an even keel, or some other variation? key terms ease , linear , ease-in , ease-out , or ease-in-out. `
    },
    {
        note: `Finally, by using the transition-delay property, it’s possible to introduce a delay before the transition begins. example: -webkit-transition-delay: 50ms;
        transition-delay: 50ms;`
    },
    {
        note: `To animate an element in CSS, you first create a named animation, then attach it to an element in that element’s property declaration block. Animations in themselves don’t do anything; in order to animate an element, you’ll need to associate the animation with that element.
        To create an animation, use the @keyframes rule for IE10+ and FF16+. Include @-webkit-keyframes for all WebKit implementations followed by a name of your choosing, which will serve as the identifier for the animation. Then, you can specify your keyframes. example: @-webkit-keyframes myAnimation { 
            /* put animation keyframes here */}@keyframes myAnimation { /* put animation keyframes here */}`
    },
    {
        note: `The first step to using canvas is to add a canvas element to the page: 'The first step to using canvas is to add a canvas element to the page:

        canvas>
            Sorry! Your browser doesn’t support Canvas.
        /canvas>'`
    },
];
  
  notes.forEach(readNotes);
  
  function readNotes(note) {
    console.log(note.note);
  
    document.getElementById('notes').innerHTML +=
      '<li id="note" class="note"><p>' + note.note + '</p></li>';
  }
  var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);