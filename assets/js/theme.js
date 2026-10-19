(function () {
  'use strict';

  var storageKey = 'site-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    var dark = theme === 'dark';
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

  var savedTheme = 'light';
  try {
    savedTheme = window.localStorage.getItem(storageKey) || 'light';
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  // Restore the preference before the stylesheets load to avoid a light flash.
  applyTheme(savedTheme);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(root.getAttribute('data-theme'));

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
