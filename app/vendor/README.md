# App-owned Neodigm 5.0 auth pin

`neodigm55__v5_0.bma-auth-v1.js` is the public runtime fetched on October 28, 2026 from:
https://arcanus55.github.io/neodigm55/dist/neodigm55__v5_0.js

Upstream SHA-256: `79cc44e511195775eb8fd93e384adbca2e7bba236f80e6814a6eda3ed56ae63c`

Local SHA-256: `d8757c1277ee0d730cd3ba4938c3554cc5812a8d3727b1adc9182a7f3031a23f`

The original copyright and redistribution notice remain intact. Exactly one line differs: MVV Legit's fetch interceptor automatically signs out on HTTP 401 only, rather than HTTP 401 or 403. Valid sessions must survive a permission denial so the application can explain private-link, wrong-account, and admin-access failures. Response status and body remain unchanged.

Token ownership, token rotation, brand-header injection, route state, notification helpers and every other library function remain upstream code. No global CDN or external library repository is modified.

`src/core/vendorAuth.check.mjs` restores that one condition and verifies the upstream hash, then runs the actual auth class and LZString implementation against local transports. It verifies 403 retention, 401 demotion, current-token/brand headers and authenticated SSE fetch.

The active Vite entry `index.html` loads this public asset through `/vendor/`; Vite applies the configured base once. Do not combine `%BASE_URL%` with this classic-script public URL: the dev HTML transform prefixes the base again. Vite copies `public/vendor` into web and bundled-iOS output. The tournament-admin backend has the same bytes under `tmpl/vendor`, served by its versioned `/tournament-assets/` route. Increment the filename when changing this pinned asset; its admin response uses immutable caching.
