/**
 * Master JavaScript Entry Point — Papr.Machine
 * Source: 05-TECHNICAL-BUILD-SPEC.md §5.2
 */

import { initNavScrollSpy } from './nav-scroll-spy.js';
import { initHeaderShrink } from './header-shrink.js';
import { initSectionReveals } from './section-reveal.js';
import { initTotpRing } from './totp-ring.js';
import { initContactForm } from './contact-form.js';

function initDemoDownloadTriggers() {
  const downloadBtns = document.querySelectorAll('.btn--download-demo, a[download]');
  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Trigger direct download of the real setup EXE file
      const exeUrl = 'assets/downloads/Papr.Machine-Setup.exe';
      const a = document.createElement('a');
      a.href = exeUrl;
      a.download = 'Papr.Machine-Setup.exe';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavScrollSpy();
  initHeaderShrink();
  initSectionReveals();
  initTotpRing();
  initContactForm();
  initDemoDownloadTriggers();
});
