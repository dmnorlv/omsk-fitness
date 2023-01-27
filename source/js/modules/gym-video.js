const video = document.querySelector('.gym__video-container');
const background = document.querySelector('.gym__video-background');
const button = document.querySelector('.gym__video-button');

const initVideo = () => {
  let link = document.querySelector('.gym__link');
  if (background && button && link && video) {
    video.classList.add('gym__video-container-js');
    let id = parseMediaURL(link);

    button.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
    link.removeAttribute('href');
  }
};

function parseMediaURL(link) {
  return link.getAttribute('href').split('=').pop();
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('gym__iframe');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {initVideo};
