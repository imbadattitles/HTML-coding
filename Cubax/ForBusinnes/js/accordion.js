const headers = document.querySelectorAll("[data-name='question-title']");

headers.forEach(function (item) {
		item.addEventListener('click', function (){
			const plus = item.querySelector('.QuestAnswers__quest-plus')
			const plusIcon = item.querySelector('.QuestAnswers__quest-plus-icon');
			this.nextElementSibling.classList.toggle('_hidden');
			this.classList.toggle('QuestAnswers__quest_active');
			plus.classList.toggle('QuestAnswers__quest-plus_active');
			plusIcon.classList.toggle('QuestAnswers__quest-plus-icon_active');
		})
});