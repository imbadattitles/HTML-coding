const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
		item.addEventListener('click', function (){
			const arrow = item.querySelector('.button__arrow');
			this.nextElementSibling.classList.toggle('hidden');
			arrow.classList.toggle('arrow_active')
		})
});