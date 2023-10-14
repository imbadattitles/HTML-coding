// Найти все заголовки табов по дата атрибуту
const tabHeaders2 = document.querySelectorAll('[data-tab2]');
// Нашли все контент боксы
const contentBoxes2 = document.querySelectorAll('[data-tab-content2]');
// и повесить на них клик
tabHeaders2.forEach((theItem) => {
  theItem.addEventListener('click', (event) => {
    // выключить все кнопки
    tabHeaders2.forEach((tabItem) => {
      tabItem.classList.remove('tab_active');
    });
    // у обьекта event есть ключ target (вложенный обьект) и он будет html элементом как при querySelector
    event.target.classList.add('tab_active');
    // скрыть все блоки с контентом
    contentBoxes2.forEach((contentItem) => {
      contentItem.classList.add('hidden');
    });
    // получить значение data-tab у кликнутого таба
    const id = event.target.dataset.tab2;
    // обратится к контенту у которого data-tab-content = data-tab у таргета
    try {
      document
        .querySelector(`[data-tab-content2=${id}]`)
        .classList.remove('hidden');
    } catch (error) {
      console.log('Нет такого селектора, Уася!');
      console.log(error);
    }
  });
});