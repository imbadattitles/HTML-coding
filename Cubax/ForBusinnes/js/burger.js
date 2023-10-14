  (function () {
    const burgerItem = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-header-row]');
    const menuCloseItem = document.querySelector('[data-menu-close]');
    const menuLinks = document.querySelectorAll('[data-menu-item]');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header__row_active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__row_active');
    });
    if (window.innerWidth < 1180) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('header__row_active');
        });
      }
    }
  })()
;
