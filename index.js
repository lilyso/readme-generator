// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const content = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
  },
  {
    name: "summary",
    message: "Enter a short summary of your project...",
    type: "input",
  },
  {
    name: "license",
    message: "Choose a license:",
    type: "list",
    choices: ["MIT", "APACHE", "GPL", "LGPL", "MOZILLA"],
  },
  {
    name: "description",
    message: "Enter a description for your project...",
    type: "input",
  },
  {
    name: "installation",
    message: "Enter installation instructions...",
    type: "input",
  },
  { name: "usage", message: "Enter usage information...", type: "input" },
  {
    name: "contribute",
    message: "Enter contribution guidelines...",
    type: "input",
  },
  { name: "test", message: "Enter test instructions...", type: "input" },
  { name: "github", message: "What is your GitHub username?", type: "input" },
  { name: "githubUrl", message: "Enter your GitHub URL...", type: "input" },
  { name: "email", message: "What is your email?", type: "input" },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(`${filename}.md`, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File successfully generated = README.md");
  });
}

// TODO: Create a function to initialize app - run inquirer
function init() {
  var prompt = inquirer.createPromptModule();

  prompt(questions).then((data) => {
    // console.log(data);
    var readme = content(data);
    // console.log("readme", readme);
    writeToFile("README", readme);
  });
}

// Function call to initialize app
init();
