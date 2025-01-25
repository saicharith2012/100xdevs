const chalk = require("chalk")

// chalk not working with commonJS files.

function sum(a,b) {
	return a+ b
}

const ans = sum(2,3)
console.log(ans);
