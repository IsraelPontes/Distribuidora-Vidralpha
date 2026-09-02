const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Carrossel de parceiros (Swiper.js) — loop infinito, pausa ao passar o mouse
  const partnersEl = document.querySelector('.partners-swiper');
  if (partnersEl) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const partnersSwiper = new Swiper('.partners-swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 22,
      speed: 5000,
      allowTouchMove: true,
      autoplay: prefersReducedMotion ? false : {
        delay: 1,
        disableOnInteraction: false,
      },
    });

    if (partnersSwiper.autoplay) {
      partnersEl.addEventListener('mouseenter', () => partnersSwiper.autoplay.stop());
      partnersEl.addEventListener('mouseleave', () => partnersSwiper.autoplay.start());
      partnersEl.addEventListener('touchstart', () => partnersSwiper.autoplay.stop(), { passive: true });
      partnersEl.addEventListener('touchend', () => partnersSwiper.autoplay.start(), { passive: true });
    }
  }

  // Faixa amarela (ticker) — mesmo esquema, sem botões
  if (document.querySelector('.ticker-swiper')) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    new Swiper('.ticker-swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 8000,
      allowTouchMove: false,
      autoplay: prefersReducedMotion ? false : {
        delay: 1,
        disableOnInteraction: false,
      },
    });
  }
