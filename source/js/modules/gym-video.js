const background = document.querySelector('.gym__video-background');
const button = document.querySelector('.gym__video-button');
const iframe = document.querySelector('.gym__iframe');

const initVideo = () => {
  if (background && button && iframe) {
    background.classList.add('gym__video-background-js');
    button.classList.add('gym__video-button-js');
    iframe.classList.add('gym__iframe-js');

    button.addEventListener('click', onButtonClick);
  }
};

function onButtonClick() {
  background.classList.remove('gym__video-background-js');
  button.classList.remove('gym__video-button-js');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  iframe.classList.remove('gym__iframe-js');

  button.removeEventListener('click', onButtonClick);
}

export {initVideo};
