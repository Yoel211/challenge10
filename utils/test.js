const { Triangle, Circle, Square } = require('./shape');

describe('shape', () => {
  test('triangle class returns the right data', () => {
    const triangle = new Triangle('red', 'green', 'blue');
    expect(triangle).toEqual({
      shapeColor: 'red',
      textColor: 'green',
      borderColor: 'blue',
    });
  });

  test('circle class returns the right data', () => {
    const circle = new Circle('red', 'green', 'blue');
    expect(circle).toEqual({
      shapeColor: 'red',
      textColor: 'green',
      borderColor: 'blue',
    });
  });

  test('square class returns the right data', () => {
    const square = new Square('red', 'green', 'blue');
    expect(square).toEqual({
      shapeColor: 'red',
      textColor: 'green',
      borderColor: 'blue',
    });
  });
});

describe('shapeColor', () => {
  test('setColor returns a string you entered', () => {
    const shape = new Triangle();
    shape.setColor('yellow');
    expect(shape.shapeColor).toEqual('yellow');
  });
});

describe('render color to Triangle', () => {
  test('setColor returns svg string with color you entered', () => {
    const shape = new Triangle();
    shape.setColor('yellow');
    expect(shape.render()).toEqual('<polygon fill="yellow" points="150, 18 244, 182 56, 182"/>');
  });
});

describe('render color to Circle', () => {
  test('setColor returns svg string with color you entered', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle fill="blue" cx="51" cy="51" r="50"/>');
  });
});

describe('render color to Square', () => {
  test('setColor returns svg string with color you entered', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect fill="green" x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1"/>');
  });
});
