import chalk from "chalk";

console.log(chalk.blue("hello, world!"));
console.log(chalk.red.bold("This is an error message."));
console.log(chalk.green.underline("This is a success message."));

// run
// node --experimental-modules index.mjs

import fs from "fs";
import path from "path";

// console.log(__dirname) --> directory name not directly defined in ES module scope.
const __dirname = ""
const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file content: " + data);
  }
});


