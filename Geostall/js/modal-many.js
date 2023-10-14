//Находим нужные элементы: кнопка модалки, модалка, кнопка закрыть
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');




// кнопки открыть модалку
modalButtons.forEach(function (item) {
	item.addEventListener('click', function (){
		const modalid = this.dataset.modalButton;

		const modal = document.querySelector('#' + modalid);

		modal.classList.remove('_hidden');




		//делаем внутри некликабельно, передавать клики наверх к родителю

		modal.querySelector('.WithoutFurnish__findyour-circle3').addEventListener('click', function (event) {
			event.stopPropagation();
		});

	})
})




// кнопки закрыть модалку
modalClosebuttons.forEach(function (item) {
	item.addEventListener('click', function() {
		const modal = this.closest('[data-modal]');
		modal.classList.add('_hidden')
	})
})





// Закрыть по фейду
allModals.forEach(function (item) {
	item.addEventListener('click', function() {
		this.classList.add('_hidden')

	})
})