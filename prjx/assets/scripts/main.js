var Main = (function () {
	// variables
	var ctr = 0;
	// object
	return {
		init: function () {
			$(document).ready(function() {
			  // The slider being synced must be initialized first
			  $('#carousel').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    itemWidth: 210,
			    itemMargin: 5,
			    asNavFor: '#slider'
			  });

			  $('#slider').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    sync: "#carousel"
			  });
			});
		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
