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
