jQuery(function( $ ){

	var Search = (function () {

		var min_width = 200;

		var $form = $('.search-form__title').first();
		var $input = $form.find('.search-field');
		var $placeholder = $form.find('.placeholder');

		var $search_again_link = $('.subhead__search_again a');

		/**
		 * function does more or less what it's called, so...
		 */
		var _set_input_field_width_based_on_value = function () {

			//set the text in the hidden placeholder to the search term
			//(this is because we can't measure the length of the string in the input)
			$placeholder.text( $input.val() );
			$input.css( 'width', $placeholder.width() + ( min_width / 7.5 ) );
		};

		/**
		 * sort of complicated-looking, but not really that bad.
		 * function calculates a max-width so that our header search bar doesn't push the magnifying glass down a line.
		 */
		var _calculate_input_field_max_width_based_on_search_bar = function () {

			var left_offset_of_button = $form.find('.search-submit').offset().left;
			var left_offset_of_form = $form.offset().left;

			var current_width_of_form = $form.width();
			var current_width_of_input = $input.width();

			return ( left_offset_of_button - left_offset_of_form )
			 - (2 * ( current_width_of_form - current_width_of_input ) );
		};

		/**
		 * function sets up the search bar in the title on page load.
		 * This means setting the width for the first time and 
		 * attaching our method to an event handler
		 */
		var search_init = function () {

			$input.on( 'keyup', _set_input_field_width_based_on_value );
			$input.css( 'min-width', min_width );
			$input.css( 'max-width', _calculate_input_field_max_width_based_on_search_bar() );

			var init_width = _set_input_field_width_based_on_value();

			//the first time this method runs, it can't do long queries properly.  This helps.
			//(but it's still a hack, fundamentally.)
			setTimeout( function(){	
				if ( $placeholder.width() !== init_width )

					_set_input_field_width_based_on_value();
			}, 100);
		};

		/**
		 * When the 'search again' link is clicked, clear the bottom search value 
		 * and set the focus on it.  
		 * Bit of a workaround becuase we hid the search bar in the header.
		 */
		var search_again_clear_focus_footer_search = function () {

			$search_again_link.on("click", function() {

				$('#footer').find('.search-field').val("").focus();
			});
		};

	  	return {

			search_init: search_init,
			search_again_clear_focus_footer_search: search_again_clear_focus_footer_search
	  	};

	})();

	$( document ).ready( function() {

		Search.search_init();
		Search.search_again_clear_focus_footer_search();
	});

});