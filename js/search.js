jQuery(function( $ ){

/*var Search = (function () {

	$form = ('.search-form__title').first();
	$input = $form.find('.search-field');


	var get_the_size_of_the_search_value = function () {

		$input.width();
	}

  	/**
  	 * Callback function will be called on every target.  Targets are acquired with 
  	 * querySelectorAll
  	 * 
  	 * @param  string targets   	argument for querySelectorAll
  	 * @param  function _function 	callback function accepting a DOM obj as a parameter
  	 *
  	var apply_callback_function_on_queried_elements = function ( targets, _function ) {

  	};

  	return {

  		get_the_size_of_the_search_value: get_the_size_of_the_search_value,
  	};

})();
*/


//@TODO: set a min-width-y type variable and also get it to work on pageload.
$( document ).ready( function() {

	var $form = $('.search-form__title').first();
	var $input = $form.find('.search-field');
	var $placeholder = $form.find('.placeholder');

	function set_input_field_width_based_on_value() {

		$placeholder.text( $input.val() );

		$input.css( 'width', $placeholder.width() + 30 );
	}

	$input.on('keyup keydown', function() {

		if( $input.val() === "" )
			$input.css( 'width', '300px' );
		else
			set_input_field_width_based_on_value();

	})

	set_input_field_width_based_on_value();

});


});