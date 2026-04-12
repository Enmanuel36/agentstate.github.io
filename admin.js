/**
 * ============================================================
 *  Patricia Real Estate – Admin Panel JavaScript
 *  Security: SHA-256 hashed password gate + session + lockout
 * ============================================================
 *
 *  HOW TO CHANGE YOUR PASSWORD:
 *  ─────────────────────────────────────────────────────────
 *  1. Go to: https://emn178.github.io/online-tools/sha256.html
 *  2. Type your new password and copy the hash
 *  3. Replace the ADMIN_HASH value below with the new hash
 *  4. Commit the change to GitHub
 *  ─────────────────────────────────────────────────────────
 *
 *  SECURITY FEATURES:
 *  • Password stored as SHA-256 hash only — never in plain text
 *  • 3 failed attempts triggers a 15-minute lockout
 *  • Successful session stored in sessionStorage (tab-only,
 *    cleared when browser tab is closed)
 *  • Page has noindex meta — search engines won't index it
 *  • Not linked from anywhere on the public site
 * ============================================================
 */

/* ── Admin password hash (SHA-256) ────────────────────── */
const ADMIN_HASH = '1089811edb129a65fff6c7016af842d3dc0128892cc3ac000be6ab19a090f91d';

/* ── Lockout settings ──────────────────────────────────── */
const MAX_ATTEMPTS    = 3;       // wrong attempts before lockout
const LOCKOUT_MINUTES = 15;      // lockout duration in minutes
const SESSION_KEY     = 'patricia_admin_auth';
const ATTEMPTS_KEY    = 'patricia_admin_attempts';
const LOCKOUT_KEY     = 'patricia_admin_lockout';

/* ── DOM references ────────────────────────────────────── */
const lockScreen    = document.getElementById('lockScreen');
const adminContent  = document.getElementById('adminContent');
const pwInput       = document.getElementById('pwInput');
const unlockBtn     = document.getElementById('unlockBtn');
const togglePw      = document.getElementById('togglePw');
const lockError     = document.getElementById('lockError');
const lockAttempts  = document.getElementById('lockAttempts');

/* ══════════════════════════════════════════════════════════
   INITIALISE — check session and lockout state on load
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // If already authenticated this session, skip the lock screen
  if (sessionStorage.getItem(SESSION_KEY) === 'granted') {
    showAdmin();
    return;
  }

  // Check for active lockout
  if (isLockedOut()) {
    showLockoutMessage();
    unlockBtn.disabled = true;
    pwInput.disabled   = true;
  } else {
    updateAttemptsDisplay();
  }

  bindLockScreen();
  bindHamburger();
});

/* ══════════════════════════════════════════════════════════
   SHA-256 HASHING
   Uses the Web Crypto API — built into all modern browsers,
   no external library needed.
   ══════════════════════════════════════════════════════════ */
async function sha256(message) {
  const msgBuffer  = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray  = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ══════════════════════════════════════════════════════════
   LOCK SCREEN LOGIC
   ══════════════════════════════════════════════════════════ */
function bindLockScreen() {
  // Unlock on button click
  unlockBtn.addEventListener('click', attemptUnlock);

  // Unlock on Enter key
  pwInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') attemptUnlock();
  });

  // Show/hide password toggle
  togglePw.addEventListener('click', () => {
    const isHidden = pwInput.type === 'password';
    pwInput.type   = isHidden ? 'text' : 'password';
    togglePw.textContent = isHidden ? '🙈' : '👁';
  });

  // Clear error on typing
  pwInput.addEventListener('input', () => {
    lockError.textContent = '';
    pwInput.classList.remove('error');
  });
}

/**
 * Hash the entered password and compare against ADMIN_HASH.
 * Increment attempt counter on failure; grant session on success.
 */
async function attemptUnlock() {
  if (isLockedOut()) { showLockoutMessage(); return; }

  const entered = pwInput.value;
  if (!entered) {
    showError('Please enter a password.');
    return;
  }

  unlockBtn.disabled    = true;
  unlockBtn.textContent = 'Checking…';

  const hash = await sha256(entered);

  if (hash === ADMIN_HASH) {
    // ✅ Correct password
    sessionStorage.setItem(SESSION_KEY, 'granted');
    localStorage.removeItem(ATTEMPTS_KEY); // reset attempt counter
    localStorage.removeItem(LOCKOUT_KEY);
    showAdmin();
  } else {
    // ❌ Wrong password
    const attempts = incrementAttempts();
    const remaining = MAX_ATTEMPTS - attempts;

    pwInput.value = '';
    pwInput.classList.add('error');

    if (remaining <= 0) {
      // Trigger lockout
      const lockUntil = Date.now() + LOCKOUT_MINUTES * 60 * 1000;
      localStorage.setItem(LOCKOUT_KEY, lockUntil.toString());
      showLockoutMessage();
      unlockBtn.disabled = true;
      pwInput.disabled   = true;
    } else {
      showError('Incorrect password.');
      updateAttemptsDisplay(remaining);
    }
  }

  unlockBtn.disabled    = false;
  unlockBtn.textContent = 'Unlock →';
}

