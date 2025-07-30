const swiper3 = new Swiper(".swiper-3", {
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
    },
    1360: {
      slidesPerView: 2,
    },
  },

  slidesPerView: 2,
  // loop: true,
  freeMode: true,
  spaceBetween: 30,
  speed: 4000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});


