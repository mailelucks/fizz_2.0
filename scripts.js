$(document).ready(function() {

var DEBUG_MODE = false;
var debug = function(msg) {
    if (DEBUG_MODE == true) {
        console.log("DEBUG:", msg);
    }
}

var n = prompt("Enter a Number!");
debug(n);
debug(typeof n);
var m = parseFloat(n);
debug(m);
debug(typeof m);

function fizzBuzz(m){
debug("here1");
	if (m % 1 === 0){
		debug("here2");
		for (var i = 1; i <= n; i++) {
			debug("here3");
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
	} 
	else {
		
		$('.list').append("Please refresh the page and enter a whole number with no decimals.");
		
	};
};

fizzBuzz(n);

});