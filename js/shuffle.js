jQuery(function( $ ){

    var Shuffle = (function () {

        //grab the body for slight performance improvements
        var $body = $('body');

        var shuffle_success_class = 'pc3-shuffle-shuffled';
        var shuffle_error_class = 'pc3-shuffle-error';
        var shuffle_not_displayed_class = 'pc3-shuffle-not-displayed';

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

        //make sure all children are list items

        /**
         * return true if all children of input element are 'li' elements.
         * else false.
         *
         * @param $list         element with 'li' elements as children
         * @returns {boolean}   true if all children of $list are 'li' elements
         * @private
         */
        var _is_list_contains_only_list_items = function($list) {

            return $list.children().length === $list.children('li').length
        };

        /**
         * driver for module.
         * i.   accepts a classname
         * ii.  searches the DOM for it
         * iii. confirm non-empty element whose children are all list items
         * iv.  shuffle those list items
         * v.   add either 'shuffled' or 'incompatible' class to element in question
         *
         * @param list_class    classname to search for
         */
        var shuffle = function (list_class) {

            var $list = $body.find(list_class);

            //if the element with this class doesn't exist, exit function
            if(! $list.length )
                return;

            if( _is_list_contains_only_list_items($list) ) {
                _shuffle_list_items($list);
                $list.addClass(shuffle_success_class);
            }

            //sort of a hokey idea to a class
            else
                $list.addClass(shuffle_error_class);
        };

        /**
         * Pretty specific method looks for the 'shuffle_success_class', and
         * if found, removes the 'not_displayed' class.
         * Theoretically, this reveals some content.
         */
        var show_after_successful_shuffle = function() {

            var $shuffled = $body.find('.' + shuffle_success_class);

            if( ! $shuffled.length )
                return;

            $body.find('.' + shuffle_not_displayed_class).removeClass(shuffle_not_displayed_class);
        };

        return {

            shuffle: shuffle,
            show_after_successful_shuffle: show_after_successful_shuffle
        };

    })();

    $( document ).ready( function() {

        //look for a class, and if its immediate children are list items shuffle them
        Shuffle.shuffle('.pc3-shuffle');
        Shuffle.show_after_successful_shuffle();
    });
});