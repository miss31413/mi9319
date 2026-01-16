/* 繁體中文註解：
   此檔負責：
   1) 將每個有 data-bg 的 .swiper-slide 轉換成 inline background-image（以利被 clone 時保留）
   2) 初始化 Swiper
   3) 綁定滑鼠進出事件顯示/隱藏遮罩
*/
(function () {
  'use strict';

  function applyBg() {
    document.querySelectorAll('.swiper-slide').forEach(function (s) {
      var bg = s.getAttribute('data-bg');
      if (bg) s.style.backgroundImage = 'url(' + bg + ')';
    });
  }

  // 在初始化前先套一次背景（原始 slides）
  applyBg();

  // 初始化 Swiper
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });

  // 初始化後再套一次（確保 clone slide 也被套到背景）
  applyBg();

  // 使用事件代理綁定，避免重複綁定或 clone 導致失效
  $(document).on('mouseenter', '.swiper-slide', function () {
    $(this).find('.shadow').fadeIn();
  }).on('mouseleave', '.swiper-slide', function () {
    $(this).find('.shadow').fadeOut();
  });

})();
