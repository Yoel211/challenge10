class Triangle {
  constructor(shapeColor, textColor, borderColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.borderColor = borderColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<polygon fill="${this.shapeColor}" points="150, 18 244, 182 56, 182"/>`;
  }
}

class Circle {
  constructor(shapeColor, textColor, borderColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.borderColor = borderColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<circle fill="${this.shapeColor}" cx="51" cy="51" r="50"/>`;
  }
}

class Square {
  constructor(shapeColor, textColor, borderColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.borderColor = borderColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<rect fill="${this.shapeColor}" x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1"/>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
















  






