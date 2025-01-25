// assignment - Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words and lines inside it.

const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

program
  .name("count-no-of-words")
  .description("CLI to count the no.of words in a file.")
  .version("1.0.0");

program
  .command("count")
  .description("count the lines and words")
  .argument("<filepath>", "path to the file")
  .action((filepath) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data)
        const lines = data.split("\n")
        const lineCount = lines.length
        let wordCount = 0;
        lines.forEach((line) => {
          const words = line.split(" ")
          wordCount += words.length
        })
        console.log(`You have ${wordCount} words and ${lineCount} lines in this file`);
      }
    });
  });

program.parse()

// to make the script executable
// chmod +x wordCounter.js