let num = 1;

// creating input sectioin
const inputSection = document.createElement("div");
inputSection.className = "input-section";
document.querySelector("body").appendChild(inputSection);

const inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "Add Todo";
inputSection.appendChild(inputField);

const button = document.createElement("button");
button.setAttribute("onclick", "addTodo()");
button.innerHTML = "Enter";
inputSection.appendChild(button);

const todolist = document.createElement("ul");
todolist.className = "todolist";
document.querySelector("body").appendChild(todolist);


// add todo function
function addTodo() {
  const input = document.querySelector("input");
  const inputValue = input.value;

  if (inputValue === '') {
    alert('Please enter a todo item!');
    return // exits the addTodo() function here if the todo is empty
  }
  
  // new todo
  const newTodoEl = document.createElement("li");
  newTodoEl.className = "todo";
  newTodoEl.setAttribute("id", num);
  num++;

  // todo title
  const newTodoTitle = document.createElement("p");
  newTodoTitle.innerHTML = inputValue;
  input.value = ""


  // delete button for the new todo
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.setAttribute("onclick", `deleteTodo(${newTodoEl.id})`);


  // appending the title and button to the new todo
  newTodoEl.appendChild(newTodoTitle);
  newTodoEl.appendChild(deleteButton);

  // appending new todo to the parent element todolist
  const parentEl = document.querySelector(".todolist");
  parentEl.appendChild(newTodoEl);
}

// delete todo
function deleteTodo(index) {
  const elementToBeDeleted = document.getElementById(index);
  elementToBeDeleted.parentNode.removeChild(elementToBeDeleted);
  console.log("delete called");
}
