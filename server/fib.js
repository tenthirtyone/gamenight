var retVal = 0;

function fib(a,b) {
	if (a>4000000) {
		return;
	}
	console.log(a,b);
	if (a%2===0) {
		retVal += a;
	}	
	fib(b,a+b);
}

fib(1,2);

console.log();
console.log(retVal);
