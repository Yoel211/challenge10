class shape {
  constructor (shapeColor, text, textColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(str) {
    this.shapeColor = str;
  }
  setText(str) {
    this.textColor = str;
  }
}

class Triangle extends shape {
  constructor (shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render(){
    return `<polygon fill=${this.shapeColor} points="150, 18 244, 182 56, 182"/>`;
  }
  textRender(){
    return `<text font-weight="bold" text-anchor='middle' fill=${this.textColor}>${this.title}</text>`;
  }
}

class Circle extends shape {
  constructor (shapeColor, text, textColor){
    super(shapeColor, text, textColor);
  }
  render(){
    return `<circle fill=${this.shapeColor} cx="51" cy="51" r="50"/>`;
  }
  textRender(){
    return `<text font-weight='bold' text-anchor='middle' fill=${this.textColor}>${this.title}</text>`;
  }
}

class Square extends shape {
  constructor (shapeColor, text, textColor){
    super(shapeColor, text, textColor);
  }
  render(){
    return `<rect fill=${this.shapeColor} x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1"/>`;
  }
  textRender(){
    return `<text font-weight='bold' text-anchor='middle' fill=${this.textColor}>${this.title}</text>`;
  }
}


module.exports = shape;















  






