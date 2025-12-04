// 简单的中英切换逻辑（在所有页面统一引入）
(function(){
  function setLang(lang) {
    var isEn = (lang === 'en');
    // 切换 visible
    document.querySelectorAll('.zh').forEach(el => el.style.display = isEn ? 'none' : '');
    document.querySelectorAll('.en').forEach(el => el.style.display = isEn ? '' : 'none');
    // 切换 active 按钮样式（页面可能有多个 lang 按钮）
    document.querySelectorAll('.lang').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#btn-' + (isEn ? 'en' : 'zh')).forEach(b=>b.classList.add('active'));
    // 保存偏好
    try { localStorage.setItem('site_lang', lang); } catch(e){}
  }

  // 绑定按钮
  document.addEventListener('click', function(e){
    if (e.target && e.target.id === 'btn-en') { setLang('en'); }
    if (e.target && e.target.id === 'btn-zh') { setLang('zh'); }
  });

  // 初始化（尝试从 localStorage 读取）
  var pref = 'zh';
  try { var s = localStorage.getItem('site_lang'); if (s) pref = s; } catch(e){}
  setLang(pref);
})();
