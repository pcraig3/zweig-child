jQuery(function( $ ){

    /**
     * This function controls showing and fading the button itself when we are manually scrolling up and down
     * the site.
     * For the sweet-scroll setup and callbacks, look in `./scroll.js`
     */
    $(document).ready(function() {

        var offset = 200;
        var $back_to_top = $(document).find(".back-to-top");

        $(window).scroll(function () {
            // if back_to_top button doesn't have the 'clicked' class AND
            // if we have scrolled past the offset OR if the browser hits the bottom of the page
            ( ! $back_to_top.hasClass('clicked') &&
                ( $(this).scrollTop() > offset ||  $(window).scrollTop() + $(window).height() === $(document).height() )
            ) ?
                $back_to_top.fadeIn(300) :
                $back_to_top.fadeOut(300);
        });
    });
});
