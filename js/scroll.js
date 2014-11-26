jQuery(function( $ ){

	$(document).ready(function() {
			
		/* using mahlihu's scroll-to-id plugin	

			It's not really working on the search page 
			*/
		$("a[href^='#']").mPageScroll2id({
    		scrollSpeed: 1300,
    		scrollEasing: "easeInOutQuad",
    		pageEndSmoothScroll: true
		});
	});
});
