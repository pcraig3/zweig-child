jQuery(function( $ ){

    var utils = $.Utils();
    $body = $('body');

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
        setTimeout(function() { $('.chardinjs-overlay').css('opacity', .95); }, 30);
        e.preventDefault();
    });

    function chardinjs_stop(e){
        $body.chardinJs('stop');
        e.preventDefault()
    }

    $body.on('chardinJs:start', function(){

        $(this).find('.chardinjs--stop').one('click', chardinjs_stop);
    });
});
