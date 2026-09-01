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

  // Carrossel de parceiros — rolagem automática infinita, com botões manuais
  const track = document.getElementById('partnersTrack');
  const prevBtn = document.getElementById('partnersPrev');
  const nextBtn = document.getElementById('partnersNext');

  if (track && prevBtn && nextBtn) {
    // Duplica os cards para criar o efeito de loop infinito
    const originalSlides = Array.from(track.children);
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
      track.appendChild(clone);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let autoScroll = !prefersReducedMotion;
    let resumeTimeout;
    const speed = 0.6; // px por frame

    function tick() {
      if (autoScroll) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += speed;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function pauseThenResume() {
      autoScroll = false;
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { autoScroll = !prefersReducedMotion; }, 3500);
    }

    function goToCard(dir) {
      const slide = track.querySelector('.partner-slide');
      const gap = 22;
      const distance = slide ? slide.offsetWidth + gap : 300;
      const half = track.scrollWidth / 2;
      let next = track.scrollLeft + dir * distance;
      if (next < 0) next += half;
      if (next >= half) next -= half;
      track.scrollTo({ left: next, behavior: 'smooth' });
      pauseThenResume();
    }

    prevBtn.addEventListener('click', () => goToCard(-1));
    nextBtn.addEventListener('click', () => goToCard(1));

    track.addEventListener('mouseenter', () => { autoScroll = false; });
    track.addEventListener('mouseleave', () => { clearTimeout(resumeTimeout); autoScroll = !prefersReducedMotion; });
    track.addEventListener('touchstart', () => { autoScroll = false; }, { passive: true });
    track.addEventListener('touchend', pauseThenResume, { passive: true });
  }
