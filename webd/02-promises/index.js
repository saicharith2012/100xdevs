// Primitive types -- number, string, boolean
// Complex types -- Arrays, Objects

// CLASSES -- blueprint for creating objects (not the general objects.)'

// Class Declaration -- using class keyword
// and defining properties (variables) and methods (functions) that will
// belong to the objects created from this class

class Rectangle {
  // constructor -- A special methods inside a class that is called
  // when an instance of the class needs to be created.
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // methods - function that are defined inside the class and can be used by all its instances.
  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color: ${this.color}`);
  }

  destroy() {
    // custom method that needs to be written by the developer to destroy an instance.
  }
}

const rect = new Rectangle(20, 40, "Red");
const area = rect.area(); // calling the class methods on the created instance.
rect.paint();
console.log(area);

// rect.destroy();

// Without using the classes, the implementation would've been

// const rect2 = {
//   width: 20,
//   height: 40,
//   color: "Red",
// };

// function area(rect) {
//   return rect.width * rect.height;
// }

// console.log("Without using classes: " + area(rect2));

// FEW INBUILT CLASSES IN JS
// *Date
const now = new Date(); // current date and time
console.log(now.toISOString());

// *Maps
const map = new Map();
map.set("name", "Alice"); // setter functions
map.set("age", "30");
console.log(map.get("name")); // getter functions
console.log(map.get("age"));

// a variable with a string value can also like a class
var str = "charith";
str.toLocaleLowerCase();

// *********PROMISES*********************
// Promise is also a built-in class in javascript
// The Promise class gives u a promise, that it will return something in the future. (related to callbacks in the asynchronous functions)

// CALLBACK BASED APPROACH
function logName() {
  console.log("charith");
}

setTimeout(logName, 3000); // calls back the logName() function after the delay

// PROMISE BASED APPROACH
// -- defining a promise is hard, using a promise is easier.

// *********A promise in Javascript is an object that represents
// the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promises handle async functions more effectively than traditional callback approach.

// Defining the promise

// eg. setTimeout promisified.
function setTimeoutPromisified(ms) {
  return new Promise(
    (resolve) => setTimeout(resolve, ms) // eventual completion is defined here..i.e. when it completes
  ); // returning an instance (object) of the promise class i.e. returns a promise
}

// (resolve => setTimeout(resolve,ms)) acts as a wrapper around the setTimeout function
// that takes a function as an input in the form of "resolve" and calls back the function after the delay caused by setTimeout
// i.e. whenever the resolve argument of this wrapper function is called after the successful completion, the function callback inside the .then() is called

function callback() {
  console.log("3 seconds have passed.");
}

// let p = setTimeoutPromisified(10000) // returns a promise
// console.log(p)

setTimeoutPromisified(10000).then(callback);

// e.g., promise without any delay
function promiseWithoutAnyDelay() {
  return new Promise((resolve) => resolve());
}

function randomcallback() {
  console.log("promise succeeded!");
}

promiseWithoutAnyDelay().then(randomcallback);


// multiple call back handlers (.then()'s) can be put to a single asynchronous function
// p.then(c1)
// p.then(c2)