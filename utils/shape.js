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
    return `<circle fill="${this.shapeColor}" cx="150" cy="100" r="80"/>`;
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
    return `<rect fill="${this.shapeColor}" x="90" y="40"  width="120" height="120" stroke-width="1"/>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
















  






