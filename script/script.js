"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		// 		// formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

		// 	}


		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');

			for (let index = 0; index < formReq.length; index++) {
				const input = formReq[index];
				formRemoveError(input);

				if (input.classList.contains('_email')) {
					if (emailTest(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value === '') {
						formAddError(input);
						error++;
					}
				}
			}
			return error;
		}
		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
		//Функция теста email
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
	}
});

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
};

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
	speed: 2000,
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