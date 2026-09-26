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

  // Carrossel de parceiros — marquee 100% CSS, pausa instantânea ao passar o mouse
  const partnersTrack = document.getElementById('partnersTrack');
  if (partnersTrack) {
    // Duplica os cards uma vez (loop infinito via translateX(-50%) no CSS)
    const originalSlides = Array.from(partnersTrack.children);
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.classList.add('in'); // clone é só visual, não precisa animação de entrada
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
      partnersTrack.appendChild(clone);
    });

    // Duração proporcional à largura real, pra manter a mesma velocidade
    // não importa quantos parceiros forem adicionados no futuro.
    const pxPerSecond = 60;
    const distance = partnersTrack.scrollWidth / 2;
    partnersTrack.style.animationDuration = `${distance / pxPerSecond}s`;
    partnersTrack.classList.remove('is-paused');

    const pause = () => partnersTrack.classList.add('is-paused');
    const resume = () => partnersTrack.classList.remove('is-paused');

    partnersTrack.addEventListener('mouseenter', pause);
    partnersTrack.addEventListener('mouseleave', resume);
    partnersTrack.addEventListener('touchstart', pause, { passive: true });
    partnersTrack.addEventListener('touchend', resume, { passive: true });
  }

  // Faixa amarela (ticker) — mesmo esquema, sem botões
  if (document.querySelector('.ticker-swiper')) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    new Swiper('.ticker-swiper', {
      loop: true,
      loopAdditionalSlides: 6,
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

  // Formulário de orçamento — envia via Netlify Forms sem recarregar a página
  const orcamentoForm = document.getElementById('orcamentoForm');
  if (orcamentoForm) {
    const feedback = document.getElementById('formFeedback');
    orcamentoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(orcamentoForm);
      const encoded = new URLSearchParams(data).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })
        .then(() => {
          feedback.textContent = 'Recebemos sua solicitação! Em breve entraremos em contato.';
          feedback.style.color = '#1a7f37';
          feedback.style.display = 'block';
          orcamentoForm.reset();
        })
        .catch(() => {
          feedback.textContent = 'Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.';
          feedback.style.color = '#c0392b';
          feedback.style.display = 'block';
        });
    });
  }
