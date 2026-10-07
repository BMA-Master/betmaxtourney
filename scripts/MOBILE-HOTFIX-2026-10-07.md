# October 7 mobile invitation and keyboard release

The Android TWA (`com.betmaxtourney.app`, shell version code 3) loads
https://www.betmaxtourney.com/app/. These changes require only web/API deployment.
No Android package, permissions, signing configuration, or shell behavior changed.

API source: `neodigm/machfive_bmacdev_rest` commit `0d08720`.
Frontend source fix: `BMA-Master/bma_tournament_core` commit `6e0e2e0`.
The shared notification registry was synchronized with the canonical API source.

## Production source mismatch

The existing production bundle was built from a dirty core checkout (`be63966`)
and subsequently received Android Back navigation fixes in site commit `534598d`.
Those full source changes are absent from the available core main branch. A full
rebuild from current main must not replace this release until the production
source is recovered/reconciled; it would omit previously shipped changes.

This release therefore preserves the existing production JS/CSS and applies
fourteen guarded, targeted replacements using `patch-mobile-release.py`. The
script validates both original asset hashes, requires each replacement to match
exactly once, and uses the reviewed source helpers without rewriting them.
`bma-release.json` retains the original build identity and records the hotfix
source commit, parent site commit, API commit, changed behavior and asset hashes.
Original assets remain available for existing sessions and rollback.

## Validation

- Core `npm run check`, shared-module sync and redesigned production build passed.
- API `npm run check` passed, including stale-invite route regressions and pool
  recovery checks: closed pools retire only the invitation, never add membership.
- Exact release classes, viewport controller, sheet toggle and CSS passed the
  Chromium mobile regression fixture in redesigned, v2 and legacy layouts.
- Checked keyboard resize/pan, native resize-content geometry, multiple picks,
  stake entry and retention, collapse blur, invite busy state and Started label.
- The existing Android drawer/history functions are byte-identical to production.
- A physical Pixel/Gboard test remains necessary; Chromium simulates keyboard
  viewport changes and does not reproduce the actual Android IME.

To reproduce the asset patch, check out core commit `6e0e2e0`, then run:

    python3 scripts/patch-mobile-release.py /path/to/bma_tournament_core
    node scripts/check-mobile-release.mjs /path/to/bma_tournament_core

The second command creates local regression fixtures in the core tests directory.
Run its Vite dev server and `/tmp/bmt-release-mobile-check.mjs` with Playwright.
For rollback, restore `app/index.html` and `app/bma-release.json` from parent site
commit `7423b01`; the previous hashed assets are retained.
