const sum      = require ("./sum");
const multiply = require ("./multiply");
const divide   = require ("./divide");
const subtract = require ("./subtract");

const dmas = {};

dmas.sum      = sum;
dmas.multiply = multiply;
dmas.divide   = divide;
dmas.subtract = subtract;

module.exports = dmas;
