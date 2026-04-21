(function() {
  var navState = { open: false };
  var lightboxState = { open: false, photos: [], index: 0 };

  function syncBodyScroll() {
    document.body.style.overflow = navState.open || lightboxState.open ? 'hidden' : '';
  }

  function initProjectNav() {
    var hamburger = document.getElementById('hamburger');
    var mainNav = document.getElementById('mainNav');

    if (!hamburger || !mainNav || hamburger.dataset.navBound === 'true') {
      return;
    }

    function setNavOpen(isOpen) {
      navState.open = isOpen;
      mainNav.classList.toggle('open', isOpen);
      hamburger.classList.toggle('open', isOpen);
      syncBodyScroll();
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

  function initBackToTop() {
    var backToTop = document.getElementById('backToTop');
    if (!backToTop || backToTop.dataset.bound === 'true') return;

    function syncBackToTop() {
      backToTop.classList.toggle('visible', window.scrollY > 480);
    }

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    syncBackToTop();
    window.addEventListener('scroll', syncBackToTop, { passive: true });
    backToTop.dataset.bound = 'true';
  }

  function syncPreferredLanguage() {
    if (!document.querySelector('.proj-hero')) return;
    if (localStorage.getItem('pre_lang') !== 'es') {
      localStorage.removeItem('pre_lang');
    }
  }

  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var galleryItems = Array.from(document.querySelectorAll('.proj-gallery-item'));
    var image = document.getElementById('lbImg');
    var counter = document.getElementById('lbCounter');
    var thumbs = document.getElementById('lbThumbs');
    var prev = document.getElementById('lbPrev');
    var next = document.getElementById('lbNext');
    var close = document.getElementById('lbClose');

    if (!lightbox || !image || !galleryItems.length || lightbox.dataset.bound === 'true') {
      return;
    }

    lightboxState.photos = galleryItems.map(function(item) {
      var img = item.querySelector('img');
      return img ? img.getAttribute('src') : '';
    }).filter(Boolean);

    if (!lightboxState.photos.length) {
      return;
    }

    function updateLightbox() {
      image.src = lightboxState.photos[lightboxState.index];
      if (counter) {
        counter.textContent = (lightboxState.index + 1) + ' / ' + lightboxState.photos.length;
      }

      if (thumbs) {
        thumbs.innerHTML = '';
        lightboxState.photos.forEach(function(photo, index) {
          var button = document.createElement('button');
          button.type = 'button';
          button.style.cssText = 'padding:0;background:none;border:none;cursor:pointer;';

          var thumb = document.createElement('img');
          thumb.src = photo;
          thumb.alt = 'Thumbnail ' + (index + 1);
          thumb.style.cssText =
            'width:56px;height:40px;object-fit:cover;border-radius:3px;display:block;opacity:' +
            (index === lightboxState.index ? '1' : '.45') +
            ';border:2px solid ' +
            (index === lightboxState.index ? '#C8A75A' : 'transparent') +
            ';';

          button.addEventListener('click', function() {
            lightboxState.index = index;
            updateLightbox();
          });

          button.appendChild(thumb);
          thumbs.appendChild(button);
        });
      }
    }

    function openLightbox(index) {
      lightboxState.index = index;
      lightboxState.open = true;
      updateLightbox();
      lightbox.style.display = 'flex';
      syncBodyScroll();
    }

    function closeLightbox() {
      lightboxState.open = false;
      lightbox.style.display = 'none';
      syncBodyScroll();
    }

    function changeLightbox(direction) {
      lightboxState.index =
        (lightboxState.index + direction + lightboxState.photos.length) % lightboxState.photos.length;
      updateLightbox();
    }

    galleryItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        openLightbox(index);
      });
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(index);
        }
      });
    });

    if (close) close.addEventListener('click', closeLightbox);
    if (prev) prev.addEventListener('click', function() { changeLightbox(-1); });
    if (next) next.addEventListener('click', function() { changeLightbox(1); });

    lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (!lightboxState.open) return;
      if (event.key === 'ArrowLeft') changeLightbox(-1);
      if (event.key === 'ArrowRight') changeLightbox(1);
      if (event.key === 'Escape') closeLightbox();
    });

    lightbox.dataset.bound = 'true';
  }

  function initProjectPage() {
    initProjectNav();
    initBackToTop();
    syncPreferredLanguage();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectPage);
  } else {
    initProjectPage();
  }
})();
