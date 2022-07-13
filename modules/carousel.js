import Swiper from "swiper";

const MY_SWIPER = new Swiper(".swiper-container", {
  // Default parameters
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 450px
    450: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
    1670: {
      slidesPerView: 4,
    },
  },
});
export default MY_SWIPER;
