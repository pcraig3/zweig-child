jQuery(function( $ ){

	$(document).ready(function() {

		var offset = 0;

		var $admin_bar = $('#wpadminbar');

		if ( $admin_bar )
			offset = $admin_bar.height();
			
		/**
		 * using mahlihu's scroll-to-id plugin
		 *
		 * @see  http://manos.malihu.gr/page-scroll-to-id
		 */
		$("a[href^='#']").mPageScroll2id({
    		scrollSpeed: 300,
    		scrollEasing: "easeInOutQuad",
    		pageEndSmoothScroll: true,
    		offset: offset,
			onStart:function() {
				// add a 'clicked' class to the back_to_top button for the duration of the animation
				if(mPS2id.clicked.attr("href") === '#back_to_top') {
					mPS2id.clicked.parent().fadeOut(30);
					mPS2id.clicked.parent().addClass('clicked');
				}
			},
    		onComplete:function() {
    			//if we've clicked the 'search again?' link, clear the search bar and add focus
    			if ( mPS2id.target.attr("id") === "footer" )
        			clear_add_focus_footer_search();

				if(mPS2id.clicked.attr("href") === '#back_to_top') {
					mPS2id.clicked.parent().removeClass('clicked');
				}
    		}
		});

		/**
		 * pretty simple function clears value in footer search bar and adds focus.
		 */
		function clear_add_focus_footer_search(){

    		mPS2id.target.find('.search-field').val("").focus();
		}
	});
});
