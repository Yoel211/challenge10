function generateMarkdown(data) {
  console.log(data)
  
  
  return `<svg height="200" width="300">
    <polygon fill=${data.shapeColor} points="150, 18 244, 182 56, 182"/>
    <text font-weight="bold" text-anchor='middle' x="0" y="15" fill=${data.textColor}>${data.title}</text> 
  </svg>`
}

function generateMarkdown(data) {
  console.log(data)


  return ` <svg viewBox="0 0 102 102">
    <circle fill=${data.shapeColor} cx="51" cy="51" r="50"/>
    <text font-weight='bold' text-anchor='middle' x="0" y="15" fill=${data.textColor}>${data.title}</text> 
    </svg>`
}

function generateMarkdown(data) {
  console.log(data)


  return `<svg  width="600" height="600" viewBox="0 0 600 600">
   <rect fill=${data.shapeColor} x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1"/>
   <text font-weight='bold' text-anchor='middle' x="0" y="15" fill=${data.textColor}>${data.title}</text> 
   </svg>`
}











  
  module.exports = generateMarkdown;





// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');