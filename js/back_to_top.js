jQuery(function( $ ){

    $(document).ready(function() {

        var offset = 200;
        var $back_to_top = $(document).find(".back-to-top");

        $(window).scroll(function () {
            //if we have scrolled past the offset || if the browser hits the bottom of the page
            ( $(this).scrollTop() > offset ||
            $(window).scrollTop() + $(window).height() === $(document).height() ) ?
                $back_to_top.fadeIn(300) :
                $back_to_top.fadeOut(300);
        });
    });
});
