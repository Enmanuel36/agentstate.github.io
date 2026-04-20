/**
 * Patricia Real Estate – Main Page JavaScript
 * Handles: card rendering, search, filter chips, sort, modal + photo gallery
 */

const grid         = document.getElementById('listingsGrid');
const emptyStateSoon = document.getElementById('emptyStateSoon');
const emptyStateNoResults = document.getElementById('emptyStateNoResults');
const searchInput  = document.getElementById('searchInput');
const searchBtn    = document.getElementById('searchBtn');
const sortSelect   = document.getElementById('sortSelect');
const filterChips  = document.querySelectorAll('.filter-chip');
const statTotal    = document.getElementById('statTotal');
const countDisplay = document.getElementById('countDisplay');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody    = document.getElementById('modalBody');
const modalClose   = document.getElementById('modalClose');

let activeFilter = 'all';
let currentSort  = 'newest';
let searchQuery  = '';

document.addEventListener('DOMContentLoaded', () => {
  var visibleCount = propertyListings.filter(function(p){return !p.hidden;}).length;
  if (statTotal) statTotal.textContent = visibleCount;
  var statBar = document.getElementById('statTotalBar'); if (statBar) statBar.textContent = visibleCount;
  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get('filter');
  if (urlFilter) {
    activeFilter = urlFilter;
    filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === urlFilter));
  }
  renderListings();
  bindEvents();
});

/* ── Render ── */
function renderListings() {
  let items = propertyListings.filter(p => !p.hidden);
  if (activeFilter !== 'all') items = items.filter(p => p.type === activeFilter);
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    items = items.filter(p =>
      p.title.toLowerCase().includes(q) || p.address.toLowerCase().includes(q) ||
      p.town.toLowerCase().includes(q)  || p.postcode.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.features || []).some(f => f.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  }
  items = sortListings(items, currentSort);
  grid.innerHTML = '';
  if (countDisplay) countDisplay.textContent = items.length;
  if (items.length === 0) {
    var visibleListings = propertyListings.filter(function(p){return !p.hidden;});
    if (propertyListings.length === 0 || visibleListings.length === 0) {
      if (emptyStateSoon) emptyStateSoon.style.display = 'block';
      if (emptyStateNoResults) emptyStateNoResults.style.display = 'none';
    } else {
      if (emptyStateSoon) emptyStateSoon.style.display = 'none';
      if (emptyStateNoResults) emptyStateNoResults.style.display = 'block';
    }
  } else {
    if (emptyStateSoon) emptyStateSoon.style.display = 'none';
    if (emptyStateNoResults) emptyStateNoResults.style.display = 'none';
    items.forEach(p => grid.appendChild(createCard(p)));
  }
}

function sortListings(items, method) {
  return [...items].sort((a, b) => {
    switch (method) {
      case 'newest':     return new Date(b.added) - new Date(a.added);
      case 'price-asc':  return parsePriceValue(a.price) - parsePriceValue(b.price);
      case 'price-desc': return parsePriceValue(b.price) - parsePriceValue(a.price);
      case 'beds-desc':  return (b.bedrooms||0) - (a.bedrooms||0);
      default: return 0;
    }
  });
}

