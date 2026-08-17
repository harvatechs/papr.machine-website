/**
 * Section Reveal Animation — Papr.Machine
 * Source: 04-UI-COMPONENTS-INTERACTIONS.md §4.3
 */

export function initSectionReveals() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal-item');

  if (!revealItems.length) return;

  if (prefersReduced) {
    revealItems.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  });

  revealItems.forEach((el) => observer.observe(el));
}
