const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { auth } = require("./auth.js");

let JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.MONGODB_URI);
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  await UserModel.create({
    email,
    password,
    name,
  });

  res.json({
    message: "You are signed up.",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id, // payload to uniquely identify the user
      },
      JWT_SECRET
    );

    res.json({
      message: "You are signed in.",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Unauthorized. Incorrect Credentials.",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;

  await TodoModel.create({
    title,
    done: false,
    userId: req.id,
  });

  res.json({
    message: "todo added successfully.",
  });
});

app.get("/todos", auth, async (req, res) => {
  const todos = await TodoModel.find({
    userId: req.id,
  });

  res.json({
    todos,
    message: "todo fetched successfully",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at http:localhost:${PORT}`);
});
