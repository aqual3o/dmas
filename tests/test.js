/* eslint no-console : "off" */
const dmas = require ("../dmas");

console.log (`Summing      2 & 4,    Expected : 6, Result : ${dmas.sum      (2, 4)}`);
console.log (`Multiplying  2 & 4,    Expected : 8, Result : ${dmas.multiply (2, 4)}`);
console.log (`Dividing     4 by 2,   Expected : 2, Result : ${dmas.divide   (4, 2)}`);
console.log (`Subtracting  2 from 4, Expected : 2, Result : ${dmas.subtract (4, 2)}`);

console.log (`Summing     array  [2, 4, 6], Expected : 12, Result : ${dmas.sumArray      ([2, 4, 6])}`);
console.log (`Multiplying array  [2, 4, 6], Expected : 48, Result : ${dmas.multiplyArray ([2, 4, 6])}`);
