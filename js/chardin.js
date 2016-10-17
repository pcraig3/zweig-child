jQuery(function( $ ){

    var utils = $.Utils();
    $body = $('body');
    focus_on_close_class = 'chardinjs--focus-on-close';

    if( utils.is_mobile() ) {
        $body.addClass('is-mobile');
    }

    $(window).resize(function() {

        if ( utils.if_mobile_changed() ) {
            $body.toggleClass('is-mobile');
        }
    });

    // 'click' event handler on .chardinjs elements starts chardinjs
    $body.find('.chardinjs').on('click', function(e){

        $body.chardinJs('start');
        $(this).addClass(focus_on_close_class);
        setTimeout(function() { $('.chardinjs-overlay').css('opacity', .95); }, 30);
        e.preventDefault();
    });

    function chardinjs_stop(e){
        $body.chardinJs('stop');
        $body.find('.' + focus_on_close_class).removeClass(focus_on_close_class).focus();
        e.preventDefault();
    }

    $body.on('chardinJs:start', function(){

        $(this).find('.chardinjs--stop').one('click', chardinjs_stop);
        $(this).find('.chardinjs-overlay').attr('tabindex', -1).focus();
    });
});
