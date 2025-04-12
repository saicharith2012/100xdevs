let x: number = 1;
console.log(x);

// x = "d" --> returns an error while compiling.

// 1. Write a function that greets a user given their first name as an argument.
function greeting(firstName: string) {
  console.log(`Hello ${firstName}!`);
}

greeting("charith");

// 2. Write a function that calculates the sum of two functions and return the sum.
function calculateSum(a: number, b: number): number {
  return a + b;
}

console.log(calculateSum(2, 3));

// 3. Return true or false based on if a user is 18+
function isUserAdult(age: number): Boolean {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

// 4. Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hi after 1s");
});

// any --> if there is no explicit type mentioned, it can be explicitly taken as "any"
// But typescript compiler doesn't accept variables that are implicitly taken as "any"
// hence if there is no type MAKE IT "any" EXPLICITLY
let k: any = 1;
k = 3;
k = "hello";
k = true;

const greet = (name: string) => {
  console.log(`Hi ${name}...`);
};

greet("4it");

// object as an arugment
function greet1(user: { firstname: string; age: number }) {
  console.log(`hello ${user.firstname} .  YOu aRe ${user.age}`);
}

// type inferred implicitly
// let user = {
//   firstname: "charith",
//   age: 21,
// }

let user: {
  firstname: string;
  age: number;
} = {
  firstname: "charith",
  age: 22,
};

greet1(user);
// code has become verbose due to multiple declaration of the object type.
// We can use interfaces to declare types to objects in the form of typescript constructs.

// USING INTERFACES
interface User {
  firstname: string;
  age: number;
}

function greet2(user: User) {
  console.log(`hello ${user.firstname} .  YOu aRe ${user.age}`);
}

let user2: User = {
  firstname: "charith",
  age: 23,
};

greet2(user2);

// TYPES
type UserType = {
  firstname: string;
  age: number;
};

// union types -- cannot be done in interfaces
type StringOrNumber = string | number;

function sum(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error(
      "Both arguments must be of the same type (either string or number)."
    );
  }
}

// intersection types --> having fields of both types/interfaces
interface Employee {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software Developer",
};