/** Show the admin panel and hide the lock screen */
function showAdmin() {
  lockScreen.style.display   = 'none';
  adminContent.style.display = 'block';
  bindAdminForm();
  bindLockAgain();
}

/** Lock the session and reload back to lock screen */
function lockSession() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.reload();
}

function bindLockAgain() {
  document.getElementById('lockAgainBtn')?.addEventListener('click', lockSession);
  document.getElementById('lockAgainBtnFooter')?.addEventListener('click', lockSession);
}

/* ── Error & attempt helpers ───────────────────────────── */
function showError(msg) {
  lockError.textContent = msg;
}

function incrementAttempts() {
  const current = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0') + 1;
  localStorage.setItem(ATTEMPTS_KEY, current.toString());
  return current;
}

function updateAttemptsDisplay(remaining) {
  if (remaining === undefined) {
    const used = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0');
    remaining  = MAX_ATTEMPTS - used;
  }
  if (remaining < MAX_ATTEMPTS) {
    lockAttempts.textContent = remaining + ' attempt' + (remaining !== 1 ? 's' : '') + ' remaining before lockout.';
  } else {
    lockAttempts.textContent = '';
  }
}

function isLockedOut() {
  const lockUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0');
  return lockUntil > Date.now();
}

function showLockoutMessage() {
  const lockUntil  = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0');
  const remaining  = Math.ceil((lockUntil - Date.now()) / 60000);
  lockError.innerHTML =
    '<div class="lock-locked">⚠️ Too many failed attempts. Try again in <strong>' +
    remaining + ' minute' + (remaining !== 1 ? 's' : '') +
    '</strong>.</div>';
  lockAttempts.textContent = '';

  // Auto-refresh the countdown every minute
  setTimeout(() => window.location.reload(), 60000);
}

/* ══════════════════════════════════════════════════════════
   HAMBURGER (admin header nav)
   ══════════════════════════════════════════════════════════ */
function bindHamburger() {
  const h = document.getElementById('hamburger');
  const n = document.getElementById('mainNav');
  if (!h || !n) return;
  h.addEventListener('click', () => n.classList.toggle('open'));
}

/* ══════════════════════════════════════════════════════════
   ADMIN LISTING FORM
   (identical logic to list.js but embedded here)
   ══════════════════════════════════════════════════════════ */
function bindAdminForm() {
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn     = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const resetBtn    = document.getElementById('resetBtn');
  if (!generateBtn) return;

  generateBtn.addEventListener('click', () => {
    const required = ['propTitle','propType','propCategory','propPrice',
                      'propAddress','propTown','propPostcode','propBeds',
                      'agentName','agentEmail'];
    let valid = true;
    required.forEach(id => {
      const el = document.getElementById(id);
      if (!el || !el.value.trim()) { el && el.classList.add('field-error'); valid = false; }
      else el.classList.remove('field-error');
    });
    if (!valid) { alert('Please fill in all required fields.'); return; }

    const entry   = buildEntry();
    const snippet = generateSnippet(entry);
    document.getElementById('outputCode').textContent = snippet;
    document.getElementById('outputPanel').style.display = 'block';
    document.getElementById('outputPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  copyBtn?.addEventListener('click', () => {
    const text = document.getElementById('outputCode').textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
  });

  downloadBtn?.addEventListener('click', () => {
    const entry   = buildEntry();
    const snippet = generateSnippet(entry);
    const full    = buildFullDataJs(snippet);
    const blob    = new Blob([full], { type: 'application/javascript' });
    const url     = URL.createObjectURL(blob);
    const a       = document.createElement('a');
    a.href = url; a.download = 'data.js'; a.click();
    URL.revokeObjectURL(url);
  });

  resetBtn?.addEventListener('click', () => {
    document.querySelectorAll('#propertyForm input, #propertyForm select, #propertyForm textarea')
      .forEach(el => { el.value = el.tagName === 'SELECT' ? el.options[0].value : ''; });
    document.getElementById('outputPanel').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('#propertyForm input, #propertyForm select').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('field-error'));
  });
}

