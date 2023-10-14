// Найти все заголовки табов по дата атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');
// и повесить на них клик
tabHeaders.forEach((theItem) => {
  theItem.addEventListener('click', (event) => {
    // выключить все кнопки
    tabHeaders.forEach((tabItem) => {
      tabItem.classList.remove('tab_active');
    });
    // у обьекта event есть ключ target (вложенный обьект) и он будет html элементом как при querySelector
    event.target.classList.add('tab_active');
    // скрыть все блоки с контентом
    contentBoxes.forEach((contentItem) => {
      contentItem.classList.add('_hidden');
    });
    // получить значение data-tab у кликнутого таба
    const id = event.target.dataset.tab;
    // обратится к контенту у которого data-tab-content = data-tab у таргета
    try {
      document
        .querySelector(`[data-tab-content=${id}]`)
        .classList.remove('_hidden');
    } catch (error) {
      console.log('Нет такого селектора, Уася!');
      console.log(error);
    }
  });
});