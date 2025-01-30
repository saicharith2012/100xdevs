const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");
const dotenv = require("dotenv");
dotenv.config();
const { auth } = require("./auth.js");
const bcrypt = require("bcrypt");

let JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.MONGODB_URI);
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z
      .string()
      .min(6)
      .max(15)
      .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/), {
        message:
          "Password must contain atleast one Uppercase letter, one lowercase letter and a special character.",
      }),
    name: z.string().min(3).max(100),
  });

  // const parsedData = requiredBody.parse(req.body);
  // --> return data if valid, or throws an error
  // if invalid causing a application crash.

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  // .safeParse returns an object with info of success
  // or failure and an error instance with details
  // if failure occurs

  // {
  //   success: true | false,
  //   data: {},
  //   errors: []
  // }
  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "incorrect format",
      error: parsedDataWithSuccess.error.issues[0].message,
    });

    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  // password, saltrounds(to generate the salt)
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await UserModel.create({
      email,
      password: hashedPassword,
      name,
    });

    res.json({
      message: "You are signed up.",
    });
  } catch (error) {
    res.json({
      message: "User already exists.",
    });
  }
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    res.status(403).json({
      message: "User does not exist.",
    });
    return;
  }

  // comparing the password
  const passwordsMatch = bcrypt.compare(password, user.password);

  // authenticating and sending the auth token if the passwords match
  if (passwordsMatch) {
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
