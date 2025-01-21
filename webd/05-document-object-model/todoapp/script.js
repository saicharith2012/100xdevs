let num = 1;

const inputSection = document.createElement("div")
inputSection.className = "input-section"
document.querySelector("body").appendChild(inputSection)

const inputField = document.createElement("input")
inputField.type = "text"
inputField.placeholder = "Add Todo"
inputSection.appendChild(inputField)

const button = document.createElement("button")
button.setAttribute("onclick", "addTodo()")
button.innerHTML = "Enter"
inputSection.appendChild(button)

const todolist = document.createElement("ul")
todolist.className = "todolist"
document.querySelector("body").appendChild(todolist)

function addTodo() {
  const inputValue = document.querySelector("input").value;
  const newTodoEl = document.createElement("li");
  newTodoEl.className = "todo";
  newTodoEl.setAttribute("id", num);
  num++;
  
  const newTodoTitle = document.createElement("p");
  newTodoTitle.innerHTML = inputValue;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.setAttribute("onclick", `deleteTodo(${newTodoEl.id})`)
  
newTodoEl.appendChild(newTodoTitle);
  newTodoEl.appendChild(deleteButton);
  const parentEl = document.querySelector(".todolist");
  parentEl.appendChild(newTodoEl);
}

function deleteTodo(index) {
  const elementToBeDeleted = document.getElementById(index);
  elementToBeDeleted.parentNode.removeChild(elementToBeDeleted);
console.log("delete called")
}
