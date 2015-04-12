jQuery(function( $ ){

    $(document).ready(function() {
        
        //'click event handler on .chardinjs elements starts chardinjs
        $('body').find('.chardinjs').on('click', function(e){

            $('body').chardinJs('start');
            e.preventDefault();
        })
    });
});
