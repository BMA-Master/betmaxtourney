// One permanent QR destination, with explicit choices for unknown devices.
(function () {
    'use strict';
    if (new URLSearchParams(window.location.search).get('choose') === '1') return;
    if (!window.BmtDownloads) return;
    var platform = window.BmtDownloads.platform(navigator);
    var link = platform && document.querySelector('[data-store="' + platform + '"]');
    if (link) window.location.replace(link.href);
})();
