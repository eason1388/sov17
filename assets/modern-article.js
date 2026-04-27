/* Modern article enhancer for sov17: lifestyle hero + light reading layout */
(function(){
  'use strict';

  if(window.__sov17ModernArticleLoaded) return;
  window.__sov17ModernArticleLoaded = true;

  var COVERS = [
    'assets/photos/cover-01-desk.jpg',
    'assets/photos/cover-02-temple.jpg',
    'assets/photos/cover-03-talisman.jpg',
    'assets/photos/cover-04-mountain.jpg',
    'assets/photos/cover-05-meditation.jpg',
    'assets/photos/cover-06-tea.jpg',
    'assets/photos/cover-07-night.jpg',
    'assets/photos/cover-08-chime.jpg',
    'assets/photos/cover-09.jpg',
    'assets/photos/cover-10.jpg',
    'assets/photos/cover-11.jpg',
    'assets/photos/cover-12.jpg',
    'assets/photos/cover-13.jpg',
    'assets/photos/cover-14.jpg',
    'assets/photos/cover-15.jpg',
    'assets/photos/cover-16.jpg',
    'assets/photos/cover-17.jpg',
    'assets/photos/cover-18.jpg',
    'assets/photos/cover-19.jpg',
    'assets/photos/cover-20.jpg',
    'assets/photos/cover-21.jpg',
    'assets/photos/cover-22.jpg',
    'assets/photos/cover-23.jpg',
    'assets/photos/cover-24.jpg',
    'assets/photos/cover-25.jpg',
    'assets/photos/cover-26.jpg',
    'assets/photos/cover-27.jpg',
    'assets/photos/cover-28.jpg',
    'assets/photos/cover-29.jpg',
    'assets/photos/cover-30.jpg',
    'assets/photos/cover-31.jpg',
    'assets/photos/cover-32.jpg',
    'assets/photos/cover-33.jpg',
    'assets/photos/cover-34.jpg',
    'assets/photos/cover-35.jpg',
    'assets/photos/cover-36.jpg',
    'assets/photos/cover-37.jpg',
    'assets/photos/cover-38.jpg',
    'assets/photos/cover-39.jpg',
    'assets/photos/cover-40.jpg'
  ];

  function hash32(str){
    var h = 2166136261;
    for(var i=0;i<str.length;i++){
      h ^= str.charCodeAt(i);
      h += (h<<1) + (h<<4) + (h<<7) + (h<<8) + (h<<24);
    }
    return (h>>>0);
  }

  function injectStyle(){
    if(document.getElementById('sov17-modern-article-style')) return;
    var st = document.createElement('style');
    st.id = 'sov17-modern-article-style';
    st.textContent =
      ':root{' +
        '--bg:#fbf6ee;--bg2:#f4efe6;--ink:#1f2a44;--muted:#5b667f;--line:rgba(31,42,68,.12);' +
        '--gold:#b18a2a;--gold2:#d9b45a;--teal:#1f8f95;--card:#ffffff;' +
        '--shadow:0 18px 50px rgba(31,42,68,.10);--shadow2:0 26px 80px rgba(31,42,68,.14);' +
        '--radius:22px' +
      '}' +
      'body{' +
        'margin:0;font-family:\"Noto Sans TC\",sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;' +
        'background:radial-gradient(circle at 12% 10%, rgba(31,143,149,.10), transparent 42%),' +
                 'radial-gradient(circle at 88% 12%, rgba(177,138,42,.10), transparent 45%),' +
                 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 72%, var(--bg) 100%);' +
        'line-height:1.9;overflow-x:hidden' +
      '}' +
      'a{color:inherit}' +
      '.nav{background:rgba(251,246,238,.86)!important;backdrop-filter:blur(12px);border-bottom:1px solid var(--line)!important}' +
      '.navlinks a{color:rgba(31,42,68,.82)!important;font-weight:700}' +
      '.navlinks a:hover{color:var(--teal)!important}' +
      '.navlinks .cta{border:1px solid rgba(31,143,149,.30)!important;background:rgba(31,143,149,.08)!important;color:var(--teal)!important}' +
      '.logo{color:var(--gold)!important;letter-spacing:.14em}' +
      '.logo span{color:var(--teal)!important}' +
      '.hero{padding:58px 0 22px!important}' +
      '.eyebrow{border:1px solid rgba(177,138,42,.25)!important;background:rgba(255,255,255,.55)!important;color:var(--gold)!important}' +
      'h1{color:var(--ink)!important;letter-spacing:.08em}' +
      '.lead{color:rgba(31,42,68,.72)!important}' +
      '.meta{color:rgba(31,42,68,.62)!important}' +
      '.hero-media{margin-top:18px;border-radius:calc(var(--radius) + 10px);overflow:hidden;border:1px solid rgba(31,42,68,.10);background:rgba(255,255,255,.70);box-shadow:var(--shadow2)}' +
      '.hero-media img{display:block;width:100%;height:auto}' +
      '.article{background:rgba(255,255,255,.74)!important;border:1px solid var(--line)!important;border-radius:calc(var(--radius) + 6px)!important;box-shadow:var(--shadow2)!important;padding:34px 26px 40px!important}' +
      '.article::before{display:none!important}' +
      '.article h2,.article h3{color:rgba(31,42,68,.92)!important}' +
      '.article h2{letter-spacing:.08em}' +
      '.article p,.article li{color:rgba(31,42,68,.82)!important}' +
      '.article blockquote{border-left:4px solid rgba(177,138,42,.55)!important;background:rgba(177,138,42,.08)!important;color:rgba(31,42,68,.82)!important}' +
      '.article hr{border-top:1px dashed rgba(31,42,68,.16)!important}' +
      '.quote-classic{background:rgba(31,143,149,.08)!important;border:1px solid rgba(31,143,149,.22)!important;color:rgba(31,42,68,.86)!important}' +
      'img{max-width:100%;height:auto}' +
      '.page-cta .page-cta-card{background:rgba(255,255,255,.72)!important;border:1px solid var(--line)!important;box-shadow:var(--shadow2)!important}' +
      '.footer-shell{background:transparent!important;border-top:1px solid var(--line)!important}' +
      '.footer-links a{color:rgba(31,42,68,.78)!important}';
    document.head.appendChild(st);
  }

  function ensureHeroImage(){
    var hero = document.querySelector('.hero');
    if(!hero) return;
    if(hero.querySelector('.hero-media')) return;

    var titleEl = document.querySelector('h1');
    var slug = (location.pathname.split('/').pop() || '') + '|' + (titleEl ? titleEl.textContent : '');
    var idx = hash32(slug) % COVERS.length;
    var src = COVERS[idx];

    var media = document.createElement('div');
    media.className = 'hero-media';
    var img = document.createElement('img');
    img.src = src;
    img.alt = '文章主視覺';
    img.loading = 'eager';
    media.appendChild(img);

    var meta = hero.querySelector('.meta');
    if(meta && meta.nextSibling){
      hero.insertBefore(media, meta.nextSibling);
    }else{
      hero.appendChild(media);
    }
  }

  function run(){
    if(!document.querySelector('.article')) return;
    injectStyle();
    ensureHeroImage();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', run, {once:true});
  }else{
    run();
  }
})();

