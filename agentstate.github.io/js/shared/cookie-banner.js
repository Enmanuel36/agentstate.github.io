(function() {
  function initCookieBanner() {
    var banner = document.getElementById('cookieBanner');
    if (!banner || banner.dataset.cookieBound === 'true') {
      return;
    }

    var displayMode = banner.dataset.displayMode || 'flex';

    function hideBanner() {
      banner.style.display = 'none';
    }

    function showBanner() {
      banner.style.display = displayMode;
    }

    banner.querySelectorAll('[data-cookie-action]').forEach(function(button) {
      button.addEventListener('click', function() {
        var action = button.getAttribute('data-cookie-action');
        if (action === 'accept') {
          localStorage.setItem('cookieConsent', 'accepted');
        } else if (action === 'decline') {
          localStorage.setItem('cookieConsent', 'declined');
        }
        hideBanner();
      });
    });

    if (!localStorage.getItem('cookieConsent')) {
      showBanner();
    } else {
      hideBanner();
    }

    banner.dataset.cookieBound = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieBanner);
  } else {
    initCookieBanner();
  }
})();
