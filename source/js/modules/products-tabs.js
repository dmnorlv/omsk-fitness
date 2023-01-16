const productsContainer = document.querySelector('.products__wrapper');
const tabsList = document.querySelector('.products__tabs');
const tabs = document.querySelectorAll('.products__tab-btn');
const subscriptionProducts = document.querySelectorAll('.products__list');

const monthList = 'products__list--month-1';
const halfYearList = 'products__list--month-6';
const yearList = 'products__list--month-12';

const isSpaceKey = (evt) => evt.key === ' ';
const isNotCurrentTab = (elem) => !elem.classList.contains('products__tab-btn-js-current');

const setCurrentTab = (elem) => {
  tabs.forEach((button) => {
    if (button.classList.contains('products__tab-btn-js-current')) {
      button.classList.remove('products__tab-btn-js-current');
    }
  });
  elem.classList.add('products__tab-btn-js-current');
};

const setCurrentList = (string) => {
  subscriptionProducts.forEach((list) => {
    if (!list.classList.contains(string)) {
      list.classList.add('products__list-js');
    } else {
      list.classList.remove('products__list-js');
    }
  });
};

const initTabs = () => {
  if (productsContainer && tabs && tabs && subscriptionProducts) {
    productsContainer.classList.add('products__wrapper-js');
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
  const target = evt.target;
  evt.preventDefault();
  if (target.classList.contains('products__tab-btn--month-1') && isNotCurrentTab(target)) {
    setCurrentTab(evt.target);
    setCurrentList(monthList);
  }
  if (target.classList.contains('products__tab-btn--month-6') && isNotCurrentTab(target)) {
    setCurrentTab(evt.target);
    setCurrentList(halfYearList);
  }
  if (target.classList.contains('products__tab-btn--month-12') && isNotCurrentTab(target)) {
    setCurrentTab(evt.target);
    setCurrentList(yearList);
  }
}

function onTabKeydown(evt) {
  if (isSpaceKey(evt)) {
    evt.preventDefault();
    evt.target.classList.add('products__tab-btn-js-active');
    changeContent(evt);
  }
}

function onTabKeyup(evt) {
  if (isSpaceKey(evt)) {
    evt.preventDefault();
    evt.target.classList.remove('products__tab-btn-js-active');
  }
}

export {initTabs};
