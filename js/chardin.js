jQuery(function( $ ){

    var utils = $.Utils();
    $body = $('body');
    focus_on_close_class = 'chardinjs--focus-on-close';

    if ( utils.is_mobile() ) {
        $body.addClass('is-mobile');
    }

    $(window).resize(function() {

        if ( utils.if_mobile_changed() ) {
            $body.toggleClass('is-mobile');
        }
    });

    // 'click' event handler on .chardinjs elements starts chardinjs
    $body.find('.chardinjs').on('click', function(e) {

        $body.chardinJs('start');
        $(this).addClass(focus_on_close_class);
        e.preventDefault();
    });

    function chardinjs_stop(e) {
        $body.chardinJs('stop');

        if (e) {
            e.preventDefault();
        }
    }

    function chardinjs_stop_keydown_event_handler(e) {
        if (
            e.keyCode == 8      // backspace
            || e.keyCode == 27  // esc
            || e.keyCode == 88  // x
        ) {
            chardinjs_stop();
        }
    }

    $body.on('chardinJs:start', function() {

        $(this).closest('html').addClass('chardinjs--open');
        // add click event to 'back' arrow
        $(this).find('.chardinjs--stop').one('click', chardinjs_stop);
        // add keypress event to 'esc', 'x', and 'backspace' keys
        $(document).one('keydown', chardinjs_stop_keydown_event_handler);
        // add focus to overlay
        $(this).find('.chardinjs-overlay').attr('role', 'dialog').attr('tabindex', -1).focus();
        // override the default opacity
        setTimeout(function() { $('.chardinjs-overlay').css('opacity', .95); }, 30);
    });

    $body.on('chardinJs:stop', function() {

        $(this).closest('html').removeClass('chardinjs--open');
        // return focus to element that triggered the overlay
        // have to wait until the overlay is disappeared
        setTimeout(function() {
            $body.find('.' + focus_on_close_class).focus().removeClass(focus_on_close_class);
        }, 450);

        $(document).off('keydown');
    });

    /*
    listen to focus events.
    if chardin-js is activated but the focused
    element is not inside of the overlay, then
    we reset the focus to the top of the overlay
     */
    $(document).on("focus", "a, button", function(e) {
        var $overlay = $body.find('.chardinjs-overlay');

        if ($overlay.length && !($(this).parents('.chardinjs-helper-layer, #site-logo').length)) {
            e.stopPropagation();
            $overlay.focus();
        }
    });
});
