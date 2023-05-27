const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./utils/shape')
const fs = require('fs');

function init() {
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
    if (
      answers.shape === 'circle'
    )
    {
      var shape = new Circle(answers.shapeColor, answers.textColor)
      var results = svgTemplate(shape, answers.textColor ,answers.title)
      renderSvg(results);
    }
    else if (
      answers.shape === 'square'
    )
    {
      var shape = new Square(answers.shapeColor, answers.textColor)
      var results = svgTemplate(shape, answers.textColor ,answers.title)
      renderSvg(results);
    }
    else if (
      answers.shape === 'triangle'
    )
    {
      var shape = new Triangle(answers.shapeColor, answers.textColor)
      var results = svgTemplate(shape, answers.textColor ,answers.title)     
      renderSvg(results);
    }

   
  })
} 
init()

function svgTemplate(shape,color, title) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${title}</text>
  </svg>`
}

function renderSvg(results) {
  fs.writeFile('logo.svg', results, function(err) {
    if (err) throw err;
    console.log('Saved!');
  })
}