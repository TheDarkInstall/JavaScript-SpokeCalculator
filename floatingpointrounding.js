function fixFloat(x) {
	// Floating point precision when doing math subtraction can lead to numbers like 30.200000000000003
	// This function rounds to 1 decimal place.
	// If the decimal portion is zero eg. 32.0 then change to 32


	fixed=x.toFixed(1)

	var num_string=""+fixed

	l=num_string.length

	if (num_string.slice(l-2)==".0")
		num_string=num_string.slice(0,l-2)

	return num_string

}
