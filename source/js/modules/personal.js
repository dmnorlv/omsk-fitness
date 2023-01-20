import Swiper, {Navigation} from 'swiper';

const buttonPrev = document.querySelector('.personal__button-prev');
const buttonNext = document.querySelector('.personal__button-next');

const isSpaceKey = (evt) => evt.key === ' ';

const initSlider = () => {
  if (buttonPrev && buttonNext) {
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
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    buttonPrev.addEventListener('keydown', (evt) => {

      if (isSpaceKey(evt)) {
        slider.slidePrev();
        buttonPrev.classList.add('personal__button-active');
      }
    });

    buttonPrev.addEventListener('keyup', (evt) => {
      if (isSpaceKey(evt)) {
        buttonPrev.classList.remove('personal__button-active');
      }
    });

    buttonNext.addEventListener('keydown', (evt) => {

      if (isSpaceKey(evt)) {
        slider.slideNext();
        buttonNext.classList.add('personal__button-active');
      }
    });

    buttonNext.addEventListener('keyup', (evt) => {
      if (isSpaceKey(evt)) {
        buttonNext.classList.remove('personal__button-active');
      }
    });
  }
};

export {initSlider};

