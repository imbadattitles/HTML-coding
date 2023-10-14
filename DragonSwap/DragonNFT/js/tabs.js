// Найти все заголовки табов по дата атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// console.log(tabHeaders)

// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');
// console.log(contentBoxes)

tabHeaders.forEach(function (item) {
	item.addEventListener('click', function (){
		// console.log(this);
		// console.log(contentBox);

		// 1. Найти все контентбоксы и скрыть (Уже нашли)
		contentBoxes.forEach(function (item) {
			item.classList.add('hidden');
		});

		// 2. Выбрать нужный бокс и показать его

		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('hidden');
		tabHeaders.classList.add('hidden');
	})
})