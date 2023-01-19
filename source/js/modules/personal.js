import Swiper, {Navigation} from 'swiper';
const slider = new Swiper('.personal__swiper', {
  modules: [Navigation],
  rewind: true,
  spaceBetween: 40,
  slidesPerView: 1,
  navigation: {
    nextEl: '.personal__button-next',
    prevEl: '.personal__button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


export {slider};
