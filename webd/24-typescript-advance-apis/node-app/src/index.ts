interface User {
  name: string;
  age: number;
}

function sumOfAge(u1: User, u2: User): number {
  return u1.age + u2.age;
}

const result = sumOfAge(
  { name: "romeo", age: 16 },
  { name: "juliet", age: 13 }
);

console.log(result);

// TYPESCRIPT ADVANCE APIs

type UserData = {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
};

// PICK -- selects set of properties from an existing Type or Interface
type UpdateProps = Pick<UserData, "name" | "age" | "email">;

// PARTIAL -- makes all properties of a type into optional, thus creating a new type.
type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // hit the database to update the user.
}

updateUser({});

// ******************************************
// updating a const object
const user = {
  name: "k",
  age: "42",
};

user.name = "rk"; // updates the name property irrespective of the object being a constant.

console.log(user);

// updating a const array
const arr = [0, 1, 2];
arr[2] = 3; // updates here too
console.log(arr);

const str = "ulisfd";
// str = "dsfd" --> doesn't allow updating in case of strings

// The reason is even the variable is constant, its internal values can be changed.
// To make even the properties of an object immutable, we can use readonly

// READONLY
type newUsers = {
  readonly name: string;
  age: number;
};

const nuser: newUsers = {
  name: "John",
  age: 21,
};

// nuser.name = 'k' --> error saying "Cannot assign to 'name' because it is a read-only property."
nuser.age = 22;

// whole object could be made readonly
const nuser2: Readonly<newUsers> = {
  name: "ken",
  age: 34,
};

// RECORD

// type UserObject = {
//   [key: string]: {
//     id: string;
//     username: string;
//   };
// };
// --> uglier way

// Hence to declare the key type in the object, we use Record.
type UserObject = Record<
  string,
  {
    username: string;
    age: number;
  }
>;

const users: UserObject = {
  "radaf12@": {
    username: "charith",
    age: 21,
  },
  "df@213df": {
    username: "rama",
    age: 32,
  },
};

console.log(users);

// MAP ---> syntactic sugar to write objects in a cleaner way
// Not a typescript concept...exists in js too.
type UserType = {
  username: string;
  age: number;
};

const users2 = new Map<string, UserType>();
users2.set("radaf12@", { username: "charith", age: 21 });
users2.set("df@213df", { username: "rama", age: 32 });
console.log(users2.get("df@213df"));
users2.delete("radaf12@");
console.log(users2);

// Exclude
type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click");

