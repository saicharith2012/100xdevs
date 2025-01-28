const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

let users = [];

const JWT_SECRET = "45141414";

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request came.`);
  next();
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;
  if (username) {
    req.username = username; // passing the decoded Data through this auth middleware to the request handlers by adding it to the request body .
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized. Invalid token.",
    });
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // absolute path for the static files
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "user already exists.",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });

  console.log(users);

  res.send({
    message: "You are signedup.",
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
      message: "credentials incorrect",
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
    message: "user successfully signed in.",
    token: token,
  });
});

app.get("/me", auth, (req, res) => {
  const foundUser = users.find((u) => u.username === req.username);

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000);
