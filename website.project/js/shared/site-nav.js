(function() {
  function initSiteNav() {
    var hamburger = document.getElementById('hamburger');
    var mainNav = document.getElementById('mainNav');

    if (!hamburger || !mainNav || hamburger.dataset.navBound === 'true') {
      return;
    }

    function setNavOpen(isOpen) {
      mainNav.classList.toggle('open', isOpen);
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', function() {
      setNavOpen(!mainNav.classList.contains('open'));
    });

    mainNav.querySelectorAll('a, button').forEach(function(link) {
      link.addEventListener('click', function() {
        setNavOpen(false);
      });
    });

    hamburger.dataset.navBound = 'true';
  }

  window.initSiteNav = initSiteNav;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteNav);
  } else {
    initSiteNav();
  }
})();
