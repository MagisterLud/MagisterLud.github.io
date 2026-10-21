(function () {
  'use strict';

  var storageKey = 'site-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    var dark = theme !== 'light';
    root.setAttribute('data-theme', dark ? 'dark' : 'light');

    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', dark ? '#000000' : '#ffffff');
    }
  }

  var savedTheme = 'dark';
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  // Restore the preference before the stylesheets load to avoid a light flash.
  applyTheme(savedTheme);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(root.getAttribute('data-theme'));

    // Resolve URLs so internal pages keep their color and files stay distinct.
    document.querySelectorAll('a[href]').forEach(function (link) {
      try {
        var url = new URL(link.getAttribute('href'), document.baseURI);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

        var file = link.hasAttribute('download') || /\/files\//i.test(url.pathname) ||
          /\.(pdf|ps|eps|docx?|xlsx?|pptx?|od[tpst]|rtf|txt|tex|csv|tsv|json|xml|ya?ml|zip|rar|7z|tar|gz|bz2|mp3|wav|ogg|flac|m4a|mp4|webm|mov|midi?|mxl|musicxml|png|jpe?g|gif|svg|webp|ipynb)$/i.test(url.pathname);
        var internal = url.hostname === window.location.hostname ||
          url.hostname === 'magisterlud.github.io';

        if (file || !internal) link.setAttribute('data-link-kind', 'resource');
      } catch (error) {
        // Ignore malformed URLs without interrupting the theme control.
      }
    });

    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Keep the current page usable even if the preference cannot be saved.
      }
    });
  });

  window.addEventListener('storage', function (event) {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue);
    }
  });
}());
