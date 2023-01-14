const productsContainer = document.querySelector('.products__content-container');
const tabsList = document.querySelector('.products__tabs');
const tabs = document.querySelectorAll('.products__tab-btn');
const subscriptionProducts = document.querySelectorAll('.products__list');

const isEnterKey = (evt) => evt.key === 'Enter';

const initTabs = () => {
  if (productsContainer && tabs && tabs && subscriptionProducts) {
    productsContainer.classList.add('products__content-container-js');
    tabsList.classList.add('products__tabs-js');
    tabs.forEach((button) => {
      button.classList.add('products__tab-btn-js');
      if (button.classList.contains('products__tab-btn--month-1')) {
        button.classList.add('products__tab-btn-js-current');
      }
    });
    subscriptionProducts.forEach((list) => {
      if (!list.classList.contains('products__list--month-1')) {
        list.classList.add('products__list-js');
      }
    });
    tabs.forEach((button) => button.addEventListener('keydown', onTabKeydown));
    tabs.forEach((button) => button.addEventListener('keyup', onTabKeyup));
    tabs.forEach((button) => button.addEventListener('click', changeContent));
  }
};

function changeContent(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('products__tab-btn--month-1') && !evt.target.classList.contains('products__tab-btn-js-current')) {
    tabs.forEach((button) => {
      if (button.classList.contains('products__tab-btn-js-current')) {
        button.classList.remove('products__tab-btn-js-current');
      }
    });
    evt.target.classList.add('products__tab-btn-js-current');

    subscriptionProducts.forEach((list) => {
      if (!list.classList.contains('products__list--month-1')) {
        list.classList.add('products__list-js');
      } else {
        list.classList.remove('products__list-js');
      }
    });
  }
  if (evt.target.classList.contains('products__tab-btn--month-6') && !evt.target.classList.contains('products__tab-btn-js-current')) {
    tabs.forEach((button) => {
      if (button.classList.contains('products__tab-btn-js-current')) {
        button.classList.remove('products__tab-btn-js-current');
      }
    });
    evt.target.classList.add('products__tab-btn-js-current');

    subscriptionProducts.forEach((list) => {
      if (!list.classList.contains('products__list--month-6')) {
        list.classList.add('products__list-js');
      } else {
        list.classList.remove('products__list-js');
      }
    });
  }
  if (evt.target.classList.contains('products__tab-btn--month-12') && !evt.target.classList.contains('products__tab-btn-js-current')) {
    tabs.forEach((button) => {
      if (button.classList.contains('products__tab-btn-js-current')) {
        button.classList.remove('products__tab-btn-js-current');
      }
    });
    evt.target.classList.add('products__tab-btn-js-current');

    subscriptionProducts.forEach((list) => {
      if (!list.classList.contains('products__list--month-12')) {
        list.classList.add('products__list-js');
      } else {
        list.classList.remove('products__list-js');
      }
    });
  }
}

function onTabKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    evt.target.classList.add('products__tab-btn-js-active');
    changeContent(evt);
  }
}

function onTabKeyup(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    evt.target.classList.remove('products__tab-btn-js-active');
  }
}

export {initTabs};
