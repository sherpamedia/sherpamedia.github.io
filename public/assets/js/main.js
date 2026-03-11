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

  // Testimonials carousel
  const carousel = document.querySelector('[data-testimonial-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('[data-testimonial-slide]'));
    const dots = Array.from(carousel.querySelectorAll('[data-testimonial-dot]'));
    const prevBtn = carousel.querySelector('[data-testimonial-prev]');
    const nextBtn = carousel.querySelector('[data-testimonial-next]');
    let index = 0;

    const render = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-active', active);
      });

      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };

    prevBtn?.addEventListener('click', () => render(index - 1));
    nextBtn?.addEventListener('click', () => render(index + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => render(i)));

    render(0);
  }
})();
