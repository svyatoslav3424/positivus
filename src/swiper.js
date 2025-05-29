const swiper1 = new Swiper(".swiper-1", {
  slidesPerView: 6,
  loop: true,
  freeMode: true,
  speed: 1200,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 2,
  // loop: true,
  freeMode: true,

  speed: 4000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
