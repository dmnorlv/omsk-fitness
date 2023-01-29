const navigationList = document.querySelector('.page-header__nav-list');
const imageContainer = document.querySelector('.page-header__content-img-container');
const navigation = document.querySelector('.page-header__nav');


const initNav = () => {
  imageContainer.classList.add('page-header__content-img-container-js');

  if (navigationList.children.length > 1) {
    imageContainer.classList.remove('page-header__content-img-container-js');
    navigation.classList.add('page-header__nav-js');
  }
};

export {initNav};
