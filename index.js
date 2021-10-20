// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const content = require("./utils/generateMarkdown.js");
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
    choices: [
      "MIT",
      "Apache",
      "GPL",
      "LGPL",
      "Mozilla",
      "BSD2",
      "BSD3",
      "Common",
      "Eclipse",
    ],
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
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
}

// TODO: Create a function to initialize app - run inquirer
function init() {
  var prompt = inquirer.createPromptModule();

  prompt(questions).then((data) => {
    console.log(data);
  });
}

// Function call to initialize app
init();
