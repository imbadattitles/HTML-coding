'use strict';

$(function () {
  let $slider1 = $('.slider1');
  let $slider2 = $('.slider2');
  $slider1.owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: true,
    navText: [
      '<img src="../img/svg/carousel1__arrow-left.svg">',
      '<img src="../img/svg/carousel1__arrow-right.svg">',
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
    margin: 20,
    nav: true,
    dots: false,
    navText: [
      '<img src="../img/svg/carousel1__arrow-left.svg">',
      '<img src="../img/svg/carousel1__arrow-right.svg">',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
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
