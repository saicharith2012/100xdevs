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

  // console.log(users);

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
      statusCode: 403,
    });
    return;
  }

  const token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "You are signedin.",
    token: token,
    statusCode: 200,
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

  if (todoTitle.length === 0) {
    res.json({
      message: "todo cannot be empty",
    });
    return;
  }

  let foundUser = users.find((u) => u.username === req.username);

  if (!foundUser.todos) {
    foundUser.todos = [];
  }

  foundUser.todos.push({
    todoId: v4(),
    todoTitle,
    todoStatus: "pending",
  });

  // console.log(users);

  res.json({
    message: "todo added successfully!",
    statusCode: 200,
  });
});

app.get("/all", auth, (req, res) => {
  const foundUser = users.find((u) => u.username === req.username);

  // console.log(req.username);

  if (!foundUser.todos) {
    foundUser.todos = [];
  }

  // console.log(foundUser.todos);

  res.json({
    todos: foundUser.todos,
  });
});

app.put("/update", auth, (req, res) => {
  const { todoId, newTitle } = req.body;

  if (newTitle.length === 0) {
    res.json({
      message: "task cannot be empty",
    });
    return;
  }

  let foundUser = users.find((u) => u.username === req.username);

  let foundTodo = foundUser.todos.find((todo) => todo.todoId === todoId);

  foundTodo.todoTitle = newTitle;

  res.json({
    message: "todo updated successfully.",
    statusCode: 200,
  });
});

app.delete("/delete/:id", auth, (req, res) => {
  const todoId = req.params.id;

  let foundUser = users.find((user) => user.username === req.username);

  const removeId = foundUser.todos.findIndex((todo) => todo.todoId === todoId);

  foundUser.todos.splice(removeId, 1);

  res.json({
    message: "todo deleted succesfully",
    statusCode: 200,
  });
});

app.put("/check", auth, (req, res) => {
  const { todoId } = req.body;

  let foundUser = users.find((u) => u.username === req.username);

  let checkTodo = foundUser.todos.find((todo) => todo.todoId === todoId);

  checkTodo.todoStatus = "finished";

  // console.log(checkTodo);

  res.json({
    message: "todo checked succesfully.",
  });
});

app.delete("/delete-all", auth, (req, res) => {
  let foundUser = users.find((u) => u.username === req.username);
  if (!foundUser.todos) {
    res.json({
      message: "nothing to delete.",
    });
    return;
  }
  foundUser.todos = [];

  res.json({
    message: "all todos deleted successfully.",
    statusCode: 200,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
