$(document).ready(function() {

var DEBUG_MODE = true;
var debug = function(msg) {
    if (DEBUG_MODE == true) {
        console.log("DEBUG:", msg);
    }
}

var initialInput = prompt("Enter a Number!");
debug(initialInput);
debug(typeof initialInput);
var roundedInput = parseFloat(initialInput);
debug(roundedInput);
debug(typeof roundedInput);

function fizzBuzz(roundedInput){
debug("here1");
	if (roundedInput % 1 === 0){
		debug("here2");
		for (var i = 1; i <= roundedInput; i++) {
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

fizzBuzz(roundedInput);


});