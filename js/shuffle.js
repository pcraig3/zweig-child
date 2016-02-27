jQuery(function( $ ){

    var Shuffle = (function ( list_class ) {
        //set to true the first time we shuffle a list
        var shuffled = false;

        //grab the body for slight performance improvements
        var $body = $('body');

        var shuffle_success_class = 'pc3-shuffle-shuffled';
        var shuffle_error_class = 'pc3-shuffle-error';
        var shuffle_onclick_class = 'pc3-shuffle-onclick';
        var shuffle_not_displayed_class = 'pc3-shuffle-not-displayed';

        /**
         * return true if all children of input element are 'li' elements.
         * else false.
         *
         * @param $list         element with 'li' elements as children
         * @returns {boolean}   true if all children of $list are 'li' elements
         * @private
         */
        var _is_list_contains_only_list_items = function( $list ) {

            return $list.children().length === $list.children('li').length
        };

        /**
         * function returns either a valid list element or a null value
         *
         * @param list_class    class of the element we hope is a valid list
         * @returns obj | null
         * @private
         */
        var _return_valid_list_element_or_null = function( list_class ) {

            var $list = $body.find( list_class );

            if( $list.length > 0 ) {
                if (_is_list_contains_only_list_items($list))
                    return $list;
                else
                    //sort of a hokey idea to add a class on failure
                    $list.addClass(shuffle_error_class);
            }

            return null;
        };

        var $list = _return_valid_list_element_or_null( list_class );

        /**
         * Take a list (presumed to contain 'li' elements), detach
         * them all, and then reattach them in a random order.
         *
         * @param $list     element with 'li' elements as children
         * @private
         */
        var _shuffle_list_items = function($list) {

            var detached = [];

            //store detached list items in array
            $list.children('li').each(function( index ) {

                detached.push($(this).detach());
            });

            while( detached.length > 0 ) {

                //return a random number between 0 and array length
                var index_to_remove = Math.floor(Math.random() * detached.length);

                $list.append( detached.splice(index_to_remove, 1) )
            }
        };

        /**
         * i.   if list is valid, list items are shuffled.
         * ii.   add either 'shuffled' or 'incompatible' class to element in question
         */
        var shuffle = function () {

            if( ! $list )
                return false;

            _shuffle_list_items($list);
            $list.addClass(shuffle_success_class);

            if( ! shuffled )
                _show_after_successful_shuffle();

            return (shuffled = true);
        };

        /**
         * Pretty specific method looks for the 'shuffle_success_class', and
         * if found, removes the 'not_displayed' class.
         * Theoretically, this reveals some content.
         * @private
         */
        var _show_after_successful_shuffle = function() {

            var $shuffled = $body.find('.' + shuffle_success_class);

            if( ! $shuffled.length )
                return;

            $body.find('.' + shuffle_not_displayed_class).removeClass(shuffle_not_displayed_class);
        };

        var activate_onclick = function() {

            $body.find('.' + shuffle_onclick_class).on('click', function() {

                shuffle();
                return false;
            });
        };


        return {

            shuffle: shuffle,
            activate_onclick: activate_onclick
        };

    })('.pc3-shuffle');

    $( document ).ready( function() {

        //look for a class, and if its immediate children are list items shuffle them
        Shuffle.shuffle();
        Shuffle.activate_onclick();
    });
});
