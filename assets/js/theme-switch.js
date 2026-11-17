// デザイン切り替えスイッチ. <link data-theme="NN"> の media を付け替えて案を切り替え, 選んだ案を localStorage に覚える.
// 初回表示で覚えた案を有効にする処理は, HTML の head にある小さなスクリプトが担当する(ちらつき防止).
(function () {
  var links = document.querySelectorAll('link[data-theme]');
  var btns = document.querySelectorAll('[data-theme-btn]');
  if (!links.length) return;

  function mark(t) {
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-theme-btn') === t ? 'true' : 'false');
    });
  }

  function current() {
    for (var i = 0; i < links.length; i++) {
      // media 属性なし(空文字)か "all" のものが、いま使っているテーマ
      if (links[i].media === '' || links[i].media === 'all') return links[i].getAttribute('data-theme');
    }
    return '';
  }

  function select(t) {
    links.forEach(function (l) {
      l.media = l.getAttribute('data-theme') === t ? 'all' : 'not all';
    });
    mark(t);
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-theme-btn');
      select(t);
      try { localStorage.setItem('profile-theme', t); } catch (e) {}
    });
  });
  mark(current());
})();
