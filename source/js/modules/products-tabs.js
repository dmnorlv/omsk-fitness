const productsContainer = document.querySelector('.products__content-container');
const tabsList = document.querySelector('.products__tabs');
const tabs = document.querySelectorAll('.products__tab-btn');

const isEnterKey = (evt) => evt.key === 'Enter';

const initTabs = () => {
  if (productsContainer && tabs && tabs) {
    productsContainer.classList.add('products__content-container-js');
    tabsList.classList.add('products__tabs-js');
    tabs.forEach((button) => button.classList.add('products__tab-btn-js'));
    tabs.forEach((button) => button.addEventListener('keydown', onTabKeydown));
    tabs.forEach((button) => button.addEventListener('keyup', onTabKeyup));
  }
};

function onTabKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    evt.target.classList.add('products__tab-btn-js-active');

    if (evt.target.classList.contains('products__tab-btn--month-1')) {
      console.log(evt.target);
    }
    if (evt.target.classList.contains('products__tab-btn--month-6')) {
      console.log(evt.target);
    }
    if (evt.target.classList.contains('products__tab-btn--month-12')) {
      console.log(evt.target);
    }
  }
}

function onTabKeyup(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    evt.target.classList.remove('products__tab-btn-js-active');
    console.log('evt.target');
  }
}

export {initTabs};
