const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalAll = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]')

modalButtons.forEach(function (item){
	item.addEventListener('click', function(){
		const modalId = this.dataset.modalButton;
		console.log("dfd");
		const modal = document.querySelector('#' + modalId);

		modal.classList.remove('hidden');

		modal.querySelector('.modal-block').addEventListener('click', function (event){
			event.stopPropagation();
		});
	})
})

modalClose.forEach(function(item){
	item.addEventListener('click', function (){
		const modal = this.closest('[data-modal]');
		modal.classList.add('hidden')
	})
})

modalAll.forEach(function(item) {
	item.addEventListener('click', function() {
		this.classList.add('hidden')
	})
})