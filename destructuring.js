/* destructuring and rest/spread */


// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

//with require
const { readFile } = require("fs");

const circle = {
    label: 'circleX',
    radius: 2
}

//function accepts an object with a radius property
const circleArea = ({ radius }, { precision = 2 } = {}) => 
    (PI * radius * radius).toFixed(precision);

console.log(
    circleArea(circle)
);
console.log(
    circleArea(circle, { precision: 5})
);

const [first, second,, fourth] = [10, 20, 30, 40];

const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
};

const { temp1, temp2, ...person } = data;

const newObject = {
    ...person
};