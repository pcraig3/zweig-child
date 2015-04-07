//(mostly) pure javascript, runs on load, gets the offset of the spacer and the length of the logo.
var Init = (function () {

    //feels like this is bad practice :/
    var mobile_breakpoint = 619; 

    var is_mobile = function () {

      return window.innerWidth <= mobile_breakpoint;
    };

  	/**
  	 * function finds the x and y offset of an element relative to the top of the body element
  	 *
  	 * @see  http://stackoverflow.com/questions/6780376/element-coordinates-in-pure-javascript#comment8044628_6780376
  	 * 
  	 * @param  DOM obj 		An element from the DOM
  	 * @return obj     		An object containing the x and y offset in pixels
  	 */
  	var _findPos = function (obj) {

  		var curleft = 0, curtop = 0;
  		if (obj.offsetParent) {
  			do {
  				curleft += obj.offsetLeft;
  				curtop += obj.offsetTop;
  			} while (obj = obj.offsetParent);
  			return { x: curleft, y: curtop };
  		}
  		return undefined;
  	};


  	/**
  	 * function that runs a given function (obviously, without parameters) after 
  	 * a given timeout.  Not very interesting.
  	 * 
  	 * @param  function  _function
  	 * @param  int ms    
  	 */
  	var run_function_without_parameters_after_timeount = function (_function, ms) {

  		setTimeout(
			function() {
				_function();
				}, 
		ms);
  	};

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

  	return {

  		run_function_without_parameters_after_timeount: run_function_without_parameters_after_timeount,

  		apply_callback_function_on_queried_elements:
  			apply_callback_function_on_queried_elements,

  		add_marginLeft_based_on_site_logo: add_marginLeft_based_on_site_logo,
      remove_marginLeft: remove_marginLeft,

      is_mobile: is_mobile

  	};

})();

/**
 * function to add our new method to the onload event, rather than just wrench it in.
 * 
 * @param  function func 	a function ot run when the window loads
 *
 * @see  https://thechamplord.wordpress.com/2014/07/04/using-javascript-window-onload-event-properly/
 */
function zw_ch_load_event( func ) {
    // assign any pre-defined functions on 'window.onload' to a variable
    var oldOnLoad = window.onload;
    // if there is not any function hooked to it
    if (typeof window.onload != 'function') {
        // you can hook your function with it
        window.onload = func
    } else {     // someone already hooked a function
        window.onload = function () {
            // call the function hooked already
            oldOnLoad();
            // call your awesome function
            func();
        }
    }
}

jQuery(function( $ ){

  $(document).ready(function() {

    // add a left margin equal to the width of site logo to section header elements
    if( ! Init.is_mobile() )
      Init.apply_callback_function_on_queried_elements( ".fp-section__header h2", Init.add_marginLeft_based_on_site_logo );

  });

});