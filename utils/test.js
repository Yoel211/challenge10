const { shape, triangle, circle, square} = require('./shape');
const color = require('./utils/color');

describe ('shape', () => {
    test ('triangle class returns the right data',()=> {
        const triangle = new triangle ('red', 'green', 'blue');
        expect(triangle).toEqual({
            shapeColor: 'red',
            text: 'abc',
            textColor: 'black',
        });
    });
    test ('circle class returns the right data',()=> {
        const circle = new circle ('red', 'green', 'blue');
        expect(cirlce).toEqual({
            shapeColor: 'red',
            text: 'abc',
            textColor: 'black',
        });
    });
    test ('square class returns the right data',()=> {
        const square = new square ('red', 'green', 'blue');
        expect(square).toEqual({
            shapeColor: 'red',
            text: 'abc',
            textColor: 'black',
        });
    });
});

describe('shapeColor', () => {
    test('setColor returns a string you entered', ()=>{
        const shape = new triangle();
        shape.setColor('yellow');
        expect(shape.shapeColor).toEqual('yellow');
    });
});

describe('render color to triangle', () => {
    test('setColor returns svg tring with color you entered', ()=>{
        const shape = new triangle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<polygon fill=('yellow') points="150, 18 244, 182 56, 182"/>`);
    });
});

describe('render color to circle', () => {
    test('setColor returns svg tring with color you entered', ()=>{
        const shape = new circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<circle fill=('blue') cx="51" cy="51" r="50"/>`);
    });
});

describe('render color to square', () => {
    test('setColor returns svg tring with color you entered', ()=>{
        const shape = new square();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<rect fill=('green') x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1"/>`);
    });
});









