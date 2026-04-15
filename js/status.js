(function () {
    'use strict';

    var API_BASE = 'https://machfive-bmacdev-rest.onrender.com';
    var HEALTH_URL = API_BASE + '/health';
    var DAEMON_URL = API_BASE + '/m5t/v5/appMeter/daemonstatus';
    var POLL_MS = 60 * 60 * 1000; // 1 hour

    // Friendly names for daemons
    var DAEMON_LABELS = {
        daemon_scores_sync_summary: 'Live Score Updates',
        daemon_reconcile_summary: 'Bet Settlement',
        daemon_sync_summary: 'Match Data Sync',
        daemon_tourney_summary: 'Tournament Lifecycle',
        daemon_odds_sync_sport: 'Odds Sync'
    };

    var overallEl = document.getElementById('status-overall');
    var overallLabelEl = document.getElementById('overall-label');
    var overallDotEl = document.getElementById('overall-dot');
    var lastCheckedEl = document.getElementById('status-last-checked');
    var refreshBtn = document.getElementById('status-refresh-btn');

    var apiCard = document.getElementById('status-api-card');
    var apiDot = document.getElementById('api-dot');
    var apiState = document.getElementById('api-state');
    var apiResponseTime = document.getElementById('api-response-time');
    var apiHttpCode = document.getElementById('api-http-code');

    var daemonsEl = document.getElementById('status-daemons');

    if (!overallEl) return;

    function setOverall(state, label) {
        overallEl.classList.remove('is-operational', 'is-degraded', 'is-down');
        overallDotEl.classList.remove('is-operational', 'is-degraded', 'is-down');
        overallDotEl.classList.remove('status-dot-pulse');
        if (state === 'operational') {
            overallEl.classList.add('is-operational');
            overallDotEl.classList.add('is-operational');
        } else if (state === 'degraded') {
            overallEl.classList.add('is-degraded');
            overallDotEl.classList.add('is-degraded');
        } else if (state === 'down') {
            overallEl.classList.add('is-down');
            overallDotEl.classList.add('is-down');
        }
        overallLabelEl.textContent = label;
    }

    function setCardState(dotEl, stateEl, state, label) {
        dotEl.classList.remove('is-operational', 'is-degraded', 'is-down');
        stateEl.classList.remove('is-operational', 'is-degraded', 'is-down');
        if (state === 'operational') {
            dotEl.classList.add('is-operational');
            stateEl.classList.add('is-operational');
        } else if (state === 'degraded') {
            dotEl.classList.add('is-degraded');
            stateEl.classList.add('is-degraded');
        } else if (state === 'down') {
            dotEl.classList.add('is-down');
            stateEl.classList.add('is-down');
        }
        stateEl.textContent = label;
    }

    function formatRelative(dateStr) {
        if (!dateStr) return '—';
        var then = new Date(dateStr).getTime();
        if (isNaN(then)) return '—';
        var diffSec = Math.max(0, Math.floor((Date.now() - then) / 1000));
        if (diffSec < 60) return diffSec + 's ago';
        var diffMin = Math.floor(diffSec / 60);
        if (diffMin < 60) return diffMin + 'm ago';
        var diffHr = Math.floor(diffMin / 60);
        if (diffHr < 24) return diffHr + 'h ' + (diffMin % 60) + 'm ago';
        var diffDay = Math.floor(diffHr / 24);
        return diffDay + 'd ago';
    }

    function daemonState(last_execution_utc, interval_minutes) {
        if (!last_execution_utc || !interval_minutes) return 'unknown';
        var ageMs = Date.now() - new Date(last_execution_utc).getTime();
        if (isNaN(ageMs) || ageMs < 0) return 'unknown';
        var ageMin = ageMs / 60000;
        if (ageMin <= interval_minutes * 2) return 'operational';
        if (ageMin <= interval_minutes * 3) return 'degraded';
        return 'down';
    }

    function renderDaemonCard(d) {
        var name = DAEMON_LABELS[d.caption] || d.caption;
        var state = daemonState(d.last_execution_utc, d.interval_minutes);
        var stateLabel = state === 'operational' ? 'OPERATIONAL'
            : state === 'degraded' ? 'DELAYED'
            : state === 'down' ? 'STALE'
            : 'UNKNOWN';

        var relative = formatRelative(d.last_execution_utc);
        var interval = d.interval_minutes ? 'every ' + d.interval_minutes + 'm' : '—';

        var card = document.createElement('div');
        card.className = 'status-card';
        card.innerHTML =
            '<div class="status-card-header">' +
                '<div class="status-card-title">' +
                    '<span class="status-dot is-' + state + '"></span>' +
                    '<h2>' + name + '</h2>' +
                '</div>' +
                '<span class="status-card-state is-' + state + '">' + stateLabel + '</span>' +
            '</div>' +
            '<p class="status-card-desc">' + (d.description || '') + '</p>' +
            '<div class="status-card-meta">' +
                '<div class="status-card-meta-item">' +
                    '<span class="status-meta-label">Last Run</span>' +
                    '<span class="status-meta-value">' + relative + '</span>' +
                '</div>' +
                '<div class="status-card-meta-item">' +
                    '<span class="status-meta-label">Schedule</span>' +
                    '<span class="status-meta-value">' + interval + '</span>' +
                '</div>' +
            '</div>';
        return { el: card, state: state };
    }

    async function checkHealth() {
        var start = performance.now();
        try {
            var res = await fetch(HEALTH_URL, { cache: 'no-store' });
            var elapsed = Math.round(performance.now() - start);
            apiResponseTime.textContent = elapsed + ' ms';
            apiHttpCode.textContent = String(res.status);
            if (res.ok) {
                setCardState(apiDot, apiState, 'operational', 'OPERATIONAL');
                return 'operational';
            }
            setCardState(apiDot, apiState, 'degraded', 'DEGRADED');
            return 'degraded';
        } catch (e) {
            apiResponseTime.textContent = '—';
            apiHttpCode.textContent = 'ERR';
            setCardState(apiDot, apiState, 'down', 'UNREACHABLE');
            return 'down';
        }
    }

    async function checkDaemons() {
        try {
            var res = await fetch(DAEMON_URL, { cache: 'no-store' });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            var json = await res.json();
            var list = (json && json.data) || [];

            daemonsEl.innerHTML = '';
            var worstState = 'operational';
            var order = ['operational', 'degraded', 'down', 'unknown'];

            list.forEach(function (d) {
                var card = renderDaemonCard(d);
                daemonsEl.appendChild(card.el);
                if (order.indexOf(card.state) > order.indexOf(worstState)) {
                    worstState = card.state;
                }
            });

            if (list.length === 0) {
                daemonsEl.innerHTML = '<div class="status-card is-error"><p class="status-error-msg">No daemons reported.</p></div>';
                return 'degraded';
            }

            return worstState === 'unknown' ? 'degraded' : worstState;
        } catch (e) {
            daemonsEl.innerHTML = '<div class="status-card is-error"><div class="status-card-header"><div class="status-card-title"><span class="status-dot is-down"></span><h2>Background Services</h2></div><span class="status-card-state is-down">UNREACHABLE</span></div><p class="status-error-msg">Unable to fetch daemon status.</p></div>';
            return 'down';
        }
    }

    function computeOverall(apiState, daemonsState) {
        var order = ['operational', 'degraded', 'down'];
        var worst = order[Math.max(order.indexOf(apiState), order.indexOf(daemonsState))];
        if (worst === 'operational') return { state: 'operational', label: 'Game On' };
        if (worst === 'degraded') return { state: 'degraded', label: 'Running Slow' };
        return { state: 'down', label: 'Timeout' };
    }

    async function runCheck() {
        refreshBtn.disabled = true;
        setOverall('unknown', 'Checking status…');
        overallDotEl.classList.add('status-dot-pulse');

        var results = await Promise.all([checkHealth(), checkDaemons()]);
        var overall = computeOverall(results[0], results[1]);
        setOverall(overall.state, overall.label);

        var now = new Date();
        lastCheckedEl.textContent = 'Last checked ' + now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        refreshBtn.disabled = false;
    }

    refreshBtn.addEventListener('click', runCheck);
    runCheck();
    setInterval(runCheck, POLL_MS);
})();
