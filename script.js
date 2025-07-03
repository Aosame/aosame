// script.js
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.picture-bg');
  let current = 0;

  function changeImage() {
    images[current].classList.remove('current');
    current = (current + 1) % images.length;
    images[current].classList.add('current');
  }

  setInterval(changeImage, 4000);
});
