// assignment - Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words and lines inside it.

const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

function readFileAndOperate(filepath, operation) {
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (operation === "r") {
      console.log("file content:\n\n" + data);
      return;
    }

    const lines = data.split("\n");
    if (operation === "l") {
      console.log(`You have ${lines.length} lines in this file.`);
      return;
    }

    let wordCount = 0;
    if (operation === "w") {
      lines.forEach((line) => {
        wordCount += line.split(" ").length;
      });

      console.log(`You have ${wordCount} words in this file.`);
      return;
    }
  });
}

program
  .name("counter")
  .description("CLI to count the no.of words in a file.")
  .version("1.0.0");

program.command;

program
  .command("file-content")
  .description("outputs the file content")
  .argument("<filepath>", "path to the file")
  .action((filepath) => {
    readFileAndOperate(filepath, "r");
  });

program
  .command("count-lines")
  .description("counts the number of lines in the provided file.")
  .argument("<filepath>", "path to the file")
  .action((filepath) => {
    readFileAndOperate(filepath, "l");
  });

program
  .command("count-words")
  .description("counts the number of words in the provided file.")
  .argument("<filepath>", "path to the file")
  .action((filepath) => {
    readFileAndOperate(filepath, "w");
  });

program.parse();

// to make the script executable
// chmod +x wordCounter.js
