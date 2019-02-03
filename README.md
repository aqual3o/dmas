# dmas

dmas is a Nodejs module that lets you do basic maths operations.

## Installation

Use the node package manager (npm) to install dmas

```bash
npm i dmas
```

## Usage

```
const dmas = require ("dmas");

let sum      = dmas.sum      (2, 4); //expected output --> 6
let multiply = dmas.multiply (2, 4); //expected output --> 8
let divide   = dmas.divide   (4, 2); //expected output --> 2
let subtract = dmas.subtract (4, 2); //expected output --> 2

let sumArray      = dmas.sumArray      ([2, 4, 6]); //expected output --> 12
let multiplyArray = dmas.multiplyArray ([2, 4, 6]); //expected output --> 48
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
[Github repo of dmas](https://github.com/aqual3o/dmas)

## License
[ISC](http://opensource.org/licenses/ISC)
