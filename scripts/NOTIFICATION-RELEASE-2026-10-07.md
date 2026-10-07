# Notification release

Client source: BMA-Master/bma_tournament_core commit 422d6a2.
API candidate: neodigm/machfive_bmacdev_rest commit 176d04f.
Previous website: 24dd374.

The recovered client main (b4df8bf) now includes the production drawer-history
source. This release uses a full consumer build with the notification redesign,
category controls, versioned copy and active joined tournament Play labels.
The invitation, keyboard and quiet-card regression checks still pass.

Apply API design/notificationCopy.sql to bmacdev before deploying the API.
Then deploy the website. No TestFlight upload is authorized for this bundle.
The Android TWA continues loading /app/ and does not need a new store package.

Verification: full client/API checks, strict shared-module sync, production web
build, release asset hashes, local notification browser preview, and nine real
PostgreSQL integration checks (repeatable migration, concurrent revision conflicts,
transaction/audit rollback, immutable inbox/SSE copy, category gating, role checks,
and sanitized authenticated configuration reads).

Previous assets remain for existing sessions. The release manifest includes the
complete deployment inventory and identifies retained files separately. Roll back
app/index.html and app/bma-release.json to 24dd374 if needed; do not remove retained
assets. The additive database columns/table can stay during an API rollback.

Native-device verification of this notification change remains outstanding.
