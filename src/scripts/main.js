/**
 * Master JavaScript Entry Point — Papr.Machine
 * Source: 05-TECHNICAL-BUILD-SPEC.md §5.2
 */

import { initNavScrollSpy } from './nav-scroll-spy.js';
import { initHeaderShrink } from './header-shrink.js';
import { initSectionReveals } from './section-reveal.js';
import { initTotpRing } from './totp-ring.js';
import { initContactForm } from './contact-form.js';

const DIRECT_DOWNLOAD_URL = 'https://github.com/harvatechs/papr.machine-website/releases/download/v1.0.0/Papr.Machine-Setup.exe';

function initDemoDownloadTriggers() {
  const downloadBtns = document.querySelectorAll('.btn--download-demo, a[download]');
  downloadBtns.forEach((btn) => {
    btn.setAttribute('href', DIRECT_DOWNLOAD_URL);
    btn.addEventListener('click', (e) => {
      // Trigger direct download of the release EXE installer
      window.location.href = DIRECT_DOWNLOAD_URL;
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
