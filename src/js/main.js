import "./_vendor";
import "./_vars";
import "./_functions";
import "./_components";

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper(".hero__slider-main", {
  loop: true,
  lazy: true,
  // If we need pagination
  pagination: {
    el: ".main-slider__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__button-next",
    prevEl: ".main-slider__button-prev",
  },
});

const sliderSale = new Swiper(".sale-slider", {
  loop: true,
  lazy: true,


  // Navigation arrows
  navigation: {
    nextEl: ".sale-slider__button-next",
    prevEl: ".sale-slider__button-prev",
  },
});
const news = new Swiper(".news-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  lazy: true,


  // Navigation arrows
  navigation: {
    nextEl: ".news-slider__button-next",
    prevEl: ".news-slider__button-prev",
  },
});
