// -------для оболочки врапер не знаю зачем добавляется класс c jquary
// $('.wrapper').addClass('loaded');

// ------------------------- js код на меню бургер 
(() => {
	window.onload = () => {
		let menu__icon = document.querySelector('.menu__icon');
		let menu__body = document.querySelector('.menu__body');
		let body = document.querySelector('body');
		let header = document.querySelector('.header');
		menu__icon.addEventListener('click', (e) => {
			menu__icon.classList.toggle('active');
			menu__body.classList.toggle('active');
			body.classList.toggle('lock');
			header.classList.toggle('active');
		})
	}
})();
// добавляет классу img подкласс background и описанными манипуляциями в текстовом документе делаем фоновое изображение (резиновое)
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
// слайдер js jquary
if($('.slider__body').length>0){
	$('.slider__body').slick({
		// autoplay: true,
		// infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShown:1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-next"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}

// проверка на корректный емаил (из видео https://www.youtube.com/watch?v=PqTrhfjLQBI)

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error===0) {
		} else {
			
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req')

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input,checked === false) {
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
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error')
	}
	// функция теста email
	function emailTest(input) {
		return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(input.value);
	}
});


// let reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

// let input = document.querySelector('.email')

// ---снизу код, который кто-то указал в коментариях типа он правильнее

// async function ibg() {
// 	const images = document.querySelectorAll(".ibg");
// 	if (images.length > 0) {
// 		await Promise.all(
// 			await Object.keys(images).map(async (i) => {
// 				if (images[i].querySelector('img')) {
// 					images[i].style.backgroundImage = `url(${images[i].querySelector('img').getAttribute('src')})`;
// 				}
// 			})
// 		)
// 	}
// }

// ibg().then(() => {
// 	console.log('images BG added correctly')
// }).catch(err => {
// 	console.log('Error: ', err)
// 	throw err;
// })


