var Main = (function () {
	// variables
	var ctr = 0;

	// object
	return {
		init: function () {

			$('[data-toggle="slide"]').click(function(e) {
				e.stopPropagation();
				$('aside, .powered-by').toggleClass('slide');
				$('.mobile-nav').toggleClass('move');
			});
			$('html, body').on('click', ':not(.mobile-nav a)', function() {
				$('aside, .powered-by').removeClass("slide");
				$('.mobile-nav').removeClass('move');
			});

		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
