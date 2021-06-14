// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [{  
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
             "Eclipse Public License v2.0",
             "GNU General Public License v2.0",
             "Mozilla Public License 2.0",
             "None",]

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
 
},
]
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    //fileName = `${response.title.split(" ").join("")}.md`
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log("Success! Your README has been generated.");
    })
    console.log(data)
}

// // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            const answers = generateMarkdown.generateMarkdown(response)
            writeToFile(`${response.title}.md`, answers);
    })
}

// // Function call to initialize app
 init();
