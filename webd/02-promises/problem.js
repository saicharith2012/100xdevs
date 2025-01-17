// Problem:
// create an async function that
// 1. Reads the contents of a file
// 2. Trims the extraspace from the left and right
// 3. Writes it back to the file.

//  1. fs.readFile promisified -- just syntactically cleaning it.
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise((resolve) =>
    fs.readFile(filePath, "utf-8", (err, data) => {
      resolve(data);
    })
  );
}

function logFileData (data) {
  console.log(data)
}

readFilePromisified("a.txt").then(logFileData)