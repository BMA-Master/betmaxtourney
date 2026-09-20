// Smart link behind the download QR code: iPhone and iPad go to the App
// Store, every other device goes to the web app.
(function () {
    var ua = navigator.userAgent || '';
    var isIOS = /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var target = isIOS
        ? 'https://apps.apple.com/us/app/bet-max-tourney/id6805931195'
        : 'https://www.betmaxtourney.com/app/';
    window.location.replace(target);
})();
