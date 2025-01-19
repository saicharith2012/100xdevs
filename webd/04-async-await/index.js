// PROMISIFIED SETTIMEOUT
// function setTimeoutPromisified(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// function callback() {
//   console.log("The 10s delay is over!!!");
// }

// let p = setTimeoutPromisified(10000).then(callback);
// console.log(p); // prints the promise returned by the function even before it is resolved.

// Problem Statement
// Write code that
// 1. logs hi after 1 sec
// 2. logs hello 3 secs after step 1
// 3. logs hello there 5 secs after step 2

// Using callback approach

// setTimeout(() => {
//   console.log("hi");
//   setTimeout(() => {
//     console.log("hello");
//     setTimeout(() => console.log("hello there"), 5000);
//   }, 3000);
// }, 1000); // CALLBACK HELL --> one asynchronous call being made after another asynchronous call ( after another and after another so on).

// |
// |
// |-------> Ugly syntax. (since anonymous operations are being used.)
// To make it look better, callback functions could be defined outside the async function

// function step3done() {
//   console.log("hello there");
// }

// function step2done() {
//   console.log("hello");
//   setTimeout(step3done, 5000);
// }
// function step1done() {
//   console.log("hi");
//   setTimeout(step2done, 3000);
// }

// setTimeout(step1done, 1000); ----> Doesn't really have callback hell since it solves the indentation

// Now using the promisified version
function setTimeoutPromisified(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// let delay1 = 1000;
// let delay2 = 3000;
// let delay3 = 5000;

// setTimeoutPromisified(delay1).then(() => {
//   console.log("hi");
//   setTimeoutPromisified(delay2).then(() => {
//     console.log("hello");
//     setTimeoutPromisified(delay3).then(() => {
//       console.log("hello there");
//     });
//   });
// }); // ---> this also has callback hell in the form of then's (with unnecessary indentation)

// With a restriction of using only anonymous functions as callbacks, callback hell is inevitable.

// To prevent the callback hell in this case of using promisified functions, we use PROMISE CHAINING.
// setTimeoutPromisified(1000)
//   .then(() => {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(() => {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(() => {
//     console.log("hello there");
//   });

// ASYNC/AWAIT syntax --> provides a way to write asynchrnous code that looks and behaves like synchronous code, making it easier to read an maintain.
// builds on top of Promises and allows to avoid chaining .then() and .catch() methods while still working with asynchronous operations

// async/await ==> syntactic sugar on top of promises.
// async function solution() {
//   // returns a promise --- promise chaining under the hood. --> hence the thread isn't stuck here and moves on to the next statement outside the async function.
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hello there");
// }

// solution();
// console.log("after the solution");

// e.g. Async/await for promisified fs.readFile() and handling errors - reject() and catch().
const fs = require("fs");
function fsReadFilePromisified(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        reject(err); // ---> throws an error..without this there would be no sign of an error.
      } else {
        resolve(data);
      }
    });
  });
}

async function readFileAsync() {
  const data = await fsReadFilePromisified("a.txt"); // similar to passing the data in .then() and executing operations on it. 
  console.log(data);
}

readFileAsync();

// resolve (value) --> it is called when the async operation completes succesfully.
// It changes the state of the promise from pending to 'fulfilled'. and passes
// the value to the 'then' handlers

// reject (reason) --> This function is called when the async operation fails.
// It changes the state of the promise to "rejected" and passes the reason to
// the 'catch' handlers.

// using then() and catch()
// fsReadFilePromisified("a.txt")
//   .then((data) => console.log("file data: " + data))
//   .catch((err) => console.error(err));
