"use strict"

// форма на главной странице
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
				window.location.href = 'gratitude.html';
				// alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

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

// форма в попапах
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form-p');
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
				window.location.href = 'gratitude.html';
				// alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req-p');

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
const menuLinks = document.querySelectorAll('a[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Меню бургер
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header-small');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

// слайдер главный блок
new Swiper('.first-slider__body', {
	navigation: {
		nextEl: '.first-slider__next',
		prevEl: '.first-slider__prev'
	},
	pagination: {
		el: '.first-slider__bullets',
		clickable: true,
	},
	slidesPerView: 1,
	speed: 2200,
	loop: true,
	centeredSlide: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
});

// слайдер swiper галерея
new Swiper('.gallary', {
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	speed: 18000,
	loop: true,
	// Responsive breakpoints: when window width is >= 320px (mobile first)
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 15,
			autoplay: false,
			freeMode: {
				enabled: true,
				momentum: true
			}
		},
		600: {
			slidesPerView: 1.2,
			spaceBetween: 15,
			freeMode: {
				enabled: true,
				momentum: false
			}
		},
		870: {
			slidesPerView: 2.2,
			spaceBetween: 30
		}
	},
});

// слайдер каталог
new Swiper('.catalog__block', {
	navigation: {
		nextEl: '.catalog__next',
		prevEl: '.catalog__prev'
	},
	pagination: {
		el: '.catalog__bullets',
		clickable: true,
	},
	speed: 2000,
	loop: true,
	effect: 'flip',
	flipEffect: {
		slideShadows: false,
	},

});

// аккордеон день#
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