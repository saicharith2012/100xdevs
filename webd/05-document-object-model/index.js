// DOM MANIPULATION

// DOM is a programming interface for web documents. It abstracts the structure of a web page as a tree of objects.
// This allows the scripts to manipulate the content and structure dynamically.
// This enables more complex interactions and functionalities beyond just static HTML.

// static HTML --> represents HTML that does not change.
// dynamic HTML --> represents HTML that changes dynamically while interacting with the users.

// interaction happens in 4 ways ---> Create, Read, Update, Delete

// 1. FETCHING ELEMENTS

// console.log(document);
// --> this document object references to the whole page.

function addTodo() {
  const inputEl = document.querySelector("input"); // querySelector() returns the first instance of the selector passed.
  const value = inputEl.value; // .value only in case of input tags, .innerHTML in other tags
  console.log(value);
}

const todos = document.querySelectorAll("h4"); // querySelectorAll() returns all the instances of the selector passed.
console.log(todos);
// console.log(todos[0])
// console.log(todos[1])

// getElementById
// getElementByClassName
// getElementByClassName

const todo = document.querySelector(".todo"); // querySelector can also return the selector based on its class name.
console.log(todo);

const todos2 = document.querySelectorAll(".todo");
console.log(todos2);

// 2. UPDATING ELEMENTS --> using .innerHTML
// problem -- increment the index of third todo every second.
const todo3 = document.querySelectorAll(".todo")[2];
let num = 3;
todo3.innerHTML = num + ". Go for a walk.";

setInterval(() => {
  todo3.innerHTML = num + ". Go for a walk.";
  num += 1;
}, 1000);

// 3. DELETING ELEMENTS --> removeChild() function, select the parent and remove the child.
function deleteTodo(index) {
  const element = document.querySelector("#todo-" + index);
  console.log(element.parentNode);
  element.parentNode.removeChild(element);
}

// 4. ADDING ELEMENTS ---> createElement(), appendChild()
// createElement() --> doesn't insert the created element inside the DOM
// Hence, we select a parent and insert this new element as a child to it using appendChild()
const divEl = document.createElement("div");
divEl.innerHTML = "hello, world!";
const parentElement = document.querySelector(".todolist");
parentElement.appendChild(divEl);
