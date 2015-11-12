$(document).ready(function() {

var n = prompt("Enter a Number!");
console.log(n);
console.log(typeof n);
var m = parseFloat(n);
console.log(m);
console.log(typeof m);

if ( (m % 1 === 0) && (typeof m === 'number') ) {

	function fizzBuzz(m){
		for (var i = 1; i <= n; i++) {
			if ( (i % 3 === 0) && (i % 5 === 0) ){ 
				var output = "FizzBuzz";
				$('.list').append(output + "<br/>");
			}
			else if (i % 5 === 0) {
				var output = "Buzz";
				$('.list').append(output + "<br/>");
			}
			else if (i % 3 === 0) {
				var output = "Fizz";
				$('.list').append(output + "<br/>");
			}
			else {
				var output = i;
				$('.list').append(output + "<br/>");
			}
		}
	}; 

} else {
	
	$('.list').append("Please refresh the page and enter a whole number with no decimals.");
	
};

fizzBuzz(n);

});