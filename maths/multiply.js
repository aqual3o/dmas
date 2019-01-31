/*
 * return multilication of 2 numbers
 *
 * throw error :
 * 	if any of the args is NaN */
function multiply (first, second) {
	if (isNaN (first) || isNaN (second))
		throw new Error ("one or more args not a number");
	return first * second;
}

/*
 * multiply all the nubmers in an array 
 *
 * throw error if :
 * 	no args
 * 	arg not array
 * 	all array elemets not number */

function multiplyArray (multipliers) {
	let product = 1;

	if (!multipliers || !Array.isArray (multipliers))
		throw new Error ("arg is not an array");

	for (let i = 0, iMax = multipliers.length ; i < iMax ; i++) {
		if (isNaN (multipliers [i]))
			throw new Error ("all array elements are not numbers");
		product = product * multipliers [i];
	}

	return product;
}

module.exports = {
	multiply      : multiply,
	multiplyArray : multiplyArray
};
