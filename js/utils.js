jQuery(function( $ ) {

    $.extend({
        Utils : (function () {

            //feels like this is bad practice :/
            var mobile_breakpoint = 619;

            var is_mobile = function () {

                return window.innerWidth <= mobile_breakpoint;
            };

            var mobile = is_mobile();

            var if_mobile_changed = function() {

                if ( mobile === is_mobile() )
                    return false;

                mobile = is_mobile();
                return true;
            };

            return {
                is_mobile: is_mobile,
                if_mobile_changed: if_mobile_changed
            };

        })
    });

});