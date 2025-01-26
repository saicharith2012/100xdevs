const express = require("express");

const app = express();

// route handlers
// using query params to send the data with a get request
app.get("/multiply", async (req, res) => {
  res.send(`${req.query.a * req.query.b}`); // query params ?
});

// a and b generally are sent as strings
app.get("/add", async (req, res) => {
  res.send(`${parseInt(req.query.a) + parseInt(req.query.b)}`); // query params ?
});

app.get("/divide", async (req, res) => {
  res.send(`${req.query.a / req.query.b}`); // query params ?
});

app.get("/subtract", async (req, res) => {
  res.send(`${req.query.a - req.query.b}`); // query params ?
});

// using path params ---> dynamic endpoints
app.get("/add/:a/:b", async (req, res) => {
  res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`);
});

app.listen(3000);
