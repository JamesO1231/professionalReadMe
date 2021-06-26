// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installation is needed for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of your application?',
        },
        {
            type: 'input',
            name: 'contributionRules',
            message: 'Are there any rules regarding contributions?',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please provide test instructions if there are any'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is used',
            choices: [
                'BSD 2-Clause License',
                'MIT License', 
                'GNU GPLv3 License',
                'None',
            ]
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email address'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your gitHub username'
        },
    ]);
};
// TODO: Create a function to write README file
function writeFile(name, data) {
    return writeFileAsync(name, data);
}


// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(function (data) {
        const readme = generateMarkdown(data);

        return writeFile('README.md', readme);
    })
    .then(function () {
        console.log('README.md has been created!');
    })
    .catch(function (err) {
        console.log(err);
    });
}

// Function call to initialize app
init();