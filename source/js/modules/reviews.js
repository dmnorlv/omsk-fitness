import Swiper, {Navigation} from 'swiper';
import {isSpaceKey} from '../utils/utils';

const buttonPrev = document.querySelector('.reviews__button-prev');
const buttonNext = document.querySelector('.reviews__button-next');

const initReviewsSlider = () => {
  if (buttonPrev && buttonNext) {
    const slider = new Swiper('.reviews__swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });

    buttonPrev.addEventListener('keydown', (evt) => {

      if (isSpaceKey(evt)) {
        slider.slidePrev();
        buttonPrev.classList.add('slider-btn-active');
      }
    });

    buttonPrev.addEventListener('keyup', (evt) => {
      if (isSpaceKey(evt)) {
        buttonPrev.classList.remove('slider-btn-active');
      }
    });

    buttonNext.addEventListener('keydown', (evt) => {

      if (isSpaceKey(evt)) {
        slider.slideNext();
        buttonNext.classList.add('slider-btn-active');
      }
    });

    buttonNext.addEventListener('keyup', (evt) => {
      if (isSpaceKey(evt)) {
        buttonNext.classList.remove('slider-btn-active');
      }
    });
  }
};

export {initReviewsSlider};
