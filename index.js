// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (answer) => {
          if(answer === '') {
            return 'please enter a valid name'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        default: 'Web application.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        default: 'Check my github for documentation.'
        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        default: 'No contributors.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to test the application',
        default: 'npm start'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Enter license type.',
        choices: ['MIT', 'GPL v2', 'Apache', 'GPL v3', 'BSD 3-clause', 'GNU LGPL v3', 'GNU AGPL v3'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'What is your linkedin url?',
        default: 'linkedin.com'
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your github username.',
        validate: (answer) => {
          if(answer === '') {
            return 'please enter a valid email address'
          }
          return true
        } 
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Enter your github repo URL.',
        validate: (answer) => {
          if(answer === '') {
            return 'please enter a valid email address'
          }
          return true
        } 
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: (answer) => {
          if(answer === '') {
            return 'please enter a valid email address'
          }
          return true
        }
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
  var userResponses = inquirer.prompt(questions);
  userResponses
  .then(response => {
    var fileName = 'README.md';
    var data = response;
    writeToFile(fileName, data);
  })
}

// Function call to initialize app
init();


// 09/19 activity & 09/14 activity & 09/20 & 

// const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);