function parsePriceValue(price) {
  if (!price) return 0;
  const match = price.replace(/,/g,'').match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

/* ── Card Builder ── */
function createCard(p) {
  const card = document.createElement('article');
  card.className = 'listing-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', 'View details for ' + p.title);

  const badgeLabels = { 'to-let':'To Let', 'let-agreed':'Let Agreed' };
  const bedsLabel = p.bedrooms === 0 ? 'Studio' : p.bedrooms + ' bed' + (p.bedrooms !== 1 ? 's' : '');

  const imgContent = (p.photos && p.photos.length > 0)
    ? '<img src="' + p.photos[0] + '" alt="' + esc(p.title) + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display=\'none\'">'
    : '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;">' + (p.emoji||'🏠') + '</div>';

  card.innerHTML =
    '<div class="card-image">' +
      '<div class="card-image-bg ' + p.type + '" style="padding:0;overflow:hidden;">' + imgContent + '</div>' +
      '<span class="card-badge ' + p.type + '">' + (badgeLabels[p.type]||p.type) + '</span>' +
      (p.photos && p.photos.length > 1 ? '<span style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,0.55);color:#fff;font-size:11px;padding:3px 8px;border-radius:20px;">📷 ' + p.photos.length + ' photos</span>' : '') +
      '<button class="card-fav" aria-label="Save property" onclick="event.stopPropagation()">♡</button>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="card-price">' + esc(p.price) + '</div>' +
      '<h3 class="card-title">' + esc(p.title) + '</h3>' +
      '<p class="card-address">📍 ' + esc(p.address) + ', ' + esc(p.town) + ' ' + esc(p.postcode) + '</p>' +
      '<div class="card-specs">' +
        (p.bedrooms !== undefined ? '<span class="card-spec"><span class="card-spec-icon">🛏</span> ' + bedsLabel + '</span>' : '') +
        (p.bathrooms ? '<span class="card-spec"><span class="card-spec-icon">🚿</span> ' + p.bathrooms + ' bath' + (p.bathrooms!==1?'s':'') + '</span>' : '') +
        (p.sqft ? '<span class="card-spec"><span class="card-spec-icon">📐</span> ' + esc(p.sqft) + '</span>' : '') +
      '</div>' +
      '<p class="card-desc">' + esc(p.description) + '</p>' +
    '</div>' +
    '<div class="card-footer">' +
      '<div class="card-agent"><span>Listed by</span><strong>' + esc(p.agent) + '</strong></div>' +
      '<button class="btn btn-primary btn-sm card-enquire" data-id="' + p.id + '">Enquire</button>' +
    '</div>';

  card.addEventListener('click', e => {
    if (e.target.closest('.card-enquire')) {
      const id = e.target.closest('.card-enquire').dataset.id;
      const prop = propertyListings.find(x => x.id === parseInt(id));
      if (prop) window.location.href = 'contact.html?property=' + encodeURIComponent(prop.title);
      return;
    }
    openModal(p);
  });
  card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openModal(p); });
  return card;
}

/* ── Modal with Photo Gallery ── */
let galleryIndex = 0;
let galleryPhotos = [];

