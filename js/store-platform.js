// Shared, conservative store detection. Unknown devices keep the store chooser.
(function () {
    'use strict';
    window.BmtDownloads = {
        platform: function (device) {
            var ua = device.userAgent || '';
            if (/android/i.test(ua)) return 'android';
            if (/iPad|iPhone|iPod/i.test(ua) ||
                (device.platform === 'MacIntel' && device.maxTouchPoints > 1)) return 'ios';
            return null;
        }
    };
})();
