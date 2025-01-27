// -Creating an express app
// -Lets initialise an express app that we will use to generate an authenticated backend today.
// -Initialise an empty Node.js project
// -Create an index.js file, open the project in visual studio code
// -Add express as a dependency
// -Create two new POST routes, one for signing up and one for signing in
// -Use express.json as a middleware to parse the post request body
// -Create an in memory variable called users where you store the username, password and a token (we will come to where this token is created later).
// -Complete the signup endpoint to store user information in the in memory variable
// -Create a function called generateToken that generates a random string for you
// -Finish the signin endpoint. It should generate a token for the user and put it in the in memory variable for that user

const express = require("express");

const app = express();

let users = [];

app.use(express.json());

// authentication using stateful random tokens
// some simple function to create a random token

// function generateToken() {
// let options = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
//   ]

//   let token = "";
//   //   creating a 32 characters token
//   for (let i = 0; i < 32; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

// app.post("/signup", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username.length < 5) {
//     res.json({
//       message: "Your username is too short.",
//     });
//     return;
//   }

//   if (users.find((u) => u.username === username)) {
//     res.json({
//       message: "username already taken.",
//     });
//     return;
//   }

//   users.push({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   console.log(users);

//   res.json({
//     message: "signed up successfully.",
//   });
// });

// app.post("/signin", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   //   find() returns a reference to the original object in the users array, so the changes made to foundUser are translated there.
//   const foundUser = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (!foundUser) {
//     res.status(403).json({
//       message: "username or password is incorrect",
//     });
//     return;
//   }

//   const token = generateToken();
//   foundUser.token = token;

//   console.log(users);
//   res.json({ message: "signedin successfully!", token: token });
// });

// // authenticated endpoint
// app.get("/me", (req, res) => {
//   // parsing the token from the request headers
//   const token = req.headers.authorization;
//   const user = users.find((u) => u.token === token);
//   if (user) {
//     res.json({
//       message: "authenticated and fetched info successfullly!",
//       username: user.username,
//       password: user.password,
//     });
//   } else {
//     res.status(401).json({
//       message: "Unauthorized - token invalid.",
//     });
//   }
// });

// Authentication using JWT tokens

// Replace token logic with jwt

// Lets change the token logic that we had to use jwts
// ► Add the jsonwebtoken library as a dependency - https://www.npmjs.com/package/jsonwebtoken
// Get rid of our generateToken function
// Create a JWT_SECRET variable
// Create a jwt for the user instead of generating a token
// Notice we put the username inside the token. The jwt holds your state.
// You no longer need to store the token in the global users variable
// In the /me endpoint, use jwt.verify to verify the token

const jwt = require("jsonwebtoken");

const JWT_SECRET = "12314123";

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username.length < 5) {
    res.json({
      message: "Your username is too short.",
    });
    return;
  }

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "username already taken.",
    });
    return;
  }

  users.push({
    username: req.body.username,
    password: req.body.password,
  });

  console.log(users);

  res.json({
    message: "signed up successfully.",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //   find() returns a reference to the original object in the users array, so the changes made to foundUser are translated there.
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!foundUser) {
    res.status(403).json({
      message: "username or password is incorrect",
    });
    return;
  }

  //  converts the username over to a jwt
  const token = jwt.sign(
    //
    {
      username: username, // data to be encoded inside the jwt (payload)
    },
    JWT_SECRET // key being used to create or sign this token
  ); // not needed to store this jwt in database

  console.log(users);
  res.json({ message: "signedin successfully!", token: token });
});

// authenticated endpoint
app.get("/me", (req, res) => {
  // parsing the token from the request headers
  const token = req.headers.authorization; // jwt token stored in the header
  const decodedInfo = jwt.verify(token, JWT_SECRET); // {username: "......."} ..uses the same jwt secret to decode the jwt into the data provided initially.
  const username = decodedInfo.username;
  const user = users.find((u) => u.username === username);

  //   in this case, the data store is still being accessed since we need to fetch password here which is not inside the jwt.
  if (user) {
    res.json({
      message: "authenticated and fetched info successfullly!",
      username: user.username,
      password: user.password,
    });
  } else {
    res.status(401).json({
      message: "Unauthorized - token invalid.",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});

// This can be improved further by
// 1. Adding zod for input validation
// 2. Making sure the same user cant sign up twice
// 3. Persisting data so it stays even if the process crashes
// We'll be covering all of this eventually
