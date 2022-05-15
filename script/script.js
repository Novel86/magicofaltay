$(document).ready(function () {
	$('.first__utp-slider').slick({
		dots: true,
		speed: 1300,
		easing: 'ease-in-out',
		autoplay: true,
		autoplayspeed: 2000,
		pauseonfocus: false,
		draggable: false,
	});
});

$(document).ready(function () {
	$('.galary-slider').slick({
		dots: true,
		speed: 1300,
		easing: 'ease-in-out',
		autoplay: true,
		autoplayspeed: 2000,
		pauseonfocus: false,
		draggable: false,
	});
});

new Swiper('.gallary-slider', {
	slidesPerView: 2.2,
	spaceBetween: 30,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		// 480: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 30
		// },
		// when window width is >= 640px
		767: {
			slidesPerView: 2.2,
			spaceBetween: 30
		}
	},
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	speed: 6000,
	loop: true,

});

new Swiper('.gallary-revers', {
	slidesPerView: 2.2,
	spaceBetween: 30,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		// 480: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 30
		// },
		// when window width is >= 640px
		767: {
			slidesPerView: 2.2,
			spaceBetween: 30
		}
	},
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
		// reverseDirection: true
	},
	speed: 6000,
	loop: true
})