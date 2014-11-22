jQuery(function( $ ){

	$(document).ready(function() {

		var stickpoint = -1;
		var stuck = false;

		$document = $( document );
		$back_to_top = $document.find( ".back-to-top" );

		//should basically always be false, as we're using a min-height of 1vh
		var visible_on_page_load = $back_to_top.isOnScreen();

		/**
		 * If the absolutely positioned button is visible onscreen, 
		 * then return the coordinates of the window relative to the body element 
		 */
		 function set_stickpoint_if_button_visible() {

		 	if( $back_to_top.isOnScreen() ) 
		 		return $document.scrollTop();

		 	return -1;
		 };

		/**
		 * If the button is past the point where it first appeared on the screen, 
		 * then give it a fixed positioning.  
		 * If, however, we're scrolling past where the button used to be absolutely 
		 * positioned, then give it its absolute positioning back
		 * 
		 * @param  boolean if_past_stickpoint 	whether the button is past its initial point or not
		 */
		 function stick_button_if_past_stickpoint( if_past_stickpoint ) {

		 	if( if_past_stickpoint && !stuck ) {

		 		$back_to_top.addClass('stuck');
		 		stuck = true;
		 	}

		 	else if( !if_past_stickpoint && stuck ) {

		 		$back_to_top.removeClass('stuck');
		 		stuck = false;
		 		stickpoint = -1;
		 	}
		 };

		/**
		 * If we don't have the button's position relative to the window, 
		 * wait for it to appear on screen.
		 * Once we have its initial position, then call another method that 
		 * swaps it between being stuck and fixed.
		 */
		 function stick_button() {

			//if not yet visible
			if( stickpoint < 0 )

				stickpoint = set_stickpoint_if_button_visible();

			///once visible
			else {

				///if button past the stickpoint, fixed positioning. if not, then absolute
				stick_button_if_past_stickpoint( $document.scrollTop() >= stickpoint );
			}
		};

		// Returns a function, that, as long as it continues to be invoked, will not
		// be triggered. The function will be called after it stops being called for
		// N milliseconds. If `immediate` is passed, trigger the function on the
		// leading edge, instead of the trailing.
		// @see http://davidwalsh.name/javascript-debounce-function
		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		var myEfficientFn = debounce(function() {

			stick_button();
		}, 8 );

		if( ! visible_on_page_load )
			window.addEventListener('scroll', myEfficientFn);

	});
});

