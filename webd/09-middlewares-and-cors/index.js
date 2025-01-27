const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let requestCount = 0;

const date = new Date();

// middleware

// middleware to parse the JSON data in the request body.
app.use(express.json()); // --> express.json() is being called here itself so that it returns the function that parses the req.body

// app.use(bodyParser.json()); //--> body parser could also be used to parse the JSON formattd request body

// app.use(cors()); // --> allows requests from all origins

// assignment - 2
// create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes this count.
// request increaser
app.use((req, res, next) => {
  requestCount += 1;
  req.requestCount = requestCount;
  // modifying the request object.
  req.name = "achirst";
  //   console.log("no.of requests until now: " + req.requestCount);
  let stopRequest = false;
  if (stopRequest) {
    res.json({ message: "I ended the request early" }); // --> the request could by stopped by the middleware here if needed (authorization can be implemented here).
  } else {
    next();
  }
});

// parsing strings into int
function stringParserInt(req, res, next) {
  req.query.a = parseInt(req.query.a);
  req.query.b = parseInt(req.query.b);
  next();
}

// assignment 1
// Create a middleware function that logs each incoming request's HTTP method, URL , and timestamp to the console.
app.use((req, res, next) => {
  console.log(
    `request metadata:\nmethod: ${req.method}\nurl: ${req.url}\nhostname: ${
      req.hostname
    }\ntimestamp: ${date.toISOString()}`
  );
  next();
});

// assignment-3
// write the middleware to log the status code of the response
app.use((req, res, next) => {
  // event listener for the response
  // executes the callback fn once, the response body and headers are sent.
  res.on("finish", () => {
    console.log(`status code of the response is: ${res.statusCode}\n`);
  });
  next();
});

// route handlers

// using query params to send the data with a get request
app.get("/multiply", async (req, res) => {
  //   console.log(req.name);
  res.json({ ans: `${req.query.a * req.query.b}` }); // query params ?
});

// a and b generally are sent as strings in case of query params, which might result in adding the numbers as strings
// hence using the stringParserInt middleware in this endpoint
app.get("/add", stringParserInt, async (req, res) => {
  //   console.log(typeof req.query.a);
  res.json({ ans: `${req.query.a + req.query.b}` }); // query params ?
});

app.get("/divide", async (req, res) => {
  res.json({ ans: `${req.query.a / req.query.b}` }); // query params ?
});

app.get("/subtract", async (req, res) => {
  res.json({ ans: `${req.query.a - req.query.b}` }); // query params ?
});

// using path params ---> dynamic endpoints
app.get("/add/:a/:b", async (req, res) => {
  res.json({ ans: `${parseInt(req.params.a) + parseInt(req.params.b)}` });
});

app.get("/request-count", async (req, res) => {
  res.json({
    requestCount: req.requestCount,
  });
});

// add using - post endpoint -- adding data in the body of the request instead of params.
app.post("/add", (req, res) => {
  res.json({
    sum: parseInt(req.body.a) + parseInt(req.body.b),
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});
