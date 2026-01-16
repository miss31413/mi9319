(() => {
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const subscribeForm = document.querySelector('#subscribe-form');
  if (subscribeForm) {
    const emailInput = subscribeForm.querySelector('input[type=\"email\"]');
    const feedback = subscribeForm.querySelector('.subscribe-feedback');

    subscribeForm.addEventListener('submit', (event) => {
      const value = emailInput.value.trim();
      const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
      const action = subscribeForm.getAttribute('action');
      const hasAction = action && action !== '#';
      const hasNetlify = subscribeForm.hasAttribute('data-netlify');

      if (!isValid) {
        event.preventDefault();
        feedback.textContent = '請輸入正確的 Email。';
        feedback.classList.add('is-error');
        return;
      }

      feedback.classList.remove('is-error');

      if (!hasAction && !hasNetlify) {
        event.preventDefault();
        feedback.textContent = '已收到！接下來可串接訂閱服務。';
        subscribeForm.reset();
      }
    });
  }
})();
