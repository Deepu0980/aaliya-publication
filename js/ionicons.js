// Loads Ionicons from CDN (module + nomodule)
(function loadIonicons() {
  try {
    var s1 = document.createElement('script');
    s1.type = 'module';
    s1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(s1);

    var s2 = document.createElement('script');
    s2.noModule = true;
    s2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    document.head.appendChild(s2);
  } catch (e) {
    // fail silently if blocked
    console.warn('ionicons load failed', e);
  }
})();
