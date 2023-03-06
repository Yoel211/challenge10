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
      type: 'input',
      name: 'Description',
      message: 'Enter a text color',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Select a shape for the logo (use arrow keys)',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter a shape color',
    },
    
  ]).then(function(answers){
    console.log(answers)
    var result = generateMarkdown(answers)
    fs.writeFile("circle.svg", result, function(err){
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
