  (function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.first-row');
    const menuCloseItem = document.querySelector('.header__close');
    const menuLinks = document.querySelectorAll('.header__list');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('first-row-see');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('first-row-see');
    });
    if (window.innerWidth < 768) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('first-row-see');
        });
      }
    }
  })()
;
