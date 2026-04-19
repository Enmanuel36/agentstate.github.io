/**
 * ============================================================
 *  ProxyLet – Contact Page JavaScript (contact.html)
 *
 *  HOW THIS WORKS:
 *  When the user clicks "Send Message", this script validates
 *  the form, builds a formatted email body, and opens the
 *  user's default email client (Gmail, Outlook, Apple Mail)
 *  with everything pre-filled. The user just clicks Send.
 *
 *  ZERO cost. ZERO third-party services. Works on GitHub Pages.
 *
 *  CONFIGURATION — change OWNER_EMAIL to your address:
 * ============================================================
 */

/** ⭐ YOUR EMAIL ADDRESS — Change this to yours! */
const OWNER_EMAIL = 'hello@patriciarealestate.com';

/* ── Init ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  bindHamburger();
  populateProxyDropdown();
  prefillFromUrl();
  bindContactForm();
});

/* ── Hamburger ─────────────────────────────────────────── */
function bindHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');
  if (!hamburger || !mainNav) return;
  hamburger.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

/* ── Proxy Dropdown ────────────────────────────────────── */
function populateProxyDropdown() {
  const select = document.getElementById('contactProperty');
  if (!select) return;
  var listings = [];
  if (typeof propertyListings !== 'undefined') listings = propertyListings;
  else if (typeof ecuadorProjects !== 'undefined') listings = ecuadorProjects;
  if (!listings.length) return;
  listings.forEach(function(p) {
    const option       = document.createElement('option');
    option.value       = p.title;
    option.textContent = p.title + ' (' + p.town + ')';
    select.appendChild(option);
  });
}

/* ── URL Pre-fill ──────────────────────────────────────── */
function prefillFromUrl() {
  const params    = new URLSearchParams(window.location.search);
  const proxyName = params.get('property');
  if (!proxyName) return;
  const select = document.getElementById('contactProperty');
  if (!select) return;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === proxyName) {
      select.selectedIndex = i;
      break;
    }
  }
}

/* ── Contact Form ──────────────────────────────────────── */
function bindContactForm() {
  const submitBtn = document.getElementById('submitBtn');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const name    = document.getElementById('contactName').value.trim();
    const email   = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();

    clearErrors();
    let valid = true;

    if (!name) { markError('contactName', 'Please enter your name.'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      markError('contactEmail', 'Please enter a valid email address.'); valid = false;
    }
    if (!subject) { markError('contactSubject', 'Please select a subject.'); valid = false; }
    if (!message) { markError('contactMessage', 'Please enter a message.'); valid = false; }
    if (!valid) return;

    const phone      = document.getElementById('contactPhone').value.trim();
    const proxyTitle = document.getElementById('contactProperty').value;

    const emailSubject = 'Patricia Real Estate Enquiry: ' + subject;

    const bodyLines = [
      '=== Patricia Real Estate Enquiry ===',
      '',
      'Name:    ' + name,
      'Email:   ' + email,
      phone      ? 'Phone:   ' + phone      : null,
      proxyTitle ? 'Proxy:   ' + proxyTitle : null,
      'Subject: ' + subject,
      '',
      '--- Message ---',
      message,
      '',
      '--- Sent via Patricia Real Estate contact form ---'
    ].filter(function(l) { return l !== null; }).join('\n');

    const mailtoUrl =
      'mailto:' + OWNER_EMAIL +
      '?subject=' + encodeURIComponent(emailSubject) +
      '&body='    + encodeURIComponent(bodyLines);

    window.location.href = mailtoUrl;

    setTimeout(function() { showSuccessBanner(); }, 800);
  });

  ['contactName','contactEmail','contactSubject','contactMessage'].forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', function() { removeError(id); });
  });
}

/* ── Success Banner ────────────────────────────────────── */
function showSuccessBanner() {
  if (document.getElementById('successBanner')) return;
  const banner = document.createElement('div');
  banner.id = 'successBanner';
  banner.innerHTML =
    '<div class="success-banner">' +
      '<span class="success-banner-icon">&#x2705;</span>' +
      '<div>' +
        '<strong>Your email app should have opened!</strong>' +
        '<p>Review the pre-filled message and click Send in your email app. ' +
        'If it did not open, email us directly at ' +
        '<a href="mailto:' + OWNER_EMAIL + '">' + OWNER_EMAIL + '</a>.</p>' +
      '</div>' +
      '<button class="success-banner-close" onclick="this.parentElement.parentElement.remove()">&#x2715;</button>' +
    '</div>';
  const form = document.getElementById('contactForm');
  if (form) form.before(banner);
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Error Helpers ─────────────────────────────────────── */
function markError(fieldId, message) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.classList.add('field-error');
  const errorId = fieldId + '-error';
  if (!document.getElementById(errorId)) {
    const msg = document.createElement('span');
    msg.id = errorId;
    msg.className = 'field-error-msg';
    msg.textContent = message;
    el.after(msg);
  }
}

function removeError(fieldId) {
  const el = document.getElementById(fieldId);
  if (el) el.classList.remove('field-error');
  const msg = document.getElementById(fieldId + '-error');
  if (msg) msg.remove();
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(function(el) { el.classList.remove('field-error'); });
  document.querySelectorAll('.field-error-msg').forEach(function(el) { el.remove(); });
}
