'use strict';



(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__row');
  const menuCloseItem = document.querySelector('.header_nav-close');
  const menuLinks = document.querySelectorAll('.header__item');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__row_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__row_active');
  });
  if (window.innerWidth < 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__row_active');
      });
    }
  }
})();

// parallax

window.onload = (function () {
  // глобальный коэффициент смещения
  const parallaxK = 1;
  // коэффициенты для кубов
  const kForCubes = [7, 5, 3, 2.5, 2, 0.2, 0];

  // контейнер с кубами
  const $cubesContainer = document.querySelector('.offer__images');
  // координаты его центра
  const cubesContainerCenterX = $cubesContainer.offsetWidth / 2;
  const cubesContainerCenterY = $cubesContainer.offsetHeight / 2;

  // отложенный запуск
  setTimeout(() => {
    console.log('started');
    // следим за курсором
    document.body.addEventListener('mousemove', (event) => {
      // координаты курсора
      const cursorX = event.pageX;
      const cursorY = event.pageY;
      // разница между курсором и центром
      const dx = cubesContainerCenterX - cursorX;
      const dy = cubesContainerCenterY - cursorY;

      console.log(dx, dy);

      // пробегаемся по кубикам
      for (let id = 1; id <= 7; id++) {
        const cubeClassName = '.letai' + id;
        const $cubeElement = document.querySelector(cubeClassName);
        // определяем величину смещения
        const k = kForCubes[id - 1] * parallaxK * 0.01;
        const shiftX = Math.round(dx * k);
        const shiftY = Math.round(dy * k);
        // применяем смещение
        $cubeElement.style.cssText = `transform: translate(${shiftX}px, ${shiftY}px) !important; transition: transform 0s`;
      }
    });
  }, 2000);

  // const content = document.querySelector('.parallax_container');
  // const cube1 = document.querySelector('.blabla1');
  // const mountains = document.querySelector('.blabla2');
  // const human = document.querySelector('.blabla3');

  /// Коэффициенты
  // const forСube1 = 40;
  // const forMountains = 20;
  // const forHuman = 10;

  /// Скорость анимации

  // const speed = 0.05;

  // Обьявление переменных

  // let positionX = 0,
  //   positionY = 0;
  // let coordXprocent = 0,
  //   coordYprocent = 0;

  // function setMouseParallaxStyle() {
  //   const distX = coordXprocent - positionX;
  //   const distY = coordYprocent - positionY;

  //   positionX = positionX + distX * speed;
  //   positionY = positionY + distY * speed;

  // Передаём стили
  // cube1.style.cssText =
  //   'transform: translate(${positionX / forCube1}%,${positionY / forCube1}%);';
  // mountains.style.cssText =
  //   'transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);';
  // human.style.cssText =
  //   'transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);';

  // requestAnimationFrame(setMouseParallaxStyle);
  // }
  // setMouseParallaxStyle();

  // document
  //   .querySelector('.cover-img')
  //   .addEventListener('mousemove', function (e) {
  //     console.log(e.pageX);
  //     // Получение ширины и высоты блока
  //     const parallaxWidth = parallax.offsetWidth;
  //     const parallaxHeight = parallax.offsetHeight;

  //     // Ноль по середине
  //     const coordX = e.pageX - parallaxWidth / 2;
  //     const coordY = e.pageY - parallaxHeight / 2;

  //     // Получаем проценты
  //     coordXprocent = (coordX / parallaxWidth) * 100;
  //     coordYprocent = (coordY / parallaxHeight) * 100;
  //   });
  // }
})(
  // Burger handler

  (function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_row');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_item');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header_row-active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header_row-active');
    });
    if (window.innerWidth < 768) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('header_row-active');
        });
      }
    }
  })()
);
