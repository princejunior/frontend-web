const notes = [
  {
    note:
      'JavaScript uses a prototypal inheritance model. This means that every class has a prototype property that is shared by every instance of the class. So any properties or methods of a class’s prototype can be accessed by every object instantiated by that class.',
  },
  {
    note: `When creating a class, you would normally add any default properties and methods to the class declaration. But what if you want to augment the class with extra methods and properties after it has been created? It turns out that you can still do this using theprototypeproperty of the class. This is particularly useful if you don't have access to the class declaration, but still want to add properties and methods to the class.`,
  },
  {
    note: `The prototype object is live, so if a new property or method is added to the prototype, any instances of its class will inherit the new properties and methods automatically, even if that instance has already been created. For example, the raph object has a weapon property and attack() method that are inherited from Turtle.prototype . But the leo object that was createdbeforewe added these to the prototype will also have access to them:`,
  },

  {
    note: `Properties of objects in JavaScript are said to beenumerableornon-enumerable. If they aren't enumerable, this means they will not show up when a for-in loop is used to loop through an object’s properties and methods.

    There is a method called propertyIsEnumerable() that every object has (because it’s a method of Object.prototype ) that can be used to check if a property is enumerable. We can see in the following example that the eat() method we created earlier is enumerable (in fact, all properties and methods that are created by assignment are enumerable):`,
  },
  {
    note: `The concept of polymorphism means that different objects can have the same method, but implement it in different ways. The Object.prototype object has a toString() method that is shared by all objects. This means every object created in JavaScript will have a toString() method. Polymorphism means that objects are able to override this method with a more specific implementation. So although every object has a toString() method, the way it’s implemented can vary between different objects.`,
  },
  {
    note: `It is possible to add more methods to the prototype of JavaScript’s built-in objects — such as Number , String , and Array — to add more functionality. This practice is known asmonkey-patching, but it’s mostly frowned upon in the JavaScript community, despite it being an incredibly powerful technique `,
  },
  {
    note: `An object property descriptor can have get() and set() methods instead of a value attribute. All objects must have one or the other, they can't have both. The get() and set() methods can be used to control how a property is set using assignment and the value that is returned when a property is queried.`,
  },
  {
    note: `The addEventListener() method has a third parameter, which is a boolean value that specifies whether capturing should be used or not. It defaults to false , which is why bubbling happens by default. There may be instances when you would rather capture the events instead; for example, you might want events on outer elements to fire before any events fire on the element that was actually clicked on.`,
  },
  {
    note: `A good example of how libraries can help save time is in DOM manipulation. The DOM API provides all the tools required to manipulate the DOM, but some can be verbose and take several lines of code to attain even the most basic of tasks.`,
  },
];

notes.forEach(readNotes);

function readNotes(note) {
  console.log(note.note);

  document.getElementById('notes').innerHTML +=
    '<li id="note" class="note"><p>' + note.note + '</p></li>';
}
