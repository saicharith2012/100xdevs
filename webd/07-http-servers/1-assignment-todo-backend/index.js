// Backend for a todo app

// store the data in a file, foundation for databases.

// add todo
// 1. create a random id for the todo
// 2. extract the todo title from the request body

// delete todo
// 1. extract the todo id
// 2. remove the todo from here

// get all todos

// edit todo

const express = require("express");
const fs = require("fs/promises");
const { v4 } = require("uuid");

const app = express();
// When a request sends JSON data in its body, express.json() parses it and attaches it to req.body.
// Without this, req.body will be undefined.

app.use(express.json());

async function readData() {
  try {
    const data = await fs.readFile("todos.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    }
    console.log(err);
  }
}

async function writeData(data) {
  try {
    const content = JSON.stringify(data, null, 2);
    await fs.writeFile("todos.json", content);
  } catch (err) {
    console.log(err);
  }
}

// route handlers
// add todo
app.post("/", async (req, res) => {
  let todos = await readData();
  todos.push({
    id: v4(),
    title: req.body.title,
    finished: false,
  });

  await writeData(todos);

  res.send("todo added successfully!");
});

// get todos
app.get("/", async (req, res) => {
  let todos = await readData();
  res.send({
    todos: todos,
  });
});

// delete todo
app.delete("/", async (req, res) => {
  let todos = await readData();
  let modifiedTodos = todos.filter((todo) => todo.id !== req.body.id);
  writeData(modifiedTodos);

  res.send("todo successfully deleted.");
});

// edit todo
app.put("/", async (req, res) => {
  let todos = await readData();
    todos.forEach((todo) => {
      if (todo.id === req.body.id) {
        todo.title = req.body.title;
      }
    });

  writeData(todos)
  res.send("todo edited successfully.");
});

app.listen(3000);
