
const initLazyImg = () => {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll('.personal__list'));
  const personalCards = document.querySelectorAll('.personal__swiper-slide');

  if ('IntersectionObserver' in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          personalCards.forEach((card) => {
            card.classList.add('visible');
          });
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
};

export {initLazyImg};
