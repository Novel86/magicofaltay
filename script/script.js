"use strict"
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			// if (iconMenu.classList.contains('_active')) {
			// 	document.body.classList.remove('_lock');
			// 	iconMenu.classList.remove('_active');
			// 	menuBody.classList.remove('_active');
			// }

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu-small');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

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

new Swiper('.gallary', {
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

new Swiper('.catalog__block', {
	navigation: {
		nextEl: '.catalog__next',
		prevEl: '.catalog__prev'
	},
	pagination: {
		el: '.catalog__bullets',
		clickable: true,
		// dynamicBullets: true
	},
	speed: 3000,
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
	loop: true,
})

// слайдер аккордеон день#

$(document).ready(function () {
	$('.day__title').click(function (event) {
		// Аккордион
		// if ($('.description').hasClass('one')) {
		// 	$('.day__title').not($(this)).removeClass('active');
		// 	$('.day__content').not($(this).next()).slideUp(500);
		// }
		$(this).toggleClass('active').next().slideToggle(500);
	});
});