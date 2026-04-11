/**
 * ============================================================
 *  Patricia Real Estate – List a Property (list.html)
 *  Validates form, generates data.js entry, copy & download
 * ============================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  bindHamburger();
  bindForm();
});

function bindHamburger() {
  const h = document.getElementById('hamburger');
  const n = document.getElementById('mainNav');
  if (!h || !n) return;
  h.addEventListener('click', () => n.classList.toggle('open'));
  n.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => n.classList.remove('open')));
}

function bindForm() {
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn     = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const resetBtn    = document.getElementById('resetBtn');
  if (!generateBtn) return;

  generateBtn.addEventListener('click', () => {
    const required = ['propTitle','propType','propCategory','propPrice','propAddress','propTown','propPostcode','propBeds','agentName','agentEmail'];
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

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = document.getElementById('outputCode').textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      });
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const entry   = buildEntry();
      const snippet = generateSnippet(entry);
      const full    = buildFullDataJs(snippet);
      const blob    = new Blob([full], { type: 'application/javascript' });
      const url     = URL.createObjectURL(blob);
      const a       = document.createElement('a');
      a.href = url; a.download = 'data.js'; a.click();
      URL.revokeObjectURL(url);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('#propertyForm input, #propertyForm select, #propertyForm textarea')
        .forEach(el => { el.value = el.tagName === 'SELECT' ? el.options[0].value : ''; });
      document.getElementById('outputPanel').style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('#propertyForm input, #propertyForm select').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('field-error'));
  });
}

function buildEntry() {
  const today  = new Date().toISOString().split('T')[0];
  const maxId  = propertyListings.reduce((m, p) => Math.max(m, p.id || 0), 0);
  const features = document.getElementById('propFeatures').value
    .split(',').map(f => f.trim()).filter(f => f.length > 0);

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
    features:    features,
    description: document.getElementById('propDesc').value.trim(),
    agent:       document.getElementById('agentName').value.trim(),
    email:       document.getElementById('agentEmail').value.trim(),
    added:       today,
    emoji:       document.getElementById('propEmoji').value
  };
}

function generateSnippet(e) {
  return '  /* ── LISTING ' + e.id + ' ─────────────────────────────────────────── */\n' +
    '  {\n' +
    '    id: ' + e.id + ',\n' +
    '    title: ' + JSON.stringify(e.title) + ',\n' +
    '    type: ' + JSON.stringify(e.type) + ',\n' +
    '    category: ' + JSON.stringify(e.category) + ',\n' +
    '    price: ' + JSON.stringify(e.price) + ',\n' +
    '    address: ' + JSON.stringify(e.address) + ',\n' +
    '    town: ' + JSON.stringify(e.town) + ',\n' +
    '    postcode: ' + JSON.stringify(e.postcode) + ',\n' +
    '    bedrooms: ' + e.bedrooms + ',\n' +
    '    bathrooms: ' + e.bathrooms + ',\n' +
    '    reception: ' + e.reception + ',\n' +
    '    sqft: ' + JSON.stringify(e.sqft) + ',\n' +
    '    features: ' + JSON.stringify(e.features) + ',\n' +
    '    description: ' + JSON.stringify(e.description) + ',\n' +
    '    agent: ' + JSON.stringify(e.agent) + ',\n' +
    '    email: ' + JSON.stringify(e.email) + ',\n' +
    '    added: ' + JSON.stringify(e.added) + ',\n' +
    '    emoji: ' + JSON.stringify(e.emoji) + '\n' +
    '  },';
}

function buildFullDataJs(snippet) {
  const existing = propertyListings.map(p =>
    '  {\n' +
    '    id: ' + p.id + ',\n' +
    '    title: ' + JSON.stringify(p.title) + ',\n' +
    '    type: ' + JSON.stringify(p.type) + ',\n' +
    '    category: ' + JSON.stringify(p.category) + ',\n' +
    '    price: ' + JSON.stringify(p.price) + ',\n' +
    '    address: ' + JSON.stringify(p.address) + ',\n' +
    '    town: ' + JSON.stringify(p.town) + ',\n' +
    '    postcode: ' + JSON.stringify(p.postcode) + ',\n' +
    '    bedrooms: ' + p.bedrooms + ',\n' +
    '    bathrooms: ' + p.bathrooms + ',\n' +
    '    reception: ' + (p.reception || 1) + ',\n' +
    '    sqft: ' + JSON.stringify(p.sqft || '') + ',\n' +
    '    features: ' + JSON.stringify(p.features || []) + ',\n' +
    '    description: ' + JSON.stringify(p.description) + ',\n' +
    '    agent: ' + JSON.stringify(p.agent) + ',\n' +
    '    email: ' + JSON.stringify(p.email) + ',\n' +
    '    added: ' + JSON.stringify(p.added) + ',\n' +
    '    emoji: ' + JSON.stringify(p.emoji || '🏠') + '\n' +
    '  }'
  ).join(',\n\n');

  return '/** Patricia Real Estate – Property Listings Data */\n\nconst propertyListings = [\n\n' +
    snippet + '\n\n' + existing + '\n\n]; // end propertyListings\n';
}
