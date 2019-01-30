const sum      = require ("./maths/sum");
const multiply = require ("./maths/multiply");
const divide   = require ("./maths/divide");
const subtract = require ("./maths/subtract");

const dmas = {};

dmas.sum      = sum;
dmas.multiply = multiply;
dmas.divide   = divide;
dmas.subtract = subtract;

module.exports = dmas;
