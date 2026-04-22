(function() {
  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function createProjectCard(project) {
    var card = document.createElement('a');
    var contactHref = '../uk/contact.html?from=ecuador&property=' + encodeURIComponent(project.name || '');
    var projectHref = project.slug ? 'projects/' + encodeURIComponent(project.slug) + '.html' : contactHref;
    var photoCount = Array.isArray(project.photos) ? project.photos.length : 0;

    card.className = 'ec-project-card';
    card.href = projectHref;

    var imageWrap = document.createElement('div');
    imageWrap.className = 'ec-project-img';

    var fallback = document.createElement('span');
    fallback.textContent = project.emoji || '🌴';
    imageWrap.appendChild(fallback);

    if (photoCount > 0) {
      var img = document.createElement('img');
      img.src = project.photos[0];
      img.alt = project.name || 'Ecuador project';
      img.addEventListener('load', function() {
        fallback.style.display = 'none';
      });
      img.addEventListener('error', function() {
        img.remove();
      });
      imageWrap.appendChild(img);

      if (photoCount > 1) {
        var badge = document.createElement('span');
        badge.style.cssText = 'position:absolute;bottom:6px;right:8px;background:rgba(0,0,0,.55);color:#fff;font-size:10px;padding:2px 7px;border-radius:20px;';
        badge.textContent = '📷 ' + photoCount;
        imageWrap.appendChild(badge);
      }
    }

    var body = document.createElement('div');
    body.className = 'ec-project-body';
    body.innerHTML =
      '<div class="ec-project-type">' + esc(project.type) + '</div>' +
      '<div class="ec-project-name">' + esc(project.name) + '</div>' +
      '<div class="ec-project-location">📍 ' + esc(project.location) + '</div>' +
      '<div class="ec-project-desc">' + esc(project.desc) + '</div>';

    var footer = document.createElement('div');
    footer.className = 'ec-project-footer';
    footer.innerHTML =
      '<span class="ec-project-price">' + esc(project.price) + '</span>' +
      '<span class="ec-project-link">' + (project.slug ? 'View project →' : 'Enquire →') + '</span>';

    card.appendChild(imageWrap);
    card.appendChild(body);
    card.appendChild(footer);
    return card;
  }

  function getEcuadorProjects() {
    if (Array.isArray(window.ecuadorProjects)) return window.ecuadorProjects;
    if (typeof ecuadorProjects !== 'undefined' && Array.isArray(ecuadorProjects)) return ecuadorProjects;
    return [];
  }

  function initEcuadorHome() {
    var grid = document.getElementById('projectsGrid');
    if (!grid || grid.dataset.projectsBound === 'true') return;

    var allProjects = getEcuadorProjects();
    var visibleProjects = allProjects.filter(function(project) {
      return !project.hidden;
    });
    var countEl = document.getElementById('projectCount');

    if (countEl) {
      countEl.textContent = String(visibleProjects.length);
    }

    grid.innerHTML = '';

    if (!visibleProjects.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1 / -1;display:block;"><h3 style="color:#fff;">Projects coming soon</h3><p style="color:rgba(250,247,240,.65);">We are preparing the next Ecuador opportunities now.</p></div>';
    } else {
      visibleProjects.forEach(function(project) {
        grid.appendChild(createProjectCard(project));
      });
    }

    grid.dataset.projectsBound = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEcuadorHome);
  } else {
    initEcuadorHome();
  }
})();
