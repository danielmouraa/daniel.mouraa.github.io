(function ($) {
	$(document).ready(function () {
		app.init();
	});

	var app = {
		init: function () {
			this.accessibility();
			this.lightbox();
			this.scrollTo();
		},

		/**
		 * Accessibility functions
		 *
		 */
		accessibility: function () {
			// High contrast
			$('#high-contrast-btn').click(function (e) {
				e.preventDefault();
				var highContrast = cookie('high-contrast');

				if (highContrast === 'on') {
					cookie('high-contrast', 'off');
					$('body').removeClass('high-contrast');
				} else {
					cookie('high-contrast', 'on');
					$('body').addClass('high-contrast');
				}
			})
		},

		/**
		 * Lightbox function
		 *
		 */

		lightbox: function () {
			$('.lightBoxVideoLink').simpleLightbox();
		},

		/**
		 * scrollTo function
		 *
		 */

		scrollTo: function () {
			$('.scrollTo').on('click', function(event) {
					var target = $(this.getAttribute('href'));
					if( target.length ) {
							event.preventDefault();
							$('html, body').stop().animate({
									scrollTop: target.offset().top
							}, 1000);
					}
			});
		}

	};
})(jQuery);