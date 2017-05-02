jQuery(function( $ ){

	$(document).ready(function() {

		const sweetScroll = new SweetScroll({
			trigger: 'a[href^="#"]',       		// Selector for trigger (must be a valid css selector)
			header: "#wpadminbar", 				// Selector for fixed header (must be a valid css selector)
			duration: 650,                 		// Specifies animation duration in integer
			// delay: 0,                       // Specifies timer for delaying the execution of the scroll in milliseconds
			easing: "easeOutExpo",         		// Specifies the pattern of easing
			// offset: 0,                      // Specifies the value to offset the scroll position in pixels
			// verticalScroll: true,           // Enable the vertical scroll
			// horizontalScroll: false,        // Enable the horizontal scroll
			// stopScroll: true,               // When fired wheel or touchstart events to stop scrolling
			// updateURL: false,               // Update the URL hash on after scroll
			// preventDefault: true,           // Cancels the container element click event
			// stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
            //
			// // Callbacks
			// initialized: null,
			beforeScroll: function(toScroll, trigger) {
				if (trigger && trigger.classList.contains("back-to-top__link")) {
					$(trigger).parent().fadeOut(30);
					$(trigger).parent().addClass('clicked');
				}

				//if we've clicked the 'search again?' link, clear the search bar and add focus
				if (trigger && trigger.getAttribute('href') == '#colophon') {
					$('.search-field').val("").focus();
				}
			},
			// afterScroll: null,
			// cancelScroll: null,
			completeScroll: function() {
				$(".back-to-top__link").parent().removeClass('clicked');
				$("body").focus();
			}
		});
	});
});
