// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license){

  case "Apache License 2.0":
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    break;
  case "GNU General Public License v3.0":
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    break;
  case "MIT License":
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    break;
  case  "BSD 2-Clause Simplified License":
    badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]`;
    break;
  case "BSD 3-Clause New or Revisex License":
    badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
    break;
  case "Eclipse Public License v2.0":
    badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
    break;
  case "GNU General Public License v2.0":
    badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`;
    break;
  case "Mozilla Public License 2.0":
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  default:
    badge = " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
    link = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    break;
  case "GNU General Public License v3.0":
    link = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    break;
  case "MIT License":
    link = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    break;
  case  "BSD 2-Clause Simplified License":
    link = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]`;
    break;
  case "BSD 3-Clause New or Revisex License":
    link = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
    break;
  case "Eclipse Public License v2.0":
    link = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
    break;
  case "GNU General Public License v2.0":
    link = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`;
    break;
  case "Mozilla Public License 2.0":
    link = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  default:
    link = " "
  }

}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}` +
    renderLicenseBadge +
  `#Description
  ${data.description}
  #Installation Instructions
  ${data.installation}
  #Usage Information
  ${data.usage}
  #Contribution Guidelines
  ${data.contribution}
  #Testing Instructions
  ${data.testing}
  #License
  ${data.license}
  #Questions?
  Find me on github - ${data.github} or send me an email at ${data.email}.`;
}

module.exports = generateMarkdown;
