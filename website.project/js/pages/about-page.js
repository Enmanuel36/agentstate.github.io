(function() {
  function initAboutPage() {
    var params = new URLSearchParams(window.location.search);
    var from = params.get('from');
    var propLink = document.getElementById('propertiesLink');
    var enquireBtn = document.getElementById('enquireBtn');
    var contactPatriciaBtn = document.getElementById('contactPatriciaBtn');
    var getInTouchBtn = document.getElementById('getInTouchBtn');

    if (from === 'ecuador') {
      if (propLink) {
        propLink.href = 'ecuador/index.html';
        propLink.textContent = 'Projects';
      }
      if (enquireBtn) enquireBtn.href = 'uk/contact.html?from=ecuador';
      if (contactPatriciaBtn) contactPatriciaBtn.href = 'uk/contact.html?from=ecuador';
      if (getInTouchBtn) getInTouchBtn.href = 'uk/contact.html?from=ecuador';
      return;
    }

    if (from === 'spain') {
      if (propLink) {
        propLink.href = 'spain/index.html';
        propLink.textContent = 'Properties';
      }
      if (enquireBtn) enquireBtn.href = 'spain/contact.html?from=spain';
      if (contactPatriciaBtn) contactPatriciaBtn.href = 'spain/contact.html?from=spain';
      if (getInTouchBtn) getInTouchBtn.href = 'spain/contact.html?from=spain';
      return;
    }

    if (propLink) propLink.href = 'uk/index.html';
    if (enquireBtn) enquireBtn.href = 'uk/contact.html';
    if (contactPatriciaBtn) contactPatriciaBtn.href = 'uk/contact.html';
    if (getInTouchBtn) getInTouchBtn.href = 'uk/contact.html';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutPage);
  } else {
    initAboutPage();
  }
})();
