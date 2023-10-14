const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
		item.addEventListener('click', function (){
			const arrow = item.querySelector('.filtr__arrow');
			this.nextElementSibling.classList.toggle('hidden');
			this.classList.toggle('filtr_active');
			arrow.classList.toggle('arrow_active');
		})
});