function buildEntry() {
  const today    = new Date().toISOString().split('T')[0];
  const maxId    = (typeof propertyListings !== 'undefined')
    ? propertyListings.reduce((m, p) => Math.max(m, p.id || 0), 0)
    : 0;
  const features = document.getElementById('propFeatures').value
    .split(',').map(f => f.trim()).filter(Boolean);

  return {
    id:          maxId + 1,
    title:       document.getElementById('propTitle').value.trim(),
    type:        document.getElementById('propType').value,
    category:    document.getElementById('propCategory').value,
    price:       document.getElementById('propPrice').value.trim(),
    address:     document.getElementById('propAddress').value.trim(),
    town:        document.getElementById('propTown').value.trim(),
    postcode:    document.getElementById('propPostcode').value.trim(),
    bedrooms:    parseInt(document.getElementById('propBeds').value) || 0,
    bathrooms:   parseInt(document.getElementById('propBaths').value) || 1,
    reception:   parseInt(document.getElementById('propReception').value) || 1,
    sqft:        document.getElementById('propSqft').value.trim(),
    features,
    description: document.getElementById('propDesc').value.trim(),
    agent:       document.getElementById('agentName').value.trim(),
    email:       document.getElementById('agentEmail').value.trim(),
    added:       today,
    emoji:       document.getElementById('propEmoji').value
  };
}

function generateSnippet(e) {
  return (
    '  /* ── LISTING ' + e.id + ' ─────────────────────────────────────────── */\n' +
    '  {\n' +
    '    id: '          + e.id                        + ',\n' +
    '    title: '       + JSON.stringify(e.title)      + ',\n' +
    '    type: '        + JSON.stringify(e.type)       + ',\n' +
    '    category: '    + JSON.stringify(e.category)   + ',\n' +
    '    price: '       + JSON.stringify(e.price)      + ',\n' +
    '    address: '     + JSON.stringify(e.address)    + ',\n' +
    '    town: '        + JSON.stringify(e.town)       + ',\n' +
    '    postcode: '    + JSON.stringify(e.postcode)   + ',\n' +
    '    bedrooms: '    + e.bedrooms                  + ',\n' +
    '    bathrooms: '   + e.bathrooms                 + ',\n' +
    '    reception: '   + e.reception                 + ',\n' +
    '    sqft: '        + JSON.stringify(e.sqft)       + ',\n' +
    '    features: '    + JSON.stringify(e.features)   + ',\n' +
    '    description: ' + JSON.stringify(e.description)+ ',\n' +
    '    agent: '       + JSON.stringify(e.agent)      + ',\n' +
    '    email: '       + JSON.stringify(e.email)      + ',\n' +
    '    added: '       + JSON.stringify(e.added)      + ',\n' +
    '    emoji: '       + JSON.stringify(e.emoji)      + '\n' +
    '  },'
  );
}

function buildFullDataJs(snippet) {
  const listings = (typeof propertyListings !== 'undefined') ? propertyListings : [];
  const existing = listings.map(p =>
    '  {\n' +
    '    id: '          + p.id                              + ',\n' +
    '    title: '       + JSON.stringify(p.title)            + ',\n' +
    '    type: '        + JSON.stringify(p.type)             + ',\n' +
    '    category: '    + JSON.stringify(p.category)         + ',\n' +
    '    price: '       + JSON.stringify(p.price)            + ',\n' +
    '    address: '     + JSON.stringify(p.address)          + ',\n' +
    '    town: '        + JSON.stringify(p.town)             + ',\n' +
    '    postcode: '    + JSON.stringify(p.postcode)         + ',\n' +
    '    bedrooms: '    + p.bedrooms                        + ',\n' +
    '    bathrooms: '   + p.bathrooms                       + ',\n' +
    '    reception: '   + (p.reception || 1)                + ',\n' +
    '    sqft: '        + JSON.stringify(p.sqft || '')       + ',\n' +
    '    features: '    + JSON.stringify(p.features || [])   + ',\n' +
    '    description: ' + JSON.stringify(p.description)      + ',\n' +
    '    agent: '       + JSON.stringify(p.agent)            + ',\n' +
    '    email: '       + JSON.stringify(p.email)            + ',\n' +
    '    added: '       + JSON.stringify(p.added)            + ',\n' +
    '    emoji: '       + JSON.stringify(p.emoji || '🏠')    + '\n' +
    '  }'
  ).join(',\n\n');

  return (
    '/** Patricia Real Estate – Property Listings Data\n' +
    ' *  Edit this file to add, update, or remove listings.\n' +
    ' */\n\n' +
    'const propertyListings = [\n\n' +
    snippet + '\n\n' +
    (existing ? existing + '\n\n' : '') +
    ']; // end propertyListings\n'
  );
}
