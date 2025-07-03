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



  window.addEventListener('load', () => {
    // 各文字にランダムな方向を設定
    document.querySelectorAll('.letter').forEach(letter => {
      letter.style.setProperty('--rand-x', Math.random());
      letter.style.setProperty('--rand-y', Math.random());
    });

    // 3秒後にコンテンツ表示
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 3000);// 3秒後にコンテンツ表示
  });



