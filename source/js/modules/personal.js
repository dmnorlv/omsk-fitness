import Swiper, {Navigation} from 'swiper';
import {isEnterKey} from '../utils/utils';


const initBackgrounds = () => {
  const slides = document.querySelectorAll('.personal__swiper-slide');

  let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.target.classList.contains('visible')) {
        mutation.target.addEventListener('mouseenter', () => {
          const background = window.getComputedStyle(mutation.target).backgroundImage.match(/url.*/);

          mutation.target.style.backgroundImage = `linear-gradient(90deg, rgba(16, 38, 84, 1) 0%, rgba(16, 38, 84, 0.89) 0%), ${background[0]}`;
        });

        mutation.target.addEventListener('mouseleave', () => {
          if (!mutation.target.classList.contains('focused')) {
            const background = window.getComputedStyle(mutation.target).backgroundImage.match(/url.*/);

            mutation.target.style.backgroundImage = `${background[0]}`;
          }
        });

        mutation.target.onfocus = function () {
          const background = window.getComputedStyle(mutation.target).backgroundImage.match(/url.*/);
          mutation.target.classList.add('focused');
          mutation.target.style.backgroundImage = `linear-gradient(90deg, rgba(16, 38, 84, 1) 0%, rgba(16, 38, 84, 0.89) 0%), ${background[0]}`;
        };

        mutation.target.onblur = function () {
          const background = window.getComputedStyle(mutation.target).backgroundImage.match(/url.*/);
          mutation.target.classList.remove('focused');
          mutation.target.style.backgroundImage = `${background[0]}`;
        };
      }
    });
  });
  let config = {attributes: true};

  slides.forEach((slide) => {
    observer.observe(slide, config);
  });
};


const buttonPrev = document.querySelector('.personal__button-prev');
const buttonNext = document.querySelector('.personal__button-next');

const initTranersSlider = () => {
  if (buttonPrev && buttonNext) {
    const slider = new Swiper('.personal__swiper', {
      modules: [Navigation],
      rewind: true,
      spaceBetween: 40,
      slidesPerView: 1,
      initialSlide: 2,
      navigation: {
        nextEl: '.personal__button-next',
        prevEl: '.personal__button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    buttonPrev.addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        slider.slidePrev();
        buttonPrev.classList.add('slider-btn-active');
      }
    });

    buttonPrev.addEventListener('keyup', (evt) => {
      if (isEnterKey(evt)) {
        buttonPrev.classList.remove('slider-btn-active');
      }
    });

    buttonNext.addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        slider.slideNext();
        buttonNext.classList.add('slider-btn-active');
      }
    });

    buttonNext.addEventListener('keyup', (evt) => {
      if (isEnterKey(evt)) {
        buttonNext.classList.remove('slider-btn-active');
      }
    });
  }
};

export {initTranersSlider, initBackgrounds};
