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

			Main.scroll();

		},

		scroll: function() {
			var constant = 200; // galing to sa Purple bar sa taas at Blue bar sa baba.
													// Plus yung margin-top(na 20px) ng Blue bar.
													// Hindi kase ma-access yung ::before tsaka ::after na
													// pseudo selector sa jquery.
													// nagdagdag din ako 25px pa na allowance.

			var heads = $('.heads').outerHeight();
			var tails = $('.tails').outerHeight();
			var timeline = $('.timeline').outerHeight();

			$(window).on('load scroll', function() {
				if ( $(this).width() > 991 ) {
					$('.scroll').height( $(this.top).height() - ( 160 + heads + tails + timeline ) );
				}
			});
		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
