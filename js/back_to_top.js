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

        var offset = 200;
        var $back_to_top = $(document).find(".back-to-top");

        $(window).scroll(function(){
            //if we have scrolled past the offset || if the browser hits the bottom of the page
            ( $(this).scrollTop() > offset ||
            $(window).scrollTop() + $(window).height() === $(document).height() ) ?
                $back_to_top.removeClass('invisible') :
                $back_to_top.addClass('invisible');
        });


        /**
         * if we start in a mobile window
         */
        var currently_mobile = utils.is_mobile();

        //check for if we've resized the window.  if so, inline margin gone on headers
        function check_for_resizing() {

            if (currently_mobile !== utils.is_mobile()) {

                if (utils.is_mobile()) {
                    //then remove the margin
                    apply_callback_function_on_queried_elements(".fp-section__header h2", remove_marginLeft);
                }
                else {
                    //then calculate the margins again
                    apply_callback_function_on_queried_elements(".fp-section__header h2", add_marginLeft_based_on_site_logo);
                }

                currently_mobile = utils.is_mobile();
            }
        }

        window.addEventListener('resize', check_for_resizing());
    });
});
