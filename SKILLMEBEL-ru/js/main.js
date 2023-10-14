'use strict';


$(function () {
  let $slider1 = $('.slider1');
  let $slider2 = $('.slider2');
  $slider1.owlCarousel({
    loop: true,
    margin: 535,
    nav: true,
    dots: false,
    navText: [
      '<img src="img/svg/arrow-slider1.svg">',
      '<img src="img/svg/arrow-slider2.svg">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
    // onInitialized: function () {
    //   // setTimeout(() => {
    //   //   kek(1);
    //   // }, 200);
    // },
    // onChanged: function () {
    //   kek();
    // },
  });
  $slider2.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: [
      '<img src="img/svg/left-slider.svg">',
      '<img src="img/svg/right-slider.svg">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // $slider1.on('changed.owl.carousel', function (event) {
  //   // setTimeout(() => {
  //   //   kek(1);
  //   // }, 100);
  //   // kek(2);
  // });
  // $selector.on('initialized.owl.carousel', function (event) {
  //   alert(123);
  // kek();
  // });
});

let options = {
  threshold: [0.4],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.innerWidth >= 768) {
      if (window.pageYOffset > 500) {
        header.classList.add('header-active');
      } else {
        header.classList.remove('header-active');
      }
    }
  };
})();

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

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
})();
