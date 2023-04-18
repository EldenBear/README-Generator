const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');
const {renderLicenseSection} = require('./utils/generateMarkdown');
const {renderLicenseBadge} = require('./utils/generateMarkdown');
const {renderLicenseLink} = require('./utils/generateMarkdown');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What's your GitHub user name?",
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What's your e-mail?",
    },
    
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter installation instructions.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter usage information.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please enter any contributors.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please enter test instructions.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your README",
        choices: ['MIT', 'BSD', 'None']

    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data) + "\n", () => {} );
    fs.appendFileSync(fileName, "\n", () => {});
    fs.appendFileSync(fileName, renderLicenseBadge(data.license), () => {});
    fs.appendFileSync(fileName, "\n", () => {});
    fs.appendFileSync(fileName,"## Description \n", () => {} );
    fs.appendFileSync(fileName, data.description + "\n", () => {});
    fs.appendFileSync(fileName, "## Table of Contents \n", () => {});
    fs.appendFileSync(fileName, "- [Installation](#installation) \n" , () => {});
    fs.appendFileSync(fileName, "- [Usage](#usage) \n" , () => {});
    fs.appendFileSync(fileName, "- [Contributors](#contributors) \n" , () => {});
    fs.appendFileSync(fileName, "- [Tests](#tests) \n" , () => {});
    fs.appendFileSync(fileName, "- [License](#license) \n" , () => {});
    fs.appendFileSync(fileName, "- [Questions](#questions) \n" , () => {});
    fs.appendFileSync(fileName,"## Installation \n", () => {} );
    fs.appendFileSync(fileName, data.installation + "\n", () => {});
    fs.appendFileSync(fileName,"## Usage \n", () => {} );
    fs.appendFileSync(fileName, data.usage + "\n", () => {});
    fs.appendFileSync(fileName,"## Contributors \n", () => {} );
    fs.appendFileSync(fileName, data.contributing + "\n", () => {});
    fs.appendFileSync(fileName,"## Tests \n", () => {} );
    fs.appendFileSync(fileName, data.tests + "\n", () => {});
    fs.appendFileSync(fileName,"## License \n", () => {} );
    fs.appendFileSync(fileName, "\n", () => {});
    fs.appendFileSync(fileName, renderLicenseSection(data.license,data.github) + "\n", () => {});
    fs.appendFileSync(fileName, renderLicenseLink(data.license), () => {});
    fs.appendFileSync(fileName, "\n", () => {});
    fs.appendFileSync(fileName,"## Questions \n", () => {} );
    fs.appendFileSync(fileName,"GitHub User: " + data.github + "\n", () => {});
    fs.appendFileSync(fileName, "\n", () => {});
    fs.appendFileSync(fileName, "E-mail: " + data.email + "\n", () => {});
};

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = 'SampleREADME.md';
        writeToFile(fileName, data);
    });
};

// Function call to initialize app
init();
