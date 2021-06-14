// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license){

  case "Apache License 2.0":
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  case "GNU General Public License v3.0":
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  case "MIT License":
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  case  "BSD 2-Clause Simplified License":
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  case "BSD 3-Clause New or Revisex License":
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  case "Eclipse Public License v2.0":
    return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
  case "GNU General Public License v2.0":
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  case "Mozilla Public License 2.0":
    return`![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
default:
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
  return `[here](https://opensource.org/licenses/Apache-2.0)`;

  case "GNU General Public License v3.0":
  return `[here](https://www.gnu.org/licenses/gpl-3.0)`;

  case "MIT License":
  return `[here](https://opensource.org/licenses/MIT)`;

  case  "BSD 2-Clause Simplified License":
  return `[here](https://opensource.org/licenses/BSD-2-Clause)`;

  case "BSD 3-Clause New or Revisex License":
  return `[here](https://opensource.org/licenses/BSD-3-Clause)`;

  case "Eclipse Public License v2.0":
  return `[here](https://opensource.org/licenses/EPL-1.0)`;

  case "GNU General Public License v2.0":
  return `[here](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

  case "Mozilla Public License 2.0":
    return `[here](https://opensource.org/licenses/MPL-2.0)`;
  default:
    return " "
  }

}

// TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "None":
      return ""
    default:
      return `## License

  This software is licensed under ${license}.

  The details for this license can be found ${renderLicenseLink(license)}.
      `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}
  # ${response.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Testing Instructions](#testing-instructions)
  - [License](#license)
  - [Questions?](#questions)

  ## Description
  ${response.description}
  ## Installation Instructions
  ${response.installation}
  ## Usage Information
  ${response.usage}
  ## Contribution Guidelines
  ${response.contribution}
  ## Testing Instructions
  ${response.testing}
  ${renderLicenseSection(response.license)}
 
  ## Questions?
  Find me on github - ${response.github} or send me an email at ${response.email}.`;
}

module.exports = {generateMarkdown};