/**
 * ProxyLet – Shared Navigation Script
 * Used by pages that don't load main.js or contact.js
 * (privacy.html, terms.html)
 */
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var mainNav   = document.getElementById('mainNav');
  if (!hamburger || !mainNav) return;
  hamburger.addEventListener('click', function() {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      mainNav.classList.remove('open');
    });
  });
});
