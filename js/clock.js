/* 數字時鐘：每秒更新，格式可在 updateTime 內修改 */
(function () {
  'use strict';

  var clockEl = document.getElementById('clock');
  if (!clockEl || typeof Vue === 'undefined') {
    return; // 若頁面沒有時鐘或 Vue 未載入，就不要執行
  }

  var clock = new Vue({
    el: '#clock',
    data: {
      time: '',
      date: ''
    }
  });

  var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' +
      zeroPadding(cd.getMinutes(), 2) + ':' +
      zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' +
      zeroPadding(cd.getMonth() + 1, 2) + '-' +
      zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
  }

  updateTime();
  setInterval(updateTime, 1000);
})();