function openModal(p) {
  const badgeLabels = { 'to-let':'To Let', 'let-agreed':'Let Agreed' };
  const bedsLabel = p.bedrooms===0 ? 'Studio' : p.bedrooms + (p.bedrooms!==1?' Bedrooms':' Bedroom');
  const featurePills = (p.features||[]).map(f => '<span class="modal-feature">' + esc(f) + '</span>').join('');

  galleryPhotos = p.photos && p.photos.length > 0 ? p.photos : [];
  galleryIndex = 0;

  let galleryHTML = '';
  if (galleryPhotos.length > 0) {
    galleryHTML =
      '<div class="modal-gallery" id="modalGallery">' +
        '<div class="gallery-main">' +
          '<img id="galleryMainImg" src="' + galleryPhotos[0] + '" alt="Property photo" />' +
          (galleryPhotos.length > 1 ?
            '<button class="gallery-nav gallery-prev" id="galleryPrev">&#8249;</button>' +
            '<button class="gallery-nav gallery-next" id="galleryNext">&#8250;</button>' +
            '<div class="gallery-counter" id="galleryCounter">1 / ' + galleryPhotos.length + '</div>'
          : '') +
        '</div>' +
        (galleryPhotos.length > 1 ?
          '<div class="gallery-thumbs" id="galleryThumbs">' +
            galleryPhotos.map((ph,i) =>
              '<img src="' + ph + '" class="gallery-thumb' + (i===0?' active':'') + '" data-index="' + i + '" alt="Photo ' + (i+1) + '" />'
            ).join('') +
          '</div>'
        : '') +
      '</div>';
  } else {
    galleryHTML =
      '<div class="modal-image ' + p.type + '" style="font-size:5rem;">' +
        (p.emoji||'🏠') +
        '<button class="modal-close" id="modalCloseInner">✕</button>' +
      '</div>';
  }

  modalBody.innerHTML =
    galleryHTML +
    '<div class="modal-body">' +
      '<span class="modal-badge ' + p.type + '">' + (badgeLabels[p.type]||p.type) + '</span>' +
      '<div class="modal-price">' + esc(p.price) + '</div>' +
      '<h2 class="modal-title">' + esc(p.title) + '</h2>' +
      '<p class="modal-address">📍 ' + esc(p.address) + ', ' + esc(p.town) + ', ' + esc(p.postcode) + '</p>' +
      '<div class="modal-specs-grid">' +
        '<div class="modal-spec"><div class="spec-icon">🛏</div><label>Bedrooms</label><strong>' + bedsLabel + '</strong></div>' +
        '<div class="modal-spec"><div class="spec-icon">🚿</div><label>Bathrooms</label><strong>' + (p.bathrooms||'—') + '</strong></div>' +
        '<div class="modal-spec"><div class="spec-icon">🛋</div><label>Receptions</label><strong>' + (p.reception||'—') + '</strong></div>' +
        '<div class="modal-spec"><div class="spec-icon">📐</div><label>Floor Area</label><strong>' + esc(p.sqft||'—') + '</strong></div>' +
        '<div class="modal-spec"><div class="spec-icon">🏷</div><label>Category</label><strong>' + cap(p.category) + '</strong></div>' +
        '<div class="modal-spec"><div class="spec-icon">📅</div><label>Added</label><strong>' + formatDate(p.added) + '</strong></div>' +
      '</div>' +
      '<p class="modal-desc">' + esc(p.description) + '</p>' +
      '<div class="modal-features">' + featurePills + '</div>' +
      '<div class="modal-agent">' +
        '<div class="modal-agent-icon">👤</div>' +
        '<div class="modal-agent-info"><h4>' + esc(p.agent) + '</h4><p>Patricia Real Estate</p></div>' +
      '</div>' +
      '<div class="modal-actions">' +
        '<a href="contact.html?property=' + encodeURIComponent(p.title) + '" class="btn btn-primary">Enquire Now →</a>' +
        '<a href="mailto:' + esc(p.email) + '?subject=Property Enquiry: ' + encodeURIComponent(p.title) + '" class="btn btn-secondary">Email Agent</a>' +
      '</div>' +
    '</div>';

  if (galleryPhotos.length > 1) {
    document.getElementById('galleryPrev').addEventListener('click', e => { e.stopPropagation(); changeGallery(-1); });
    document.getElementById('galleryNext').addEventListener('click', e => { e.stopPropagation(); changeGallery(1); });
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', e => { e.stopPropagation(); setGallery(parseInt(thumb.dataset.index)); });
    });
  }

  const innerClose = document.getElementById('modalCloseInner');
  if (innerClose) innerClose.addEventListener('click', closeModal);

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function changeGallery(dir) {
  galleryIndex = (galleryIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  setGallery(galleryIndex);
}

function setGallery(idx) {
  galleryIndex = idx;
  const mainImg = document.getElementById('galleryMainImg');
  const counter = document.getElementById('galleryCounter');
  if (mainImg) mainImg.src = galleryPhotos[idx];
  if (counter) counter.textContent = (idx+1) + ' / ' + galleryPhotos.length;
  document.querySelectorAll('.gallery-thumb').forEach((t,i) => t.classList.toggle('active', i===idx));
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Events ── */
function bindEvents() {
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderListings();
    });
  });
  searchInput.addEventListener('input',   () => { searchQuery = searchInput.value; renderListings(); });
  searchBtn.addEventListener('click',     () => { searchQuery = searchInput.value; renderListings(); });
  searchInput.addEventListener('keydown', e => { if (e.key==='Enter') renderListings(); });
  sortSelect.addEventListener('change',   () => { currentSort = sortSelect.value; renderListings(); });
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target===modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key==='Escape') closeModal();
    if (e.key==='ArrowLeft'  && modalOverlay.classList.contains('open') && galleryPhotos.length>1) changeGallery(-1);
    if (e.key==='ArrowRight' && modalOverlay.classList.contains('open') && galleryPhotos.length>1) changeGallery(1);
  });
  // Hamburger handled by inline script in index.html for proper X animation and body scroll lock
}

/* ── Helpers ── */
function esc(str) {
  if (!str && str!==0) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function cap(str) { return str ? str.charAt(0).toUpperCase()+str.slice(1) : ''; }
function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}
