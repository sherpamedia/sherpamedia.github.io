(() => {
  // Mobile menu
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const drawer = document.querySelector('[data-mobile-drawer]');

  const open = () => drawer?.classList.add('open');
  const close = () => drawer?.classList.remove('open');

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  drawer?.addEventListener('click', (e) => {
    if (e.target && e.target.matches('[data-mobile-drawer]')) close();
  });
  document.querySelectorAll('[data-mobile-link]').forEach(a => a.addEventListener('click', close));

  // Active nav state
  const normalizePath = (p) => {
    // strip query/hash
    p = (p || '/').split('?')[0].split('#')[0];
    if (!p.startsWith('/')) p = '/' + p;
    if (p !== '/' && !p.endsWith('/')) p += '/';
    return p;
  };

  const setActiveNav = () => {
    const current = normalizePath(window.location.pathname);
    document.querySelectorAll('a[data-nav]').forEach(a => {
      const target = normalizePath(a.getAttribute('data-nav'));
      const isActive = current === target || (target !== '/' && current.startsWith(target));
      a.classList.toggle('active', isActive);
      if (isActive) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  };

  setActiveNav();
})();
