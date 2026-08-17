/**
 * Nav Scroll Spy — Papr.Machine
 * Source: 04-UI-COMPONENTS-INTERACTIONS.md §4.1
 * Updates active nav underline indicator via IntersectionObserver
 */

export function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav__link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'true');
          } else {
            link.classList.remove('is-active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}
