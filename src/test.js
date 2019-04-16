//Un-curried function
function unCurried(x, y) {
	return x + y;
}

//Curried function
function curried(x) {
	return function(y) {
		return function(z) {
			return x + y + z;
		}
	}
}
curried(10)(20)(10) /*?*/ // Returns 3