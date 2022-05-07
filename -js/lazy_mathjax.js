(function(window, document) {
  function main() {
  var mj = document.createElement('script');
  mj.type = 'text/javascript';
  mj.async = true;
  mj.id = 'MathJax-script';
  mj.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(mj);
  }

  var lazyLoad = false;
  function onLazyLoad() {
  if (lazyLoad === false) {
    lazyLoad = true;
    window.removeEventListener('scroll', onLazyLoad);
    window.removeEventListener('mousemove', onLazyLoad);
    window.removeEventListener('mousedown', onLazyLoad);
    window.removeEventListener('touchstart', onLazyLoad);
    window.removeEventListener('keydown', onLazyLoad);
    main();
  }
  }
  window.addEventListener('scroll', onLazyLoad);
  window.addEventListener('mousemove', onLazyLoad);
  window.addEventListener('mousedown', onLazyLoad);
  window.addEventListener('touchstart', onLazyLoad);
  window.addEventListener('keydown', onLazyLoad);
  window.addEventListener('load', function() {
  if (window.pageYOffset) {
    onLazyLoad();
  }
  });
})(window, document);