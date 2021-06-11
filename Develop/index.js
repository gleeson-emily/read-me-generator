// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions =

  inquirer
    .prompt ([
        //questions, [
  {  
  type: "input",
  message:"What is the title of your project?",
  name: "title",
  },
  { 
    type: "input",
    message: "Enter a description of your project.",
    name: "description",
  },
  {
      type: "input",
      message: "Enter the installation instructions for your project.",
      name: "installation",
  },
  {
      type: "input",
      message: "Enter the usage information for your project.",
      name: "usage",
  },
  {
      type: "input",
      message: "Enter the contribution guidelines for your project.",
      name: "contribution",
  },
  {
      type: "input",
      message: "Enter the testing instructions for your project.",
      name: "testing",
  },
  { name: "license",
    type: "list",
    message: "What license should your application have?",
    choices: ["Apache License 2.0", 
             "GNU General Public License v3.0",
             "MIT License",
             "BSD 2-Clause Simplified License",
             "BSD 3-Clause New or Revisex License",
             "Boost Software License 1.0",
             "Creative Commons Zero v1.0 Universal",
             "Eclipse Public License v2.0",
             "GNU Affero General Public License v3.0",
             "GNU General Public License v2.0",
             "GNU Lesser General Public License v2.1",
             "Mozilla Public License 2.0",
             "The Unilicense",]

  }, 
  {
      type: "input",
      message: "What is yout Github username?",
      name: "github",
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "email",
  }
]
    ,)
    .then ((response) => {
        console.log(response);
    }
    )
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
