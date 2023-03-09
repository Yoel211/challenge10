// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');


inquirer 
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter text for the logo. (Must not be more than 3 characters).',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Enter a text color',
      choices: [
        'Red',
        'Green',
        'Blue'
      ],
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo (use arrow keys)',
      choices: [
        'circle',
        'square',
        'triangle'
      ],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Enter a shape color',
      choices: [
        'green',
        'blue',
        'yellow'
      ],
    },

  ]).then(function(answers){
    console.log(answers)
    var result = generateMarkdown(answers)
    fs.writeFile("shape.svg", result, function(err){
      if (err) throw err
      console.log("wrote file")
    })
  })
  


































// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
