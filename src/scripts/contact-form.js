/**
 * Contact Form Handler — Papr.Machine
 * Source: 04-UI-COMPONENTS-INTERACTIONS.md §4.11 & WhatsApp Integration
 * Redirects to WhatsApp (+91 70196 31612) with pre-filled message
 */

export function initContactForm() {
  const form = document.querySelector('#contact-form');
  const successBox = document.querySelector('#form-success');
  const errorBox = document.querySelector('#form-error');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset error states
    const groups = form.querySelectorAll('.form-group');
    groups.forEach((g) => g.classList.remove('has-error'));
    if (successBox) successBox.style.display = 'none';
    if (errorBox) errorBox.style.display = 'none';

    // Validate inputs
    let hasError = false;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const topicInput = form.querySelector('#topic');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput || !nameInput.value.trim()) {
      nameInput?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      emailInput?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    if (!topicInput || !topicInput.value) {
      topicInput?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    if (!messageInput || !messageInput.value.trim()) {
      messageInput?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    if (hasError) return;

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Connecting to WhatsApp...';
    submitBtn.disabled = true;

    try {
      const topicMap = {
        support: 'Support',
        integration: 'Brand Integration',
        franchise: 'Franchise Opportunity',
        other: 'General Inquiry'
      };
      const topicText = topicMap[topicInput.value] || topicInput.value;

      const prefilledText = `Hi Tilak Infotech Team,\n\n*Name:* ${nameInput.value.trim()}\n*Email:* ${emailInput.value.trim()}\n*Topic:* ${topicText}\n*Message:* ${messageInput.value.trim()}\n\n(Inquiry sent via Papr.Machine Website)`;

      const whatsappUrl = `https://wa.me/917019631612?text=${encodeURIComponent(prefilledText)}`;

      // Show inline confirmation
      if (successBox) {
        successBox.textContent = "Opening WhatsApp to connect directly with Tilak Infotech product team...";
        successBox.style.display = 'block';
      }

      // Open WhatsApp chat in new window
      window.open(whatsappUrl, '_blank');

      form.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    } catch {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      if (errorBox) {
        errorBox.style.display = 'block';
      }
    }
  });
}
