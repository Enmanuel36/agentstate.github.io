/**
 * ============================================================
 *  Patricia Real Estate – Contact Page JavaScript
 *
 *  HOW THIS WORKS:
 *  When the user clicks "Send Message", this script validates
 *  the form, builds a formatted email body, and opens the
 *  user's default email client (Gmail, Outlook, Apple Mail)
 *  with everything pre-filled. The user just clicks Send.
 *
 *  ZERO cost. ZERO third-party services. Works on GitHub Pages.
 *
 *  CONFIGURATION — owner email used by the contact flow:
 * ============================================================
 */

const OWNER_EMAIL = 'hello@patriciarealestate.com';
let propertyPrefilled = false;
let activeDataScript = null;

/* ── Init ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initContactContext();
  bindPropertyDropdown();
  bindContactForm();
});

/* ── Context ───────────────────────────────────────────── */
function initContactContext() {
  var params = new URLSearchParams(window.location.search);
  var from = params.get('from');
  var pageMarket = document.body.dataset.market || 'uk';
  var context = getContactContext(pageMarket, from);
  var backLink = document.getElementById('backLink');
  var aboutLink = document.getElementById('aboutLink');
  var enquireNowBtn = document.getElementById('enquireNowBtn');
  var areasText = document.getElementById('areasText');
  var breadcrumbHome = document.getElementById('breadcrumbHome');

  if (backLink) {
    backLink.href = context.backHref;
    backLink.textContent = context.backLabel;
  }

  if (aboutLink) aboutLink.href = context.aboutHref;
  if (enquireNowBtn) enquireNowBtn.href = context.contactHref;
  if (areasText) areasText.textContent = context.areasText;

  if (breadcrumbHome) {
    breadcrumbHome.href = context.breadcrumbHref;
    breadcrumbHome.textContent = context.breadcrumbLabel;
  }

  loadContactData(context.dataSrc);
}

function getContactContext(pageMarket, from) {
  if (from === 'ecuador') {
    return {
      backHref: '../ecuador/index.html',
      backLabel: 'Projects',
      aboutHref: '../about.html?from=ecuador',
      contactHref: 'contact.html?from=ecuador',
      areasText: 'Ecuador Pacific coast projects. Contact us for prices and payment plans.',
      breadcrumbHref: '../ecuador/index.html',
      breadcrumbLabel: 'Ecuador',
      dataSrc: '../ecuador/data.js'
    };
  }

  if (pageMarket === 'spain' || from === 'spain') {
    return {
      backHref: 'index.html',
      backLabel: 'Properties',
      aboutHref: '../about.html?from=spain',
      contactHref: 'contact.html?from=spain',
      areasText: 'Barcelona, Madrid, Marbella, Costa del Sol and more.',
      breadcrumbHref: 'index.html',
      breadcrumbLabel: 'Spain',
      dataSrc: 'data.js'
    };
  }

  return {
    backHref: 'index.html',
    backLabel: 'Properties',
    aboutHref: '../about.html',
    contactHref: 'contact.html',
    areasText: 'Hampshire, Surrey, and surrounding counties.',
    breadcrumbHref: 'index.html',
    breadcrumbLabel: 'Home',
    dataSrc: 'data.js'
  };
}

function loadContactData(src) {
  if (!src) {
    syncPropertyDropdown();
    return;
  }

  if (activeDataScript) {
    activeDataScript.remove();
    activeDataScript = null;
  }

  var script = document.createElement('script');
  script.src = src;
  script.dataset.contactData = 'true';
  script.addEventListener('load', syncPropertyDropdown);
  script.addEventListener('error', syncPropertyDropdown);
  document.body.appendChild(script);
  activeDataScript = script;
}

/* ── Property Dropdown ─────────────────────────────────── */
function bindPropertyDropdown() {
  syncPropertyDropdown();
}

function getAvailableListings() {
  if (typeof propertyListings !== 'undefined') return propertyListings;
  if (typeof ecuadorProjects !== 'undefined') return ecuadorProjects;
  return [];
}

function syncPropertyDropdown() {
  const select = document.getElementById('contactProperty');
  if (!select) return;

  var listings = getAvailableListings();
  var defaultOption = select.querySelector('option');

  select.innerHTML = '';
  if (defaultOption) {
    select.appendChild(defaultOption);
  } else {
    select.appendChild(new Option('Select a property…', ''));
  }

  listings.forEach(function(p) {
    var option = document.createElement('option');
    var name = p.title || p.name || '';
    var location = p.town || p.location || '';
    option.value = name;
    option.textContent = name + (location ? ' (' + location + ')' : '');
    select.appendChild(option);
  });

  if (!propertyPrefilled) {
    propertyPrefilled = prefillFromUrl();
  }
}

/* ── URL Pre-fill ──────────────────────────────────────── */
function prefillFromUrl() {
  const params    = new URLSearchParams(window.location.search);
  const propertyName = params.get('property');
  if (!propertyName) return true;
  const select = document.getElementById('contactProperty');
  if (!select) return false;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === propertyName) {
      select.selectedIndex = i;
      return true;
    }
  }
  return false;
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
    const propertyTitle = document.getElementById('contactProperty').value;

    const emailSubject = 'Patricia Real Estate Enquiry: ' + subject;

    const bodyLines = [
      '=== Patricia Real Estate Enquiry ===',
      '',
      'Name:    ' + name,
      'Email:   ' + email,
      phone      ? 'Phone:   ' + phone      : null,
      propertyTitle ? 'Property:' + ' ' + propertyTitle : null,
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
      '<button class="success-banner-close" type="button">&#x2715;</button>' +
    '</div>';
  const form = document.getElementById('contactForm');
  if (form) form.before(banner);
  const closeButton = banner.querySelector('.success-banner-close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      banner.remove();
    });
  }
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
