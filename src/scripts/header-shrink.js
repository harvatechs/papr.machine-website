/**
 * Sticky Header Scroll State — Papr.Machine
 * Source: 04-UI-COMPONENTS-INTERACTIONS.md §4.1
 */

export function initHeaderShrink() {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('#hero') || document.querySelector('.hero');

  if (!header) return;

  const threshold = 120; // past top hero zone

  function handleScroll() {
    if (window.scrollY > threshold) {
      if (!header.classList.contains('is-scrolled')) {
        header.classList.add('is-scrolled');
      }
    } else {
      if (header.classList.contains('is-scrolled')) {
        header.classList.remove('is-scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
