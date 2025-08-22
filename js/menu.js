// carelio responsive pack v1 - simple mobile nav
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
})();