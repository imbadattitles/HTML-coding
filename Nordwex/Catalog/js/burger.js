  (function () {
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header__row2');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header__list');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header__active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__active');
    });
    if (window.innerWidth < 768) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('header__active');
        });
      }
    }
  })()
;
