// FIND SUM OF TWO NUMBERS
function sum(a, b) {
  return a + b;
}

let ans = sum(59, 23);
console.log(ans);

let ans2 = sum("34", 34); // concatenates as strings
console.log(ans2);

// parsing the string inputs to integers
function sum2(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans3 = sum2("34", 34);
console.log(ans3);

// FIND SUM OF 1 TO N NUMBERS
function sumToN(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }

  return ans;
}

console.log(sumToN(10));

// All the code written until now is Synchronous code

// OBJECTS
var user = {
  age: 21,
  name: "charith",
  calculateAge: () => {
    return 21;
  },
};

console.log(user.calculateAge());

const { time } = require("console");
// I/O HEAVY OPERATIONS

// *Reading a file
const fs = require("fs");

// readFileSync - synchronous function -- proceeds to next line only after the file is read.
let fileContent = fs.readFileSync("a.txt", "utf-8"); // arguments: path, encoding
console.log("a.txt: " + fileContent);

// readFile - asynchronous function -- proceeds to next line just after starting to read the file.
// can't store the data inside a variable since its asynchronous
// could use async/await and fs.promises to store the data in a variable
// readFile() has a functional argument (callback in this case!) to handle the data or errors once the file is read.
fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("b.txt: " + data);
});

// The function signature of the callback function depends on how it is defined in the parent function

// *Setting a clock -- SetTimeout()

console.log("Hi");

function timeout() {
  console.log("Click the Button!");
}

// setTimeout is available globally - no need to import.
// schedules the execution of a function after a delay
setTimeout(timeout, 1000); // callback function after the delay, delay in ms

let c = 0;
for (let i = 0; i < 100000000; i++) {
  c += i;
}

console.log("Expensive operation done");
