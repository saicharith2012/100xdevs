const express = require("express");
const app = express(); // initialising an instance of the express app

// route handlers
app.get("/", (req, res) => {
  // get method on '/' route
  res.send("Hello, world!");
});

app.post("/", (req, res) => {
  // post method on '/' route
  res.send("Hello, world post apocalyptic!");
});

app.get("/asd", (req, res) => {
  // the express app gives access to the request and response objects and allows to operate on them using the provided methods to send response
  res.send("Hello, from the asd endpoint!"); // res.send() to give plain text responses
});

// to serve static files
// app.use(express.static("./public"))

app.listen(3000); // makes sure that the process runs infinitely i.e. continuously listening.
// runs at the domain http://localhost:3000 (address --> 127.0.0.1 or [::1])
// this is a server
