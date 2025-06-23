const swiper1 = new Swiper(".swiper-1", {
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    380: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },

  loop: true,
  freeMode: true,
  speed: 1200,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper(".swiper-2", {
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
