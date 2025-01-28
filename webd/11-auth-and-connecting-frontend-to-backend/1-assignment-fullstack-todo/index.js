// full stack todo
// user can sign up or sign in
// create, delete and update todos
// existing todos could be viewed and marked as done.

const express = require("express");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const app = express();

const JWT_SECRET = "helloworld";

let users = [];
// [
//     {
//         username:,
//         password: ,
//         todos: [
//             {
//                 todoId:,
//                 todoTitle:,
//                 todoStatus:,
//             },
//             {},
//             {},
//             {}
//         ]
//     },
//     {
//         username...}]

app.use(express.json());

function auth(req, res, next) {}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "user already exists.",
    });
    return;
  }

  if (username.length < 5) {
    res.json({
      message: "username is too short.",
    });
    return;
  }

  users.push({
    username,
    password,
  });

  console.log(users);

  res.json({
    message: "You are signedup. Proceed to signing in.",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!foundUser) {
    res.json({
      message: "Invalid username or password!",
    });
    return;
  }

  const token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );

  res.json({
    message: "You are signedin.",
    token: token,
  });
});

// authenticated endpoints
function auth(req, res, next) {
  const token = req.headers.authorization;
  const decodedInfo = jwt.verify(token, JWT_SECRET);

  if (!decodedInfo) {
    req.json({
      message: "Unauthorized. Invalid Token",
    });
    return;
  }

  const username = decodedInfo.username;
  req.username = username;

  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/create", auth, (req, res) => {
  const todoTitle = req.body.todo;

  let foundUser = users.find((u) => u.username === req.username);

  if (!foundUser.todos) {
    foundUser.todos = [];
  }

  foundUser.todos.push({
    todoId: v4(),
    todoTitle,
    todoStatus: "pending",
  });

  console.log(users);

  res.json({
    message: "todo added successfully!",
  });
});

app.get("/all", auth, (req, res) => {
  const foundUser = users.find((u) => u.username === req.username);

  res.json({
    todos: foundUser.todos,
  });
});

app.put("/update", auth, (req, res) => {
  const { todoId, newTitle } = req.body;
  let foundUser = users.find((u) => u.username === req.username);

  let foundTodo = foundUser.todos.find((todo) => todo.todoId === todoId);

  foundTodo.todoTitle = newTitle;

  res.json({
    message: "todo updated successfully.",
  });
});

app.delete("/delete", auth, (req, res) => {
  const { todoId } = req.body;

  let foundUser = users.find((user) => user.username === req.username);

  const removeId = foundUser.todos.findIndex((todo) => todo.todoId === todoId);

  foundUser.todos.splice(removeId, 1);

  res.json({
    message: "todo deleted succesfully",
  });
});

app.put("/check", auth, (req, res) => {
  const { todoId } = req.body;

  let foundUser = users.find((u) => u.username === req.username);

  let checkTodo = foundUser.todos.find((todo) => todo.todoId === todoId);

  checkTodo.todoStatus = "finished";

  res.json({
    message: "todo checked succesfully.",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
