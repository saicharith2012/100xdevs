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

interface Address {
  city?: string;
  country?: string;
  pincode: number;
}

interface User2 {
  name: string;
  age: number;
  // address?: {
  //   city?: string;
  //   country?: string;
  //   pincode: number;
  // }; Don't Repeat Yourself(DRY)
  address?: Address;
}

interface Office {
  address: Address;
}

let user3: User2 = {
  name: "charith",
  age: 22,
  address: {
    city: "San Francisco",
    country: "US",
    pincode: 95016,
  },
};

let user4: User2 = {
  name: "caspir",
  age: 7,
};

let user5: User2 = {
  name: "cspr",
  age: 1,
  address: {
    pincode: 95017,
  },
};

function isLegal(person: User2): boolean {
  return person.age >= 18;
}

console.log(`${user3.name} ${isLegal(user3) ? "is legal" : "is illegal"}`);
console.log(`${user4.name} ${isLegal(user4) ? "is legal" : "is illegal"}`);
console.log(`${user5.name} ${isLegal(user5) ? "is legal" : "is illegal"}`);

// implementing interfaces
interface People {
  name: string;
  age: number;
  greet: () => string;
  greet2?(): string;
}

const person1: People = {
  name: "charith",
  age: 22,
  greet: () => {
    return `Hi ${person1.name}`;
  },
  // greet2(): string {
  //   return `Bye ${this.name}`;
  // },
};

console.log(person1.greet());
// console.log(person1.greet2())

// Classes implemented using interfaces
class Person implements People {
  constructor(public name: string, public age: number, public phone?: number) {}

  greet = () => {
    return `Hi ${this.name}...Heard you're ${this.age}!!!`;
  };
}

const person3 = new Person("charith", 22);
console.log(person3.greet());

// Abstract Classes (same as interfaces)

abstract class Human {
  isMale: boolean;
  constructor(isMale: boolean) {
    this.isMale = isMale;
  }
  abstract greet: () => string;
}

class Occupation extends Human {
  constructor(public isMale: boolean) {
    super(isMale);
  }
  greet = () => {
    return `hi ${this.isMale ? "sir" : "mam"}`;
  };
}

const officer = new Occupation(false);
console.log(officer.greet());

// TYPES
type UserType = {
  firstname: string;
  age: number;
};

// union types -- cannot be done in interfaces
type StringOrNumber = string | number;

// Function to calculate the sum of two values, which can either be both numbers or both strings.
// If both arguments are numbers, it returns their sum.
// If both arguments are strings, it concatenates them.
// Throws an error if the arguments are of different types or unsupported types.

// function sum(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "number") {
//     return a + b.toString();
//   } else if (typeof a === "number" && typeof b === "string") {
//     return a.toString() + b;
//   } else {
//     throw new Error(
//       "Unsupported types. Arguments must be either string or number."
//     );
//   }
// } ---> wrong

// Typescript at present doesn't support operations b/w operands of union types.

// intersection types --> having fields of both types/interfaces
interface Employee {
  name: string;
  startDate: Date;
}

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software Developer",
};

// Recursive Types
type Dependency = {
  title: string;
  subDependencies: Dependency[];
};

// Assignment:
// Create two types called User and Admin
// Create a functioni that takes either a user or an admin as an input, and returns a string saying "Welcom, [name]".

interface Admin {
  name: string;
  permissions: string;
}

interface Client {
  name: string;
  age: number;
}

function Wish(user: Client | Admin) {
  console.log(user.name);
}

// Arrays
// prblm: Find the max value in a given array.
function getMax(nums: number[]) {
  let maxValue = -10000000000000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }

  return maxValue;
}

console.log(`max value is ${getMax([2, 1, 4, 5, 2, 5])}`);

// prblm: Given a list of students, filter out the users that are legal(>=18)
interface Student {
  firstName: string;
  lastName: string;
  age: number;
}

function getLegal(students: Student[]): Student[] {
  // let result: Student[] = [];
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].age >= 18) {
  //     result.push(students[i]);
  //   }
  // }

  // return result;

  return students.filter((student) => student.age >= 18);
}

console.log(
  getLegal([
    {
      firstName: "sai charith",
      lastName: "p",
      age: 22,
    },
    {
      firstName: "caspir",
      lastName: "parange",
      age: 10,
    },
  ])
);

// ENUMS

enum Direction {
  EAST = "east",
  WEST = "west",
  NORTH = "north",
  SOUTH = "south",
}

function doSomething(keyPressed: Direction) {
  console.log(`We're going towards ${keyPressed}`);
}

doSomething(Direction.EAST);

