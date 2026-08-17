/**
 * Live TOTP Countdown Ring Component — Papr.Machine
 * Source: 01-BRAND-DESIGN-SYSTEM.md §1.8 & 04 §4.6
 * Mirrors real product Display TOTP functionality
 */

export function initTotpRing() {
  const ring = document.querySelector('.totp-ring-progress');
  const codeEl = document.querySelector('.totp-live-code');
  const timerTextEl = document.querySelector('.totp-timer-text');
  const pinEl = document.querySelector('.pin-value');

  if (!ring || !codeEl || !timerTextEl) return;

  const r = 70;
  const c = 2 * Math.PI * r;
  ring.style.strokeDasharray = `${c}`;

  // Authentic codes bank simulating live rotation
  const sampleCodes = ['483683', '912048', '574190', '830219', '365821', '729104'];
  const samplePins = ['7482', '3190', '8204', '6519', '2840', '9531'];
  let codeIndex = 0;

  function updateRing() {
    const now = Math.floor(Date.now() / 1000);
    const position = now % 60;
    const remainingIn60 = 60 - position;
    const stepRemaining = 30 - (now % 30);
    
    // Cycle fraction (1 -> 0)
    const fraction = remainingIn60 / 60;
    const offset = c * (1 - fraction);
    ring.style.strokeDashoffset = `${offset}`;

    // Update code every 30s
    const period = Math.floor(now / 30);
    const activeIndex = period % sampleCodes.length;
    if (activeIndex !== codeIndex) {
      codeIndex = activeIndex;
      codeEl.textContent = sampleCodes[codeIndex];
      if (pinEl) pinEl.textContent = samplePins[codeIndex];
    }

    timerTextEl.textContent = `${remainingIn60}s · rolls in ${stepRemaining}s`;
  }

  // Initial code set
  codeEl.textContent = sampleCodes[0];
  if (pinEl) pinEl.textContent = samplePins[0];

  updateRing();
  setInterval(updateRing, 1000);
}
