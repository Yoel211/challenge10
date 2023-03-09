function generateMarkdown(data) {
  console.log(data)
// `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
  
 return `<svg height="200" width="300">
    <polygon fill='green' points="250,60 100,400 400,400" />
    <text text-anchor='middle' x="0" y="15" fill=${data.textColor}>I love SVG!</text> 
  </svg>`


  }
  
  module.exports = generateMarkdown;