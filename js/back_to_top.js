jQuery(function( $ ){

    var utils = $.Utils();

    /**
     * return the height and width of an input object
     *
     * @param  DOM obj 		An element from the DOM
     * @return obj     		An object containing the height and width in pixels
     */
    var _find_dimensions = function ( obj ) {

        return { width: obj.offsetWidth, height: obj.offsetHeight };
    };

    /**
     * Add a left margin to section headers that's the same width as the site logo.
     *
     * @param  DOM obj 		An element from the DOM
     */
    var add_marginLeft_based_on_site_logo = function ( obj ) {

        var logo_dimensions = _find_dimensions( document.getElementById("site-logo") );

        obj.style.marginLeft = logo_dimensions.width + "px";
    };

    /**
     * Remove (inline) left margins on an input element
     *
     * @param  DOM obj    An element from the DOM
     */
    var remove_marginLeft = function ( obj ) {

        obj.style.marginLeft = "";
    };

    /**
     * Callback function will be called on every target.  Targets are acquired with
     * querySelectorAll
     *
     * @param  string targets   	argument for querySelectorAll
     * @param  function _function 	callback function accepting a DOM obj as a parameter
     */
    var apply_callback_function_on_queried_elements = function ( targets, _function ) {

        //check if querySelectorAll exists
        if( document.querySelectorAll ) {

            var objs = document.querySelectorAll( targets );

            if ( objs ) {

                for (var i=0, max=objs.length; i < max; i++) {

                    _function( objs[i] );
                }

            }
        }
        //if not, then nothing happens. haha.
    };

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

		var slightlyMoreEfficientFunction = debounce(function() {

			stick_button();
		}, 8 );

		if( ! visible_on_page_load )
			window.addEventListener('scroll', slightlyMoreEfficientFunction);

	
	/** 
	 * This is bad and I know it, but I'm sure I'll get to this, haha.
	 * @TODO: Better solution
	 */
	var currently_mobile = utils.is_mobile();

	//check for if we've resized the window.  if so, inline margin gone on headers
	function check_for_resizing() {

		if( currently_mobile !== utils.is_mobile() ) {

			if( utils.is_mobile() ) {
				//then remove the margin
				apply_callback_function_on_queried_elements( ".fp-section__header h2", remove_marginLeft );
			}
			else {
				//then calculate the margins again
				apply_callback_function_on_queried_elements( ".fp-section__header h2", add_marginLeft_based_on_site_logo );
			}

            currently_mobile = utils.is_mobile();
		}
	}

		var slightlyMoreEfficientFunctionTwo = debounce(function() {

			check_for_resizing();
		}, 5 );

		window.addEventListener('resize', slightlyMoreEfficientFunctionTwo);

	});


});

