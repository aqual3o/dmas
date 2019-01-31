const sum      = require ("./maths/sum");
const multiply = require ("./maths/multiply");
const divide   = require ("./maths/divide");
const subtract = require ("./maths/subtract");

const dmas = {};

/*
 * sum related functions */
dmas.sum      = sum.sum;
dmas.sumArray = sum.sumArray;

/*
 * multiply related functions */
dmas.multiply      = multiply.multiply;
dmas.multiplyArray = multiply.multiplyArray;

/*
 * divide related functions */
dmas.divide   = divide;

/*
 * subtract related functions */
dmas.subtract = subtract;

module.exports = dmas;
