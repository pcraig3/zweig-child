jQuery(function( $ ){

	$(document).ready(function() {
			
			// The default axis is 'y', but in this demo, I want to scroll both
			// You can modify any default like this
			//$.localScroll.defaults.axis = 'xy';
			
			/**
			 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
			 * also affect the >> and << links. I want every link in the page to scroll.
			 */
			
			var $offset_top = 0;

			if( $( 'body' ).hasClass('admin-bar') ) 
				var $offset_top = $('#wpadminbar').height();

			$.localScroll({
				target: 'body', // could be a selector or a jQuery object too.
				queue:true,
				duration:300,
				hash:true,
				//if we're administrators, this breaks.
				offset: {left: 0, top: - $offset_top },
				onBefore:function( e, anchor, $target ){
					// The 'this' is the settings object, can be modified
				},
				onAfter:function( anchor, settings ){
					// The 'this' contains the scrolled element (#content)
				}
			});
	});
});
