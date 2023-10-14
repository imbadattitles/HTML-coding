  (function () {
    const burgerItem = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuCloseItem = document.querySelector('[data-menu-close]');
    const menuLinks = document.querySelectorAll('[data-menu-item]');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('menu_active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('menu_active');
    });
    if (window.innerWidth < 3000) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('menu_active');
        });
      }
    }
  })()
;
