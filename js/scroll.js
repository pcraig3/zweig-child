jQuery(function( $ ){

	$(document).ready(function() {
			
		/**
		 * using mahlihu's scroll-to-id plugin
		 *
		 * @see  http://manos.malihu.gr/page-scroll-to-id
		 */
		$("a[href^='#']").mPageScroll2id({
    		scrollSpeed: 300,
    		scrollEasing: "easeInOutQuad",
    		pageEndSmoothScroll: true,
    		
    		onComplete:function(){

    			//if we've clicked the 'search again?' link, clear the search bar and add focus
    			if ( mPS2id.target.attr("id") === "footer" )
        			clear_add_focus_footer_search();
    		},
		});

		/**
		 * pretty simple function clears value in footer search bar and adds focus.
		 */
		function clear_add_focus_footer_search(){

    		mPS2id.target.find('.search-field').val("").focus();
		}


	});
});
