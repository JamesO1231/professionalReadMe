// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD 2-Clause License'){
    return  '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  }else if (license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'GNU GPLv3 License'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  }
  return '\n* [License](#license)'

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  return `
## License
* ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)}
  
#### Table of Contents
* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contributor Guidelines](#contributor-guidelines)
* [Code of Conduct](#code-of-conduct)${renderLicenseLink(data.license)}
* [Test Instructions](#test-instructions)
* [Questions](#questions)

## Project Description
* ${data.description}

## Installation Instructions
* ${data.installation}

## Usage Information
* ${data.usage}

## Contributor Guidelines
* ${data.contributionRules}

## Code of Conduct
* [Contributor Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Test Instructions
* ${data.testInstructions}
${renderLicenseSection(data.license)}

## Questions
* For additional help or questions about collaboration, please reach out to ${data.email}
* Follow me on Github at [${data.gitHub}](http://github.com/${data.gitHub})

## Video Tutorial
* [Video Tutorial Link](https://drive.google.com/file/d/1Jy2lTnqJ42CndrBrS0MQQaMUUNLiK9vj/view)

## Usage Image
![Alt text](./images/usageImage.PNG)
`;
}

module.exports = generateMarkdown;