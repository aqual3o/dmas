/*
 * return sum of 2 numbers
 *
 * throw error :
 * 	if any of the args is NaN */
function sum (first, second) {
	if (isNaN (first) || isNaN (second))
		throw new Error ("one or more args not a number");
	return first + second;
}

/*
 * add all the nubmers in an array 
 *
 * throw error if :
 * 	no args
 * 	arg not array
 * 	all array elemets not number */

function sumArray (summers) {
	let sum = 0;

	if (!summers || !Array.isArray (summers))
		throw new Error ("arg is not an array");

	for (let i = 0, iMax = summers.length ; i < iMax ; i++) {
		if (isNaN (summers [i]))
			throw new Error ("all array elements are not numbers");
		sum = sum + summers [i];
	}

	return sum;
}

module.exports = {
	sum      : sum,
	sumArray : sumArray
};
