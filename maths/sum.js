function sum (first, second) {
	if (isNaN (first) || isNaN (second))
		throw new Error ("one or more args not a number");
	return first + second;
}

module.exports = sum;
