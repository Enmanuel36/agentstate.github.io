(function() {
  function initLegalPage() {
    var lastUpdated = document.getElementById('lastUpdated');
    if (!lastUpdated) return;

    var storageKey = document.body.dataset.legalStorageKey;
    var fallback = document.body.dataset.legalUpdatedFallback || '11 April 2026';
    var stored = storageKey ? localStorage.getItem(storageKey) : '';

    lastUpdated.textContent = stored || fallback;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLegalPage);
  } else {
    initLegalPage();
  }
})();
