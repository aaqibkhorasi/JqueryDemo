$(document).ready(function(){ 
	// Define a jQuery function called timer
	jQuery.fn.timer = function() {
		// If the last <p> element is not visible, then
		// select the currently visible <p> element,
		// set its display to none (i.e. not visible)
		// and set the next <p> to display as a block element
		if(!$(this).children("p:last-child").is(":visible")){
			$(this).children("p:visible").css("display", "none")
			.next("p").css("display", "block");
		}
		// Otherwise, the last <p> element is visible, so
		// set its display to none and set the first <p>
		// element to display as block, repeating the cycle.
		else{
			$(this).children("p:visible").css("display", "none")
			.end().children("p:first").css("display", "block");
		}
	}
	// Find the HTML element with id flashwords and
	// evaluate the jQuery timer function with an 
	// interval of 2000 ms.
	window.setInterval(function() {
		$("#flashwords").timer();
	}, 2000);
});
