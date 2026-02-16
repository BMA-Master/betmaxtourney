// ============================================
// Bet Max Tourney - Main JavaScript
// Tournament Betting Platform
// ============================================

// Map RSS sport codes to icon classes
function mapSportToIcon(sportCode) {
    const sportMap = {
        'americanfootball_nfl': 'NFL',
        'basketball_nba': 'NBA',
        'baseball_mlb': 'MLB',
        'icehockey_nhl': 'NHL',
        'mma_mixed_martial_arts': 'MMA',
        'boxing_boxing': 'Boxing',
        'soccer_epl': 'EPL',
        'soccer_uefa': 'UEFA',
        'soccer_mls': 'MLS',
        'americanfootball_ncaaf': 'NCAAF',
        'americanfootball_cfl': 'CFL',
        'australianfootball_afl': 'AFL',
        'rugbyleague_nrl': 'NRL'
    };

    return sportMap[sportCode] || 'NFL'; // Default to NFL if not found
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bet Max Tourney loaded');

    // ===== Mobile Detection (no media queries) =====
    const MOBILE_BREAKPOINT = 768;
    function updateMobileClass() {
        document.body.classList.toggle('mobile', window.innerWidth <= MOBILE_BREAKPOINT);
    }
    updateMobileClass();
    window.addEventListener('resize', updateMobileClass);

    // ===== Tabulator background fix (mobile tap/scroll/gesture gray flash) =====
    let tabulatorBgDebounce;
    let tabulatorBgRaf;
    const TABULATOR_BG_INLINE = '#0a0a0a';
    function forceTabulatorBackgroundsInline() {
        const selectors = '.tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-row, .tabulator-cell, .tabulator-header, .tabulator-col, .tabulator-placeholder';
        document.querySelectorAll(selectors).forEach(el => {
            el.style.backgroundColor = TABULATOR_BG_INLINE;
        });
    }
    function debouncedForceTabulatorBackgrounds(delay) {
        clearTimeout(tabulatorBgDebounce);
        tabulatorBgDebounce = setTimeout(forceTabulatorBackgroundsInline, delay || 50);
    }
    function rafForceTabulatorBackgrounds() {
        cancelAnimationFrame(tabulatorBgRaf);
        tabulatorBgRaf = requestAnimationFrame(forceTabulatorBackgroundsInline);
    }
    window.addEventListener('resize', function() { debouncedForceTabulatorBackgrounds(100); });
    document.addEventListener('touchstart', rafForceTabulatorBackgrounds, { passive: true });
    document.addEventListener('touchmove', rafForceTabulatorBackgrounds, { passive: true });
    document.addEventListener('touchend', rafForceTabulatorBackgrounds, { passive: true });
    document.addEventListener('scroll', rafForceTabulatorBackgrounds, { passive: true });

    function observeTabulatorForBackgroundFix(element) {
        if (!element) return;
        if (window.MutationObserver) {
            const obs = new MutationObserver(forceTabulatorBackgroundsInline);
            obs.observe(element, { childList: true, subtree: true });
        }
        const tableholder = element.querySelector('.tabulator-tableholder');
        if (tableholder) {
            tableholder.addEventListener('scroll', rafForceTabulatorBackgrounds, { passive: true });
        }
    }

    // ===== Marquee mobile fix - force animation to run (iOS often defers until interaction) =====
    function kickMarqueeAnimation() {
        const track = document.getElementById('marquee-track');
        if (!track) return;
        track.style.animation = 'none';
        track.offsetHeight;
        track.style.animation = '';
    }
    document.addEventListener('touchstart', kickMarqueeAnimation, { once: true, passive: true });
    document.addEventListener('click', kickMarqueeAnimation, { once: true });
    setTimeout(kickMarqueeAnimation, 100);

    // ===== FanDuel Style Tab Navigation =====
    const tabButtons = document.querySelectorAll('.fd-tab-btn');
    const tabPanels = document.querySelectorAll('.fd-tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ===== Animate Headlines on Scroll =====
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const headlineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: unobserve after animation to prevent re-triggering
                headlineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all section headers
    const sectionHeadlines = document.querySelectorAll('.section-header h2');
    sectionHeadlines.forEach(headline => {
        headlineObserver.observe(headline);
    });

    // ===== Helper Functions for RSS Status Parsing =====

    // Parse status from RSS item (handles <status> element or description fallback)
    function parseStatus(item) {
        // Try to get status from dedicated field first
        const statusElement = item.querySelector('status');
        if (statusElement) {
            return statusElement.textContent.toLowerCase().trim();
        }

        // Fallback to description regex
        const description = item.querySelector('description')?.textContent || '';
        const statusMatch = description.match(/Status:\s*(\w+)/i);
        return statusMatch ? statusMatch[1].toLowerCase().trim() : 'upcoming';
    }

    // Check if completed tournament is within last 7 days
    function isRecentlyCompleted(status, endDate) {
        if (status !== 'completed') return true; // Not completed, always show
        if (!endDate) return false; // No end date for completed, don't show

        const now = new Date();
        const daysSinceEnd = (now - endDate) / (1000 * 60 * 60 * 24);
        return daysSinceEnd <= 7;
    }

    // ===== Live Tournament Marquee =====
    async function loadTournamentMarquee() {
        const marqueeTrack = document.getElementById('marquee-track');
        if (!marqueeTrack) return;

        try {
            const response = await fetch('https://machfive-bmacdev-rest.onrender.com/rss/tournaments.xml');
            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            if (items.length === 0) {
                marqueeTrack.innerHTML = '<div class="marquee-item"><span class="marquee-item-title">No live tournaments</span></div>';
                if (typeof kickMarqueeAnimation === 'function') kickMarqueeAnimation();
                return;
            }

            // Build marquee items (filter for LOCKED, upcoming, and recently completed)
            let marqueeHTML = '';
            items.forEach((item, index) => {
                const title = item.querySelector('title')?.textContent || 'Tournament';
                const description = item.querySelector('description')?.textContent || '';
                const pubDate = item.querySelector('pubDate')?.textContent || '';

                // Parse status using helper function
                const status = parseStatus(item);

                // Parse description for sport, start time, end time
                const sportMatch = description.match(/Sports?:\s*([^\n|]+)/i); // Match "Sport:" or "Sports:" and capture everything until newline or pipe
                const startTimeMatch = description.match(/Start(?:\s+Time)?:\s*([^\n|]+)/i); // Matches both "Start:" and "Start Time:"
                const endTimeMatch = description.match(/End(?:\s+Time)?:\s*([^\n|]+)/i); // Matches both "End:" and "End Time:"

                // Parse multiple sports from the RSS feed (e.g., "icehockey_nhl, boxing_boxing")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then map to icon classes
                    sports = sportMatch[1].split(',').map(s => {
                        const sportCode = s.trim().toLowerCase();
                        return mapSportToIcon(sportCode);
                    }).filter(s => s);
                }

                // If no sport in description, infer from title
                if (sports.length === 0) {
                    const titleLower = title.toLowerCase();
                    if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) sports = ['NBA'];
                    else if (titleLower.includes('football') || titleLower.includes('nfl')) sports = ['NFL'];
                    else if (titleLower.includes('baseball') || titleLower.includes('mlb')) sports = ['MLB'];
                    else if (titleLower.includes('hockey') || titleLower.includes('nhl')) sports = ['NHL'];
                    else if (titleLower.includes('soccer') || titleLower.includes('epl') || titleLower.includes('uefa')) sports = ['SOCCER'];
                    else if (titleLower.includes('college') || titleLower.includes('ncaa')) sports = ['NCAAF'];
                    else if (titleLower.includes('boxing') || titleLower.includes('boxer')) sports = ['BOXING'];
                    else if (titleLower.includes('mma') || titleLower.includes('ufc') || titleLower.includes('mixed martial')) sports = ['MMA'];
                }

                const startTimeStr = startTimeMatch ? startTimeMatch[1].trim() : '';
                const endDate = endTimeMatch ? new Date(endTimeMatch[1]) : null;

                // Parse start date properly
                let startDate = null;
                if (startTimeStr) {
                    startDate = new Date(startTimeStr);
                    if (isNaN(startDate.getTime())) {
                        // Try replacing UTC with GMT if parsing failed
                        const altDateStr = startTimeStr.replace(/UTC/i, 'GMT');
                        startDate = new Date(altDateStr);
                        if (isNaN(startDate.getTime())) {
                            startDate = null;
                        }
                    }
                }

                // Filter: Only show LOCKED, upcoming, and recently completed (last 7 days)
                if (!isRecentlyCompleted(status, endDate)) {
                    return; // Skip tournaments completed more than 7 days ago
                }

                // Calculate countdown for upcoming tournaments only
                let countdown = '';
                if (startDate && !isNaN(startDate.getTime())) {
                    const now = new Date();
                    const diff = startDate - now;

                    // Only show countdown if tournament hasn't started yet
                    if (diff > 0) {
                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                        if (hours > 24) {
                            const days = Math.floor(hours / 24);
                            countdown = `<span class="marquee-countdown">Locks in ${days}d ${hours % 24}h</span>`;
                        } else {
                            countdown = `<span class="marquee-countdown">Locks in ${hours}h ${minutes}m</span>`;
                        }
                    }
                }

                // Determine status display based on both RSS status and actual time
                let statusClass = 'marquee-status-live';
                let statusText = 'LIVE';
                let actualStatus = status;

                // Only override status if tournament marked as upcoming but has started
                if (status === 'upcoming' && startDate && !isNaN(startDate.getTime())) {
                    const now = new Date();
                    const diff = startDate - now;

                    console.log(`Tournament "${title}" - Status: ${status}, Start: ${startTimeStr} -> ${startDate}, Now: ${now}, Diff: ${diff}ms (${diff/3600000}h)`);

                    // If start time has passed, mark as live (RSS will update to completed when done)
                    if (diff < 0) {
                        actualStatus = 'live';
                    }
                } else if (!startDate) {
                    console.log(`Tournament "${title}" - No start time available, using RSS status: ${status}`);
                }

                if (actualStatus === 'locked' || actualStatus === 'live') {
                    // LOCKED or LIVE means active/live
                    statusClass = 'marquee-status-live';
                    statusText = 'LIVE';
                } else if (actualStatus === 'upcoming') {
                    statusClass = 'marquee-status-upcoming';
                    statusText = 'UPCOMING';
                } else if (actualStatus === 'completed') {
                    statusClass = 'marquee-status-completed';
                    statusText = 'COMPLETED';
                }

                // Generate sport icons HTML (icon + label for each sport)
                let sportsHTML = '';
                if (sports.length > 0) {
                    console.log(`Tournament "${title}" has sports:`, sports);
                    sports.forEach((sport, index) => {
                        let iconClass = sport;
                        if (sport === 'BOXING') iconClass = 'MMA';
                        if (sport === 'UEFA') iconClass = 'EPL';
                        sportsHTML += `<span class="sport-icon-small ${iconClass}"></span><span class="marquee-sport">${sport}</span>`;
                        if (index < sports.length - 1) {
                            sportsHTML += '<span class="marquee-separator">•</span>';
                        }
                    });
                }

                const metaParts = [];
                if (countdown) metaParts.push(countdown);
                if (sportsHTML) metaParts.push(sportsHTML);
                const metaHTML = metaParts.join('<span class="marquee-separator">•</span>');

                marqueeHTML += `
                    <div class="marquee-item" ${startDate ? `data-start-time="${startDate.toISOString()}"` : ''}>
                        <span class="marquee-status ${statusClass}">${statusText}</span>
                        <span class="marquee-item-title">${title}</span>
                        ${metaHTML ? `<span class="marquee-meta-divider">•</span><span class="marquee-item-meta">${metaHTML}</span>` : ''}
                    </div>
                `;
            });

            // Calculate how many times to duplicate based on item count
            // For smooth scrolling, we need enough content to fill at least 2x the viewport width
            const minItems = 8; // Minimum items needed for smooth scrolling
            const actualItems = items.length;
            let duplications = Math.max(2, Math.ceil(minItems / actualItems));

            // Build the final marquee content with appropriate duplications
            let finalMarqueeHTML = '';
            for (let i = 0; i < duplications; i++) {
                finalMarqueeHTML += marqueeHTML;
            }

            marqueeTrack.innerHTML = finalMarqueeHTML;
            if (typeof kickMarqueeAnimation === 'function') kickMarqueeAnimation();

        } catch (error) {
            console.error('Failed to load tournaments:', error);
            marqueeTrack.innerHTML = '<div class="marquee-item"><span class="marquee-item-title">Unable to load tournaments</span></div>';
            if (typeof kickMarqueeAnimation === 'function') kickMarqueeAnimation();
        }
    }

    // ===== Shared Tournament Data =====
    async function fetchTournamentData() {
        const response = await fetch('https://machfive-bmacdev-rest.onrender.com/rss/tournaments.xml');
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const tournaments = [];
        items.forEach((item) => {
            const title = item.querySelector('title')?.textContent || 'Tournament';
            const description = item.querySelector('description')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '#';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const guid = item.querySelector('guid')?.textContent || '';
            const status = parseStatus(item);

            const sportMatch = description.match(/Sports?:\s*([^\n|]+)/i);
            const startTimeMatch = description.match(/Start(?:\s+Time)?:\s*([^\n|]+)/i);
            const endTimeMatch = description.match(/End(?:\s+Time)?:\s*([^\n|]+)/i);
            const prizePoolMatch = description.match(/Prize Pool:\s*\$?([0-9,]+)/i);
            const matchesMatch = description.match(/(\d+)\s+matches/i);

            const prizePool = prizePoolMatch ? parseInt(prizePoolMatch[1].replace(/,/g, ''), 10) : 0;
            const matchCount = matchesMatch ? parseInt(matchesMatch[1], 10) : 0;

            let sports = [];
            if (sportMatch) {
                sports = sportMatch[1].split(',').map(s => {
                    const sportCode = s.trim().toLowerCase();
                    return mapSportToIcon(sportCode);
                }).filter(s => s);
            }
            if (sports.length === 0) {
                sports = inferSportsFromTitle(title);
            }

            const startTimeStr = startTimeMatch ? startTimeMatch[1].trim() : '';
            const endDate = endTimeMatch ? new Date(endTimeMatch[1]) : null;
            let startDate = null;
            if (startTimeStr) {
                startDate = new Date(startTimeStr);
                if (isNaN(startDate.getTime())) {
                    const altDateStr = startTimeStr.replace(/UTC/i, 'GMT');
                    startDate = new Date(altDateStr);
                    if (isNaN(startDate.getTime())) {
                        startDate = null;
                    }
                }
            }

            if (status === 'completed' && endDate && !isRecentlyCompleted(status, endDate)) {
                return;
            }

            tournaments.push({
                title,
                description,
                link,
                pubDate,
                guid,
                prizePool,
                startDate,
                endDate,
                matchCount,
                sport: sports[0] || '',
                sports,
                status
            });
        });

        return tournaments;
    }

    function buildTabulatorRows(tournaments) {
        return tournaments.map(t => {
            const timeInfo = getTimeUntil(t.startDate);
            const startTs = t.startDate ? t.startDate.getTime() : Number.MAX_SAFE_INTEGER;
            const endTs = t.endDate ? t.endDate.getTime() : null;
            const normalized = normalizeTournamentStatus({
                rawStatus: t.status,
                startTs,
                timeInfo
            });

            return {
                status: normalized.statusLabel,
                time: t.startDate ? formatDateTime(t.startDate) : 'TBD',
                startTs,
                statusRank: normalized.statusRank,
                title: t.title,
                titleText: t.title,
                sports: (t.sports || []).join(', '),
                sportsRaw: t.sports || [],
                sportFilter: normalizeSportFilter(t.sport || ''),
                sportsFilter: (t.sports || []).map(s => normalizeSportFilter(s)).filter(s => s),
                matches: t.matchCount || 0,
                td: t.prizePool ? t.prizePool.toLocaleString() : '—',
                link: t.link || '#',
                rawStatus: t.status,
                statusGroup: normalized.statusGroup
            };
        });
    }

    const TABULATOR_BG = '#0a0a0a';

    function forceTabulatorBackgrounds() {
        document.querySelectorAll('.tabulator-tableholder, .tabulator-table').forEach(el => {
            el.style.backgroundColor = TABULATOR_BG;
        });
        document.querySelectorAll('.tabulator-row').forEach(el => {
            el.style.backgroundColor = TABULATOR_BG;
        });
        document.querySelectorAll('.tabulator-cell').forEach(el => {
            el.style.backgroundColor = TABULATOR_BG;
        });
        document.querySelectorAll('.tabulator-header .tabulator-col').forEach(el => {
            el.style.backgroundColor = TABULATOR_BG;
        });
    }

    function initStartingSoonTable(rows) {
        const target = document.getElementById('starting-soon-table');
        if (!target || typeof Tabulator === 'undefined') {
            return;
        }

        // Ensure each row has proper status normalization before sorting
        const normalizedRows = rows.map(row => {
            const normalized = normalizeTournamentStatus({
                rawStatus: row.rawStatus,
                startTs: row.startTs,
                timeInfo: null
            });
            return {
                ...row,
                statusGroup: normalized.statusGroup,
                statusRank: normalized.statusRank,
                status: normalized.statusLabel
            };
        });

        // Sort the data before passing to Tabulator
        const data = sortRowsByStatusAndStart(normalizedRows);
        // Limit to first 15 rows for homepage
        const limitedData = data.slice(0, 15);
        const isMobile = window.innerWidth <= 768;
        const rowHeight = isMobile ? 84 : 56;
        // Remove responsiveLayout temporarily to fix the error
        const table = new Tabulator(target, {
            data: limitedData,
            layout: "fitColumns",
            sortMode: "local",
            height: "auto",
            // responsiveLayout: "collapse",  // Temporarily disabled
            // responsiveLayoutCollapseStartOpen: false,
            // responsiveLayoutCollapseFormatter: collapseFormatter,
            pagination: false, // Disable pagination for homepage
            // Let's try without initialSort to see if that's the issue
            // initialSort: [
            //     {column: "statusRank", dir: "asc"},
            //     {column: "startTs", dir: "asc"}
            // ],
            rowHeight,
            rowFormatter: rowAccentFormatter,
            columnDefaults: {
                minWidth: 80,  // Reduced from 120
                vertAlign: "middle"
            },
            columns: [
                {title: "Rank", field: "statusRank", visible: false, headerSort: false, sorter: "number", sorterParams: {alignEmptyValues: "bottom"}},
                {title: "Status", field: "status", headerSort: true, formatter: statusFormatter, sorter: statusSorter, minWidth: 150},
                {title: "Tournament", field: "title", headerSort: true, minWidth: 250, formatter: titleFormatter},
                {title: "Sports", field: "sports", headerSort: true, minWidth: 120, formatter: sportsFormatter},
                {title: "Matches", field: "matches", headerSort: true, hozAlign: "right", minWidth: 80},
                {title: "Tournament Dollars (TD$)", field: "td", headerSort: true, hozAlign: "right", minWidth: 150},
                {title: "", field: "link", headerSort: false, formatter: ctaFormatter, hozAlign: "right", minWidth: 120}
            ]
        });

        // Wait for table to be built before initializing toolbar
        table.on("tableBuilt", function(){
            // Pass full data for filtering, but table only shows limited data
            initStartingSoonToolbar(table, data.slice(0, 15));
            forceTabulatorBackgrounds();
            if (typeof observeTabulatorForBackgroundFix === 'function') observeTabulatorForBackgroundFix(target);
        });
        table.on("renderComplete", forceTabulatorBackgrounds);
    }

    function initTournamentsTable(rows) {
        const target = document.getElementById('tournaments-table');
        if (!target || typeof Tabulator === 'undefined') return;

        // For tournaments page, default to 40 items per page
        const sizeSelect = document.getElementById('items-per-page');
        const pageSize = sizeSelect ? parseInt(sizeSelect.value, 10) || 40 : 40;

        // Normalize and sort the data before passing to Tabulator
        const normalizedRows = rows.map(row => {
            const normalized = normalizeTournamentStatus({
                rawStatus: row.rawStatus,
                startTs: row.startTs,
                timeInfo: null
            });
            return {
                ...row,
                statusGroup: normalized.statusGroup,
                statusRank: normalized.statusRank,
                status: normalized.statusLabel
            };
        });

        // Sort the data before passing to Tabulator
        const data = sortRowsByStatusAndStart(normalizedRows);
        const isMobile = window.innerWidth <= 768;
        const rowHeight = isMobile ? 84 : 56;

        const table = new Tabulator(target, {
            data,
            layout: "fitColumns",
            sortMode: "local",
            height: "auto",
            // responsiveLayout disabled to avoid errors
            pagination: "local",
            paginationSize: pageSize,
            paginationSizeSelector: [20, 40, 60, 100],
            // No initialSort - we pre-sort the data
            rowHeight,
            rowFormatter: rowAccentFormatter,
            columnDefaults: {
                minWidth: 80,
                vertAlign: "middle"
            },
            columns: [
                {title: "Rank", field: "statusRank", visible: false, headerSort: false, sorter: "number", sorterParams: {alignEmptyValues: "bottom"}},
                {title: "Status", field: "status", headerSort: true, formatter: statusFormatter, sorter: statusSorter, minWidth: 150},
                {title: "Tournament", field: "title", headerSort: true, minWidth: 250, formatter: titleFormatter},
                {title: "Sports", field: "sports", headerSort: true, minWidth: 120, formatter: sportsFormatter},
                {title: "Matches", field: "matches", headerSort: true, hozAlign: "right", minWidth: 80},
                {title: "Tournament Dollars (TD$)", field: "td", headerSort: true, hozAlign: "right", minWidth: 150},
                {title: "", field: "link", headerSort: false, formatter: ctaFormatter, hozAlign: "right", minWidth: 120}
            ]
        });

        // Wait for table to be built before initializing filters
        table.on("tableBuilt", function(){
            initTournamentsFilters(table, rows);
            forceTabulatorBackgrounds();
            if (typeof observeTabulatorForBackgroundFix === 'function') observeTabulatorForBackgroundFix(target);
        });
        table.on("renderComplete", forceTabulatorBackgrounds);
    }

    function statusFormatter(cell) {
        const rowData = cell.getRow().getData();
        const normalized = normalizeTournamentStatus({
            rawStatus: rowData.rawStatus,
            startTs: rowData.startTs,
            timeInfo: null
        });
        const value = cell.getValue();
        const status = normalized.statusGroup || rowData.statusGroup || rowData.rawStatus;
        let statusClass = 'status-upcoming';
        let displayContent = value;

        if (status === 'completed') {
            statusClass = 'status-completed';
        } else if (status === 'live' || status === 'locked') {
            statusClass = 'status-live';
        } else if (status === 'upcoming' && rowData.startTs) {
            // For upcoming tournaments, add countdown
            const now = Date.now();
            const timeRemaining = rowData.startTs - now;

            if (timeRemaining > 0) {
                const countdown = getCountdownString(timeRemaining);
                displayContent = `UPCOMING • ${countdown}`;
                statusClass = 'status-upcoming with-countdown';

                // Store timestamp for live updates
                if (!cell.getElement().dataset.startTime) {
                    cell.getElement().dataset.startTime = rowData.startTs;
                }
            }
        }

        return `<span class="tab-status ${statusClass}">${displayContent}</span>`;
    }

    function getCountdownString(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days}d ${hours % 24}h`;
        } else if (hours > 0) {
            return `${hours}h ${minutes % 60}m`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return 'Soon';
        }
    }

    function statusSorter(a, b, aRow, bRow) {
        const aData = aRow.getData();
        const bData = bRow.getData();
        const aNormalized = normalizeTournamentStatus({
            rawStatus: aData.rawStatus,
            startTs: aData.startTs,
            timeInfo: null
        });
        const bNormalized = normalizeTournamentStatus({
            rawStatus: bData.rawStatus,
            startTs: bData.startTs,
            timeInfo: null
        });
        return aNormalized.statusRank - bNormalized.statusRank;
    }

    function ctaFormatter(cell) {
        const link = cell.getValue();
        const rowData = cell.getRow().getData();

        // Get statusGroup from row data - it should be set during initialization
        let statusGroup = rowData.statusGroup;

        // If statusGroup is not set, derive it from rawStatus
        if (!statusGroup) {
            const status = (rowData.rawStatus || '').toLowerCase();
            if (status === 'completed') {
                statusGroup = 'completed';
            } else if (status === 'live' || status === 'locked') {
                statusGroup = 'live';
            } else {
                statusGroup = 'upcoming';
            }
        }

        // Determine button text and style based on status
        const isUpcoming = statusGroup === 'upcoming';
        const buttonText = isUpcoming ? 'Enter Free' : 'View Results';
        const buttonClass = isUpcoming ? 'btn btn-primary btn-small' : 'btn btn-secondary btn-small';

        return `<a class="${buttonClass}" href="${link}">${buttonText}</a>`;
    }

    function timeFormatter(cell) {
        const data = cell.getRow().getData();
        return data.time || 'TBD';
    }

    function sportsFormatter(cell) {
        const rowData = cell.getRow().getData();
        const sportsArray = rowData.sportsRaw || [];

        if (sportsArray.length === 0) {
            return '';
        }

        // Create HTML with icon and text for each sport
        const sportsHTML = sportsArray.map(sport => {
            // Map sport codes to display names if needed
            const displayName = sport;
            const iconClass = sport === 'SOCCER' ? 'EPL' : sport; // Use EPL icon for soccer

            return `<span class="sport-with-icon">
                <span class="sport-icon-small ${iconClass}"></span>
                <span class="sport-name">${displayName}</span>
            </span>`;
        }).join(' ');

        return sportsHTML;
    }

    function titleFormatter(cell) {
        const data = cell.getRow().getData();
        const title = data.title || '';
        const safeTitle = title.replace(/"/g, '&quot;');
        return `<span class="tab-title" title="${safeTitle}">${title}</span>`;
    }

    function collapseFormatter(data) {
        if (!data || !data.length) return '';
        const rows = data.map(item => {
            const value = typeof item.value === 'string' ? item.value : `${item.value}`;
            return `
                <div class="tab-collapse-row">
                    <span class="tab-collapse-label">${item.title}</span>
                    <span class="tab-collapse-value">${value}</span>
                </div>
            `;
        }).join('');
        return `<div class="tab-collapse">${rows}</div>`;
    }

    function sortRowsByStatusAndStart(rows) {
        return [...rows].sort((a, b) => {
            // Ensure statusRank is always a number (1=live, 2=upcoming, 3=completed)
            const rankA = typeof a.statusRank === 'number' ? a.statusRank : 3;
            const rankB = typeof b.statusRank === 'number' ? b.statusRank : 3;

            // First sort by status rank (live first, then upcoming, then completed)
            if (rankA !== rankB) return rankA - rankB;

            // Within same status group, sort by start time
            const startA = typeof a.startTs === 'number' ? a.startTs : Number.MAX_SAFE_INTEGER;
            const startB = typeof b.startTs === 'number' ? b.startTs : Number.MAX_SAFE_INTEGER;
            return startA - startB;
        });
    }

    function rowAccentFormatter(row) {
        const data = row.getData();
        const element = row.getElement();
        if (!element) return;
        element.classList.remove('row-live', 'row-upcoming', 'row-completed');
        if (data.statusGroup === 'live') element.classList.add('row-live');
        if (data.statusGroup === 'upcoming') element.classList.add('row-upcoming');
        if (data.statusGroup === 'completed') element.classList.add('row-completed');
    }

    function normalizeTournamentStatus({ rawStatus, startTs, timeInfo }) {
        const status = (rawStatus || '').toLowerCase();
        const now = Date.now();
        let group = 'upcoming';

        // First check if it's explicitly completed
        if (status === 'completed') {
            group = 'completed';
        }
        // Then check if it's explicitly live or locked
        else if (status === 'live' || status === 'locked') {
            group = 'live';
        }
        // Then check if start time has passed (makes it live)
        else if (typeof startTs === 'number' && startTs <= now) {
            group = 'live';
        }
        // Otherwise it's upcoming
        else {
            group = 'upcoming';
        }

        const rank = group === 'live' ? 1 : group === 'upcoming' ? 2 : 3;
        const label = group === 'completed' ? 'COMPLETED' : group === 'live' ? 'LOCKED • LIVE' : (timeInfo?.badge || 'UPCOMING');


        return { statusGroup: group, statusRank: Number(rank), statusLabel: label };
    }

    function initStartingSoonToolbar(table, data) {
        const searchInput = document.getElementById('starting-soon-search');
        const filterButtons = document.querySelectorAll('.starting-soon-toolbar .toolbar-pill');
        if (!table) return;

        let currentStatus = 'all';
        let currentQuery = '';

        function applyFilters() {
            table.setFilter((row) => {
                const normalized = normalizeTournamentStatus({
                    rawStatus: row.rawStatus,
                    startTs: row.startTs,
                    timeInfo: null
                });

                // Status filter
                const matchesStatus = currentStatus === 'all' || normalized.statusGroup === currentStatus;

                // Search filter
                const query = currentQuery.toLowerCase();
                const matchesQuery = !query ||
                    (row.title || '').toLowerCase().includes(query) ||
                    (row.sports || '').toLowerCase().includes(query);

                return matchesStatus && matchesQuery;
            });

            // Don't call setSort here - the initialSort already handles sorting
            // The sort order will be maintained automatically
        }

        // Set up search input
        if (searchInput) {
            searchInput.addEventListener('input', (event) => {
                currentQuery = event.target.value || '';
                applyFilters();
            });
        }

        // Set up filter buttons
        if (filterButtons.length > 0) {
            filterButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    // Update active state
                    filterButtons.forEach((btn) => {
                        btn.classList.remove('active');
                        btn.setAttribute('aria-selected', 'false');
                    });
                    button.classList.add('active');
                    button.setAttribute('aria-selected', 'true');

                    // Update filter
                    currentStatus = button.dataset.status || 'all';
                    applyFilters();
                });
            });
        }

        // Don't apply filters initially - the table already has the sorted data
    }

    function normalizeStatus(status, timeInfo) {
        if (status === 'completed') return 'completed';
        if (status === 'live' || status === 'locked') return 'live';
        if (timeInfo && timeInfo.isLocked) return 'live';
        return 'upcoming';
    }

    function normalizeSportFilter(sport) {
        if (!sport) return '';
        const value = sport.toUpperCase();
        if (value === 'EPL' || value === 'UEFA' || value === 'MLS' || value === 'SOCCER') {
            return 'SOCCER';
        }
        return value;
    }

    function inferSportsFromTitle(title) {
        const titleLower = (title || '').toLowerCase();
        if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) return ['NBA'];
        if (titleLower.includes('football') || titleLower.includes('nfl')) return ['NFL'];
        if (titleLower.includes('baseball') || titleLower.includes('mlb')) return ['MLB'];
        if (titleLower.includes('hockey') || titleLower.includes('nhl')) return ['NHL'];
        if (titleLower.includes('soccer') || titleLower.includes('epl') || titleLower.includes('uefa')) return ['SOCCER'];
        if (titleLower.includes('college') || titleLower.includes('ncaa')) return ['NCAAF'];
        if (titleLower.includes('boxing') || titleLower.includes('boxer')) return ['BOXING'];
        if (titleLower.includes('mma') || titleLower.includes('ufc') || titleLower.includes('mixed martial')) return ['MMA'];
        return [];
    }

    function initTournamentsFilters(table, rows) {
        const tournamentsPage = document.querySelector('.tournaments-page');
        if (!tournamentsPage || !table) return;

        const filterTabs = document.querySelectorAll('.filter-tab');
        const sportPills = document.querySelectorAll('.sport-pill');
        const sortSelect = document.getElementById('sort-select');
        const sizeSelect = document.getElementById('items-per-page');
        const emptyState = document.getElementById('empty-state');
        const tableEl = document.getElementById('tournaments-table');

        ['pagination-controls', 'pagination-controls-top'].forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.style.display = 'none';
            }
        });

        const counts = {
            all: rows.length,
            live: rows.filter(r => r.statusGroup === 'live').length,
            upcoming: rows.filter(r => r.statusGroup === 'upcoming').length,
            completed: rows.filter(r => r.statusGroup === 'completed').length
        };
        const countAll = document.getElementById('count-all');
        const countLive = document.getElementById('count-live');
        const countUpcoming = document.getElementById('count-upcoming');
        const countCompleted = document.getElementById('count-completed');
        if (countAll) countAll.textContent = counts.all;
        if (countLive) countLive.textContent = counts.live;
        if (countUpcoming) countUpcoming.textContent = counts.upcoming;
        if (countCompleted) countCompleted.textContent = counts.completed;

        let currentStatus = 'all';
        let currentSport = 'all';

        function applyFilters() {
            table.setFilter((data) => {
                const statusMatch = currentStatus === 'all' || data.statusGroup === currentStatus;
                const sportMatch = currentSport === 'all' || data.sportFilter === currentSport || (data.sportsFilter || []).includes(currentSport);
                return statusMatch && sportMatch;
            });
        }

        function updateEmptyState() {
            if (!emptyState || !tableEl) return;
            const visible = table.getDataCount("active");
            if (visible === 0) {
                emptyState.style.display = 'flex';
                tableEl.style.display = 'none';
            } else {
                emptyState.style.display = 'none';
                tableEl.style.display = 'block';
            }
        }

        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                filterTabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                currentStatus = this.dataset.filter;
                applyFilters();
                updateEmptyState();
            });
        });

        sportPills.forEach(pill => {
            pill.addEventListener('click', function() {
                sportPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                currentSport = this.dataset.sport;
                applyFilters();
                updateEmptyState();
            });
        });

        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                // Always maintain statusRank as primary sort
                switch (this.value) {
                    case 'time-desc':
                        table.setSort([
                            {column: 'statusRank', dir: 'asc'},
                            {column: 'startTs', dir: 'desc'}
                        ]);
                        break;
                    case 'participants-desc':
                        table.setSort([
                            {column: 'statusRank', dir: 'asc'},
                            {column: 'matches', dir: 'desc'}
                        ]);
                        break;
                    case 'sport':
                        table.setSort([
                            {column: 'statusRank', dir: 'asc'},
                            {column: 'sports', dir: 'asc'}
                        ]);
                        break;
                    case 'status':
                        // Default status sort
                        table.setSort([
                            {column: 'statusRank', dir: 'asc'},
                            {column: 'startTs', dir: 'asc'}
                        ]);
                        break;
                    case 'time-asc':
                    default:
                        table.setSort([
                            {column: 'statusRank', dir: 'asc'},
                            {column: 'startTs', dir: 'asc'}
                        ]);
                        break;
                }
            });
        }

        if (sizeSelect) {
            sizeSelect.addEventListener('change', function() {
                const size = parseInt(this.value, 10) || 10;
                table.setPageSize(size);
            });
        }

        table.on("dataFiltered", updateEmptyState);
        updateEmptyState();
    }

    async function initTournamentTables() {
        try {
            const tournaments = await fetchTournamentData();
            const rows = buildTabulatorRows(tournaments);

            initStartingSoonTable(rows);
            initTournamentsTable(rows);
        } catch (error) {
            console.error('Tabulator init failed:', error);
        }
    }

    // Load marquee and tables on page load
    loadTournamentMarquee();
    initTournamentTables();

    // Refresh marquee every 60 seconds
    setInterval(loadTournamentMarquee, 60000);

    // Mobile Menu Drawer Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    body.appendChild(overlay);

    // Toggle mobile menu
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');

            if (isActive) {
                // Close menu
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                menuToggle.classList.add('active');
                menuToggle.setAttribute('aria-expanded', 'true');
                body.classList.add('menu-open');
                body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            });
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip empty hash links
            if (href === '#' || href === '#contact') {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80; // Height of sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('header');

    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // Form validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = this.querySelector('[name="name"]');
            const email = this.querySelector('[name="email"]');
            const message = this.querySelector('[name="message"]');

            let isValid = true;

            if (name && !name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            }

            if (email && !isValidEmail(email.value)) {
                showError(email, 'Valid email is required');
                isValid = false;
            }

            if (message && !message.value.trim()) {
                showError(message, 'Message is required');
                isValid = false;
            }

            if (isValid) {
                // Form is valid - submit or process
                console.log('Form is valid - ready to submit');
                // Add your form submission logic here
            }
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper function to show error
    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message') || document.createElement('span');

        error.className = 'error-message';
        error.textContent = message;
        error.style.color = '#e94560';
        error.style.fontSize = '0.875rem';
        error.style.marginTop = '0.25rem';
        error.style.display = 'block';

        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(error);
        }

        input.style.borderColor = '#e94560';

        // Remove error on input
        input.addEventListener('input', function() {
            error.remove();
            input.style.borderColor = '';
        }, { once: true });
    }

    // Add loading state to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add any button click analytics or tracking here
            console.log('Button clicked:', this.textContent);
        });
    });

    // Lazy load images (if needed in the future)
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // ============================================
    // Tournament Rotation (How to Compete Section)
    // ============================================
    const tournaments = [
        { title: 'SUNDAY MEGA SLATE', budget: '10,000', players: '487', status: 'LIVE' },
        { title: 'MONDAY NIGHT SHOWDOWN', budget: '10,000', players: '312', status: 'LIVE' },
        { title: 'WEEKEND WARRIOR', budget: '10,000', players: '156', status: 'FILLING' },
        { title: 'FRIDAY NIGHT LIGHTS', budget: '10,000', players: '234', status: 'LIVE' },
        { title: 'CHAMPIONSHIP CHASE', budget: '10,000', players: '89', status: 'LIVE' },
        { title: 'MIDWEEK MADNESS', budget: '10,000', players: '203', status: 'LIVE' },
        { title: 'PRIME TIME PICKS', budget: '10,000', players: '378', status: 'LIVE' }
    ];

    let currentTournamentIndex = 0;

    function rotateTournament() {
        const titleEl = document.getElementById('rotating-title');
        const budgetEl = document.getElementById('rotating-budget');
        const playersEl = document.getElementById('rotating-players');
        const statusEl = document.getElementById('rotating-status');

        if (!titleEl || !budgetEl || !playersEl || !statusEl) return;

        // Fade out
        [titleEl, budgetEl, playersEl, statusEl].forEach(el => {
            el.style.opacity = '0';
        });

        setTimeout(() => {
            // Update to next tournament
            currentTournamentIndex = (currentTournamentIndex + 1) % tournaments.length;
            const tournament = tournaments[currentTournamentIndex];

            titleEl.textContent = tournament.title;
            budgetEl.textContent = tournament.budget;
            playersEl.textContent = tournament.players;
            statusEl.textContent = tournament.status;

            // Update status color
            if (tournament.status === 'LIVE') {
                statusEl.style.color = 'var(--bma-green)';
            } else if (tournament.status === 'FILLING') {
                statusEl.style.color = 'var(--bma-yellow)';
            } else {
                statusEl.style.color = 'rgba(255, 255, 255, 0.5)';
            }

            // Fade in
            [titleEl, budgetEl, playersEl, statusEl].forEach(el => {
                el.style.opacity = '1';
            });
        }, 400);
    }

    // Initialize rotation if elements exist
    if (document.getElementById('rotating-title')) {
        // Add transitions
        ['rotating-title', 'rotating-budget', 'rotating-players', 'rotating-status'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.transition = 'opacity 0.4s ease';
            }
        });

        // Set initial status color
        const statusEl = document.getElementById('rotating-status');
        if (statusEl) {
            statusEl.style.color = 'var(--bma-green)';
        }

        // Start rotating every 4 seconds
        setInterval(rotateTournament, 4000);
    }

    // ============================================
    // Live Tournament Feed
    // ============================================
    async function loadLiveTournaments() {
        console.log('loadLiveTournaments called');
        const tournamentList = document.querySelector('.tournament-list');
        if (!tournamentList) {
            console.error('tournament-list element not found');
            return;
        }
        console.log('tournament-list found, loading data...');

        // Show loading state
        tournamentList.innerHTML = `
            <div class="tournaments-loading">
                <div class="loading-spinner">
                    <div class="spinner-ring"></div>
                    <div class="spinner-ring"></div>
                </div>
                <p class="loading-text">Loading Live Tournaments...</p>
            </div>
        `;

        try {
            const response = await fetch('https://machfive-bmacdev-rest.onrender.com/rss/tournaments.xml');

            if (!response.ok) {
                throw new Error('Failed to fetch tournaments');
            }

            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

            const items = xmlDoc.querySelectorAll('item');
            console.log(`Found ${items.length} tournament items in XML`);
            const tournaments = [];

            items.forEach(item => {
                const title = item.querySelector('title')?.textContent || 'Untitled Tournament';
                const description = item.querySelector('description')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '#';
                const guid = item.querySelector('guid')?.textContent || '';
                const pubDate = item.querySelector('pubDate')?.textContent || '';

                // Parse status using helper function
                const status = parseStatus(item);

                // FILTER: Include upcoming and live tournaments for "Tournaments Starting Soon"
                if (status !== 'upcoming' && status !== 'live' && status !== 'locked') {
                    return; // Skip completed tournaments
                }

                // Parse description for prize pool, start time, etc
                const prizeMatch = description.match(/Prize Pool: \$(\d+)/);
                const startMatch = description.match(/Start(?:\s+Time)?:\s*([^\n|]+)/i);
                const matchesMatch = description.match(/(\d+) matches/);
                const sportMatch = description.match(/Sports?:\s*([^\n|]+)/i); // Match "Sport:" or "Sports:" and capture everything until newline or pipe

                const prizePool = prizeMatch ? parseInt(prizeMatch[1]) : 0;
                const startDateStr = startMatch ? startMatch[1].trim() : '';
                const matchCount = matchesMatch ? parseInt(matchesMatch[1]) : 0;

                // Parse start date - handle various formats
                let startDate = null;
                if (startDateStr) {
                    // Try parsing the date string
                    startDate = new Date(startDateStr);

                    // Log for debugging
                    console.log(`Parsing date for ${title}: "${startDateStr}" -> ${startDate}`);

                    // If invalid, try alternative parsing
                    if (isNaN(startDate.getTime())) {
                        // Try replacing UTC with GMT
                        const altDateStr = startDateStr.replace(/UTC/i, 'GMT');
                        startDate = new Date(altDateStr);

                        if (isNaN(startDate.getTime())) {
                            console.warn(`Could not parse date: ${startDateStr}`);
                            startDate = null;
                        }
                    }
                }

                // Parse multiple sports from the RSS feed (e.g., "icehockey_nhl, boxing_boxing")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then map to icon classes
                    sports = sportMatch[1].split(',').map(s => {
                        const sportCode = s.trim().toLowerCase();
                        return mapSportToIcon(sportCode);
                    }).filter(s => s);
                }

                // If no sport in description, infer from title
                if (sports.length === 0) {
                    const titleLower = title.toLowerCase();
                    if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) sports = ['NBA'];
                    else if (titleLower.includes('football') || titleLower.includes('nfl')) sports = ['NFL'];
                    else if (titleLower.includes('baseball') || titleLower.includes('mlb')) sports = ['MLB'];
                    else if (titleLower.includes('soccer')) sports = ['SOCCER'];
                    else if (titleLower.includes('hockey') || titleLower.includes('nhl')) sports = ['NHL'];
                    else if (titleLower.includes('boxing') || titleLower.includes('boxer')) sports = ['BOXING'];
                    else if (titleLower.includes('mma') || titleLower.includes('ufc') || titleLower.includes('mixed martial')) sports = ['MMA'];
                    else sports = ['SPORTS']; // Default fallback
                }

                // For filtering purposes, use the first sport
                const sport = sports[0] || 'SPORTS';

                tournaments.push({
                    title,
                    description,
                    link,
                    guid,
                    pubDate,
                    prizePool,
                    startDate,
                    matchCount,
                    sport,
                    sports, // Array of all sports
                    status
                });
            });

            // Sort by start date (soonest first)
            tournaments.sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return a.startDate - b.startDate;
            });

            // Take first 3 upcoming tournaments
            const displayTournaments = tournaments.slice(0, 3);
            console.log('Displaying tournaments:', displayTournaments);

            // Build tournament HTML
            const tournamentHTML = displayTournaments.map(t => {
                const timeUntil = getTimeUntil(t.startDate);
                const matchCount = t.matchCount || 0;

                // Generate sport icons HTML for homepage tournament cards
                const sportsArray = t.sports || [t.sport];
                const sportIconsHTML = sportsArray.map(sport =>
                    `<div class="sport-icon ${sport}"></div><span class="sport-label">${sport}</span>`
                ).join('');

                // Determine state class and badge classes
                const stateClass = timeUntil.isLocked ? 'state-locked' : 'state-upcoming';
                const badgeClass = timeUntil.isLocked ? 'time-badge locked-live' : `time-badge countdown ${timeUntil.isUrgent ? 'urgent-pulse' : ''}`;
                const buttonClass = timeUntil.isLocked ? 'btn btn-secondary' : 'btn btn-primary';

                return `
                    <div class="tournament-item tournament-card ${stateClass}" ${t.startDate ? `data-start-time="${t.startDate.toISOString()}"` : ''}>
                        <div class="card-status">
                            ${timeUntil.isLocked ? `
                                <span class="time-badge-dual">
                                    <span class="time-badge locked">LOCKED</span>
                                    <span class="time-badge live"><span class="live-dot"></span>LIVE</span>
                                </span>
                            ` : `
                                <div class="${badgeClass}">${timeUntil.text}</div>
                            `}
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="card-main">
                            <div class="tournament-sport-icons">${sportIconsHTML}</div>
                            <h3>${t.title}</h3>
                        </div>
                        <div class="card-stats">
                            <div class="stat-item">
                                <strong>${matchCount}</strong>
                                <span>Matches</span>
                            </div>
                            <div class="stat-item">
                                <strong>FREE</strong>
                                <span>Entry</span>
                            </div>
                            <div class="stat-item">
                                <strong>${t.prizePool.toLocaleString()}</strong>
                                <span>TD$</span>
                            </div>
                        </div>
                        <div class="card-cta">
                            <a href="${t.link}" class="${buttonClass}">${timeUntil.isLocked ? 'View Results' : 'Enter Free'}</a>
                        </div>
                    </div>
                `;
            }).join('');

            tournamentList.innerHTML = tournamentHTML;

        } catch (error) {
            console.error('Error loading tournaments:', error);

            // Show error state with fallback
            tournamentList.innerHTML = `
                <div class="tournaments-error">
                    <p>Unable to load live tournaments. Showing upcoming events:</p>
                </div>
            `;

            // Restore static fallback content after error message
            setTimeout(() => {
                loadFallbackTournaments(tournamentList);
            }, 100);
        }
    }

    // Helper: Calculate time until tournament with robust timezone handling
    function getTimeUntil(startDate) {
        // If startDate is null or invalid, show UPCOMING
        if (!startDate) {
            console.log('getTimeUntil: No start date provided');
            return { text: 'UPCOMING', badge: 'UPCOMING', isUrgent: false };
        }

        // Ensure we have a Date object
        if (typeof startDate === 'string') {
            startDate = new Date(startDate);
        }

        // Check if the date is valid
        if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
            console.log('getTimeUntil: Invalid date:', startDate);
            return { text: 'UPCOMING', badge: 'UPCOMING', isUrgent: false };
        }

        // Get current time in user's timezone
        const now = new Date();
        const diff = startDate.getTime() - now.getTime();

        // Tournament has already started - show as LOCKED • LIVE
        if (diff < 0) {
            return { text: 'LOCKED • LIVE', badge: 'LOCKED • LIVE', isUrgent: true, isLocked: true };
        }

        // Calculate time components
        const totalMinutes = Math.floor(diff / (1000 * 60));
        const totalHours = Math.floor(totalMinutes / 60);
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;

        if (days > 0) {
            return {
                text: `LOCKS IN ${days}D ${hours % 24}H`,
                badge: `LOCKS IN ${days}D ${hours % 24}H`,
                isUrgent: false,
                isLocked: false
            };
        } else if (hours > 0) {
            return {
                text: `LOCKS IN ${hours}H ${minutes}M`,
                badge: `LOCKS IN ${hours}H ${minutes}M`,
                isUrgent: hours < 3,
                isLocked: false
            };
        } else {
            return {
                text: `LOCKS IN ${minutes}M`,
                badge: `LOCKS IN ${minutes}M`,
                isUrgent: true,
                isLocked: false
            };
        }
    }

    // Helper: Format date/time
    function formatDateTime(date) {
        if (!date || isNaN(date.getTime())) {
            return 'TBD';
        }

        const options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short'
        };

        return date.toLocaleString('en-US', options);
    }

    // Helper: Load fallback static tournaments
    function loadFallbackTournaments(container) {
        container.innerHTML = `
            <div class="tournament-item">
                <div class="tournament-time">
                    <div class="time-badge">LOCKS IN 2H 15M</div>
                    <div class="time-detail">Sun 1:00 PM ET</div>
                </div>
                <div class="tournament-info">
                    <div class="tournament-sport-badge">NFL</div>
                    <h3>Sunday Showdown</h3>
                    <p>Full slate tournament - All afternoon games</p>
                </div>
                <div class="tournament-stats">
                    <div class="stat-item">
                        <strong>487</strong>
                        <span>Matches</span>
                    </div>
                    <div class="stat-item">
                        <strong>FREE</strong>
                        <span>Entry</span>
                    </div>
                </div>
                <div class="tournament-action">
                    <a href="#signup" class="btn btn-primary">Enter Free</a>
                </div>
            </div>
            <div class="tournament-item">
                <div class="tournament-time">
                    <div class="time-badge">LOCKS IN 5H 45M</div>
                    <div class="time-detail">Sun 7:00 PM ET</div>
                </div>
                <div class="tournament-info">
                    <div class="tournament-sport-badge">NBA</div>
                    <h3>Sunday Night Hoops</h3>
                    <p>Primetime showdown - Top teams only</p>
                </div>
                <div class="tournament-stats">
                    <div class="stat-item">
                        <strong>312</strong>
                        <span>Matches</span>
                    </div>
                    <div class="stat-item">
                        <strong>FREE</strong>
                        <span>Entry</span>
                    </div>
                </div>
                <div class="tournament-action">
                    <a href="#signup" class="btn btn-primary">Enter Free</a>
                </div>
            </div>
            <div class="tournament-item">
                <div class="tournament-time">
                    <div class="time-badge">LOCKS TOMORROW</div>
                    <div class="time-detail">Mon 1:00 PM ET</div>
                </div>
                <div class="tournament-info">
                    <div class="tournament-sport-badge">MLB</div>
                    <h3>Monday Matinee</h3>
                    <p>Day game special - Pitching props</p>
                </div>
                <div class="tournament-stats">
                    <div class="stat-item">
                        <strong>198</strong>
                        <span>Matches</span>
                    </div>
                    <div class="stat-item">
                        <strong>FREE</strong>
                        <span>Entry</span>
                    </div>
                </div>
                <div class="tournament-action">
                    <a href="#signup" class="btn btn-primary">Enter Free</a>
                </div>
            </div>
        `;
    }

    // Initialize live tournament loading
    // loadLiveTournaments();

    // Update countdowns every 30 seconds for live tournaments
    setInterval(() => {
        updateAllCountdowns();
    }, 30000);

    // ============================================
    // Function to update all countdown timers on the page
    // ============================================
    function updateAllCountdowns() {
        // Update tournament cards
        const tournamentCards = document.querySelectorAll('.tournament-item[data-start-time]');
        tournamentCards.forEach(card => {
            const startTime = card.getAttribute('data-start-time');
            if (startTime) {
                const startDate = new Date(startTime);
                const timeInfo = getTimeUntil(startDate);

                const tournamentTime = card.querySelector('.tournament-time');
                if (tournamentTime) {
                    // Check if we need to switch to dual badge structure
                    if (timeInfo.isLocked) {
                        // Replace with dual badge if it became locked
                        const existingDual = tournamentTime.querySelector('.time-badge-dual');
                        if (!existingDual) {
                            const sportBadge = tournamentTime.querySelector('.tournament-sport-badge');
                            const timeBadgeContainer = tournamentTime.querySelector('.time-badge');
                            if (timeBadgeContainer) {
                                timeBadgeContainer.remove();
                            }
                            const dualBadge = document.createElement('span');
                            dualBadge.className = 'time-badge-dual';
                            dualBadge.innerHTML = `
                                <span class="time-badge locked">LOCKED</span>
                                <span class="time-badge live"><span class="live-dot"></span>LIVE</span>
                            `;
                            if (sportBadge && sportBadge.nextSibling) {
                                tournamentTime.insertBefore(dualBadge, sportBadge.nextSibling);
                            } else {
                                tournamentTime.appendChild(dualBadge);
                            }
                        }
                    } else {
                        // Update regular badge
                        const timeBadge = card.querySelector('.time-badge');
                        if (timeBadge) {
                            timeBadge.textContent = timeInfo.badge;
                            timeBadge.classList.toggle('urgent', timeInfo.isUrgent);
                        }
                    }
                }
            }
        });

        // Update marquee countdowns
        const marqueeCountdowns = document.querySelectorAll('.marquee-item[data-start-time]');
        marqueeCountdowns.forEach(item => {
            const startTime = item.getAttribute('data-start-time');
            if (startTime) {
                const startDate = new Date(startTime);
                const now = new Date();
                const diff = startDate - now;

                if (diff > 0) {
                    const hours = Math.floor(diff / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                    const countdownSpan = item.querySelector('.marquee-countdown');
                    if (countdownSpan) {
                        countdownSpan.textContent = `Locks in ${hours}h ${minutes}m`;
                    }
                }
            }
        });
    }

    // ============================================
    // Tournaments Page - Full Listing with Filters
    // ============================================

    async function loadAllTournaments() {
        const grid = document.getElementById('tournament-grid');
        const emptyState = document.getElementById('empty-state');

        if (!grid) return;

        let allTournaments = [];
        let filteredTournaments = [];
        let currentStatusFilter = 'all';
        let currentSportFilter = 'all';

        try {
            const response = await fetch('https://machfive-bmacdev-rest.onrender.com/rss/tournaments.xml');

            if (!response.ok) {
                throw new Error('Failed to fetch tournaments');
            }

            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            items.forEach(item => {
                const title = item.querySelector('title')?.textContent || 'Untitled Tournament';
                const description = item.querySelector('description')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '#';
                const pubDate = item.querySelector('pubDate')?.textContent || '';

                // Parse status using helper function
                let status = parseStatus(item);

                // Map RSS status to filter status (LOCKED -> live)
                if (status === 'locked') {
                    status = 'live';
                }

                // Parse description for details
                const prizeMatch = description.match(/Prize Pool: \$(\d+)/);
                const startMatch = description.match(/Start: ([^|]+)/);
                const endMatch = description.match(/End: ([^|]+)/);
                const matchesMatch = description.match(/(\d+) matches/);
                const sportMatch = description.match(/Sports?:\s*([^\n|]+)/i); // Match "Sport:" or "Sports:" and capture everything until newline or pipe

                const prizePool = prizeMatch ? parseInt(prizeMatch[1]) : 0;
                const startDateStr = startMatch ? startMatch[1].trim() : '';
                const endDateStr = endMatch ? endMatch[1].trim() : '';
                const matchCount = matchesMatch ? parseInt(matchesMatch[1]) : 0;

                const startDate = startDateStr ? new Date(startDateStr) : null;
                const endDate = endDateStr ? new Date(endDateStr) : null;

                // TODO: Filter out completed tournaments older than 7 days once RSS feed has end dates
                // For now, show all completed tournaments since RSS doesn't provide end dates yet
                // if (!isRecentlyCompleted(status, endDate)) {
                //     return; // Skip tournaments completed more than 7 days ago
                // }

                // Parse multiple sports from the RSS feed (e.g., "icehockey_nhl, boxing_boxing")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then map to icon classes
                    sports = sportMatch[1].split(',').map(s => {
                        const sportCode = s.trim().toLowerCase();
                        return mapSportToIcon(sportCode);
                    }).filter(s => s);
                }

                // If no sport in description, infer from title
                if (sports.length === 0) {
                    const titleLower = title.toLowerCase();
                    if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) sports = ['NBA'];
                    else if (titleLower.includes('football') || titleLower.includes('nfl')) sports = ['NFL'];
                    else if (titleLower.includes('baseball') || titleLower.includes('mlb')) sports = ['MLB'];
                    else if (titleLower.includes('soccer') || titleLower.includes('epl') || titleLower.includes('uefa')) sports = ['SOCCER'];
                    else if (titleLower.includes('hockey') || titleLower.includes('nhl')) sports = ['NHL'];
                    else if (titleLower.includes('college') || titleLower.includes('ncaa')) sports = ['NCAAF'];
                    else if (titleLower.includes('boxing') || titleLower.includes('boxer')) sports = ['BOXING'];
                    else if (titleLower.includes('mma') || titleLower.includes('ufc') || titleLower.includes('mixed martial')) sports = ['MMA'];
                    else sports = ['SPORTS']; // Default fallback
                }

                // For filtering purposes, use the first sport
                const sport = sports[0] || 'SPORTS';

                const playerCount = Math.floor(Math.random() * 400) + 100; // Placeholder

                allTournaments.push({
                    title,
                    description,
                    link,
                    pubDate,
                    prizePool,
                    startDate,
                    endDate,
                    matchCount,
                    sport,
                    sports, // Array of all sports
                    status,
                    playerCount
                });
            });

            filteredTournaments = [...allTournaments];

            // Initialize pagination with loaded tournaments
            pagination.allTournaments = allTournaments;
            pagination.filteredTournaments = filteredTournaments;
            pagination.renderFunction = renderTournaments; // Store reference to render function
            renderPaginatedTournaments();

            updateCounts();

        } catch (error) {
            console.error('Error loading tournaments:', error);
            grid.innerHTML = `
                <div class="tournaments-error">
                    <p>Unable to load tournaments. Please try again later.</p>
                </div>
            `;
        }

        // Filter by status tabs
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                filterTabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                currentStatusFilter = this.dataset.filter;
                applyFilters();
            });
        });

        // Filter by sport
        const sportPills = document.querySelectorAll('.sport-pill');
        sportPills.forEach(pill => {
            pill.addEventListener('click', function() {
                sportPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');

                currentSportFilter = this.dataset.sport;
                applyFilters();
            });
        });

        // Sort tournaments
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortTournaments(this.value);
                pagination.filteredTournaments = filteredTournaments;
                pagination.currentPage = 1;
                renderPaginatedTournaments();
            });
        }

        function applyFilters() {
            filteredTournaments = allTournaments.filter(t => {
                const statusMatch = currentStatusFilter === 'all' || t.status === currentStatusFilter;
                const sportMatch = currentSportFilter === 'all' || t.sport === currentSportFilter;
                return statusMatch && sportMatch;
            });

            sortTournaments(sortSelect ? sortSelect.value : 'time-asc');

            // Update pagination and reset to page 1
            pagination.filteredTournaments = filteredTournaments;
            pagination.currentPage = 1;
            renderPaginatedTournaments();
            updateCounts();
        }

        function sortTournaments(sortBy) {
            switch(sortBy) {
                case 'time-asc':
                    filteredTournaments.sort((a, b) => {
                        if (!a.startDate) return 1;
                        if (!b.startDate) return -1;
                        return a.startDate - b.startDate;
                    });
                    break;
                case 'time-desc':
                    filteredTournaments.sort((a, b) => {
                        if (!a.startDate) return 1;
                        if (!b.startDate) return -1;
                        return b.startDate - a.startDate;
                    });
                    break;
                case 'participants-desc':
                    filteredTournaments.sort((a, b) => b.playerCount - a.playerCount);
                    break;
                case 'sport':
                    filteredTournaments.sort((a, b) => a.sport.localeCompare(b.sport));
                    break;
            }
        }

        function renderTournaments(tournaments) {
            if (tournaments.length === 0) {
                grid.style.display = 'none';
                emptyState.style.display = 'flex';
                return;
            }

            grid.style.display = 'flex';
            emptyState.style.display = 'none';

            const html = tournaments.map(t => {
                // Show appropriate badge based on tournament status
                let timeInfo, timeBadgeClass;
                if (t.status === 'live') {
                    timeInfo = { text: 'LOCKED • LIVE', badge: 'LOCKED • LIVE', isUrgent: true, isLocked: true };
                    timeBadgeClass = 'time-badge urgent';
                } else if (t.status === 'completed') {
                    timeInfo = { text: 'COMPLETED', badge: 'COMPLETED', isUrgent: false, isLocked: true };
                    timeBadgeClass = 'time-badge completed';
                } else {
                    timeInfo = getTimeUntil(t.startDate);
                    timeBadgeClass = timeInfo.isUrgent ? 'time-badge urgent' : 'time-badge';
                }

                // Generate sport icons HTML for tournament cards
                const sportsArray = t.sports || [t.sport];
                const sportIconsHTML = sportsArray.map(sport =>
                    `<div class="sport-icon ${sport}"></div><span class="sport-label">${sport}</span>`
                ).join('');

                // Determine state class and badge classes
                const stateClass = timeInfo.isLocked ? 'state-locked' : 'state-upcoming';
                const badgeClass = timeInfo.isLocked ? 'time-badge locked-live' : `time-badge countdown ${timeInfo.isUrgent ? 'urgent-pulse' : ''}`;
                const buttonClass = timeInfo.isLocked ? 'btn btn-secondary' : 'btn btn-primary';

                return `
                    <div class="tournament-item tournament-card ${stateClass}" data-status="${t.status}" data-sport="${t.sport}">
                        <div class="card-status">
                            ${timeInfo.isLocked && t.status !== 'completed' ? `
                                <span class="time-badge-dual">
                                    <span class="time-badge locked">LOCKED</span>
                                    <span class="time-badge live"><span class="live-dot"></span>LIVE</span>
                                </span>
                            ` : `
                                <div class="${t.status === 'completed' ? 'time-badge completed' : badgeClass}">${timeInfo.badge}</div>
                            `}
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="card-main">
                            <div class="tournament-sport-icons">${sportIconsHTML}</div>
                            <h3>${t.title}</h3>
                        </div>
                        <div class="card-stats">
                            <div class="stat-item">
                                <strong>${t.matchCount || 0}</strong>
                                <span>Matches</span>
                            </div>
                            <div class="stat-item">
                                <strong>FREE</strong>
                                <span>Entry</span>
                            </div>
                            <div class="stat-item">
                                <strong>${t.prizePool.toLocaleString()}</strong>
                                <span>TD$</span>
                            </div>
                        </div>
                        <div class="card-cta">
                            <a href="${t.link}" class="${buttonClass}">
                                ${timeInfo.isLocked ? 'View Results' : 'Enter Free'}
                            </a>
                        </div>
                    </div>
                `;
            }).join('');

            grid.innerHTML = html;
        }

        function updateCounts() {
            const counts = {
                all: allTournaments.length,
                live: allTournaments.filter(t => t.status === 'live').length,
                upcoming: allTournaments.filter(t => t.status === 'upcoming').length,
                completed: allTournaments.filter(t => t.status === 'completed').length
            };

            document.getElementById('count-all').textContent = counts.all;
            document.getElementById('count-live').textContent = counts.live;
            document.getElementById('count-upcoming').textContent = counts.upcoming;
            document.getElementById('count-completed').textContent = counts.completed;
        }
    }
});

// ============================================================================
// PAGINATION SYSTEM
// ============================================================================

const pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    allTournaments: [],
    filteredTournaments: [],
    currentFilter: 'all',
    currentSport: 'all',
    currentSort: 'time-asc'
};

// Initialize pagination
function initPagination() {
    console.log('Initializing pagination...');
    
    // Get page from URL hash if exists
    const hash = window.location.hash.match(/page=(\d+)/);
    if (hash) {
        pagination.currentPage = parseInt(hash[1]);
    }
    
    // Event listeners for pagination buttons (both top and bottom)
    ['', '-top'].forEach(suffix => {
        const firstBtn = document.getElementById(`page-first${suffix}`);
        const prevBtn = document.getElementById(`page-prev${suffix}`);
        const nextBtn = document.getElementById(`page-next${suffix}`);
        const lastBtn = document.getElementById(`page-last${suffix}`);

        if (firstBtn) firstBtn.addEventListener('click', () => goToPage(1));
        if (prevBtn) prevBtn.addEventListener('click', () => goToPage(pagination.currentPage - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToPage(pagination.currentPage + 1));
        if (lastBtn) lastBtn.addEventListener('click', () => goToPage(getTotalPages()));
    });

    const itemsPerPageSelect = document.getElementById('items-per-page');
    
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', (e) => {
            pagination.itemsPerPage = parseInt(e.target.value);
            pagination.currentPage = 1;
            renderPaginatedTournaments();
        });
    }
    
    console.log('Pagination initialized');
}

// Calculate total pages
function getTotalPages() {
    return Math.ceil(pagination.filteredTournaments.length / pagination.itemsPerPage);
}

// Go to specific page
function goToPage(page) {
    const totalPages = getTotalPages();
    
    if (page < 1 || page > totalPages) {
        console.log(`Invalid page: ${page}`);
        return;
    }
    
    pagination.currentPage = page;
    
    // Update URL hash
    const currentHash = window.location.hash;
    const newHash = currentHash.replace(/page=\d+/, `page=${page}`);
    if (newHash === currentHash) {
        window.location.hash = currentHash ? `${currentHash}&page=${page}` : `page=${page}`;
    } else {
        window.location.hash = newHash;
    }
    
    renderPaginatedTournaments();
    
    // Scroll to top of tournament list smoothly
    const tournamentsPage = document.querySelector('.tournaments-page');
    if (tournamentsPage) {
        tournamentsPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Render current page of tournaments
function renderPaginatedTournaments() {
    const start = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const end = start + pagination.itemsPerPage;
    const pageData = pagination.filteredTournaments.slice(start, end);

    console.log(`Rendering page ${pagination.currentPage}: items ${start}-${end} of ${pagination.filteredTournaments.length}`);

    // Use the stored render function if available
    if (pagination.renderFunction && typeof pagination.renderFunction === 'function') {
        pagination.renderFunction(pageData);
    }

    // Update pagination controls
    updatePaginationControls();
}

// Update pagination UI
function updatePaginationControls() {
    const totalPages = getTotalPages();
    const start = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
    const end = Math.min(start + pagination.itemsPerPage - 1, pagination.filteredTournaments.length);
    
    // Update info text
    const startEl = document.getElementById('results-start');
    const endEl = document.getElementById('results-end');
    const totalEl = document.getElementById('results-total');
    
    if (startEl) startEl.textContent = start;
    if (endEl) endEl.textContent = end;
    if (totalEl) totalEl.textContent = pagination.filteredTournaments.length;
    
    // Enable/disable buttons (both top and bottom)
    ['', '-top'].forEach(suffix => {
        const firstBtn = document.getElementById(`page-first${suffix}`);
        const prevBtn = document.getElementById(`page-prev${suffix}`);
        const nextBtn = document.getElementById(`page-next${suffix}`);
        const lastBtn = document.getElementById(`page-last${suffix}`);

        if (firstBtn) firstBtn.disabled = pagination.currentPage === 1;
        if (prevBtn) prevBtn.disabled = pagination.currentPage === 1;
        if (nextBtn) nextBtn.disabled = pagination.currentPage === totalPages;
        if (lastBtn) lastBtn.disabled = pagination.currentPage === totalPages;
    });

    // Render page numbers (both top and bottom)
    renderPageNumbers(totalPages, 'page-numbers');
    renderPageNumbers(totalPages, 'page-numbers-top');

    // Show/hide pagination (both top and bottom)
    ['pagination-controls', 'pagination-controls-top'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.style.display = totalPages > 1 ? 'block' : 'none';
        }
    });
}

// Render page number buttons
function renderPageNumbers(totalPages, containerId = 'page-numbers') {
    const numbersContainer = document.getElementById(containerId);
    if (!numbersContainer) return;
    
    numbersContainer.innerHTML = '';
    
    // Show max 5 page numbers at a time
    let startPage = Math.max(1, pagination.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    // Adjust if near end
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    // Add ellipsis if not showing first page
    if (startPage > 1) {
        const btn = createPageButton(1);
        numbersContainer.appendChild(btn);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'page-ellipsis';
            numbersContainer.appendChild(ellipsis);
        }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
        const btn = createPageButton(i);
        if (i === pagination.currentPage) {
            btn.classList.add('active');
        }
        numbersContainer.appendChild(btn);
    }
    
    // Add ellipsis if not showing last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'page-ellipsis';
            numbersContainer.appendChild(ellipsis);
        }
        const btn = createPageButton(totalPages);
        numbersContainer.appendChild(btn);
    }
}

// Create page number button
function createPageButton(pageNum) {
    const btn = document.createElement('button');
    btn.className = 'page-number';
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Go to page ${pageNum}`);
    btn.addEventListener('click', () => goToPage(pageNum));
    return btn;
}

// Set tournaments and apply pagination
function setPaginatedTournaments(tournaments) {
    pagination.allTournaments = tournaments;
    pagination.filteredTournaments = tournaments;
    pagination.currentPage = 1;
    renderPaginatedTournaments();
}

// Apply filters and reset to page 1
function applyFiltersAndPaginate(filter, sport, sort) {
    pagination.currentFilter = filter || pagination.currentFilter;
    pagination.currentSport = sport || pagination.currentSport;
    pagination.currentSort = sort || pagination.currentSort;
    
    // Filter tournaments
    let filtered = [...pagination.allTournaments];
    
    // Apply status filter
    if (pagination.currentFilter !== 'all') {
        filtered = filtered.filter(t => t.status === pagination.currentFilter);
    }
    
    // Apply sport filter
    if (pagination.currentSport !== 'all') {
        filtered = filtered.filter(t => t.sport === pagination.currentSport);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch (pagination.currentSort) {
            case 'time-asc':
                return new Date(a.startTime) - new Date(b.startTime);
            case 'time-desc':
                return new Date(b.startTime) - new Date(a.startTime);
            case 'participants-desc':
                return (b.players || 0) - (a.players || 0);
            case 'sport':
                return a.sport.localeCompare(b.sport);
            default:
                return 0;
        }
    });
    
    pagination.filteredTournaments = filtered;
    pagination.currentPage = 1;
    renderPaginatedTournaments();
}

// Initialize pagination when DOM is loaded
if (document.querySelector('.tournament-list')) {
    console.log('Tournament list page detected, initializing pagination');
    initPagination();
}

// ============================================
// HOW TO PLAY PAGE
// Sidebar navigation, accordion, and tabs
// ============================================

// Sidebar Navigation - Active State & Smooth Scroll with Intersection Observer
function initHowToPlayNav() {
    const sidebar = document.querySelector('.htp-sidebar');
    if (!sidebar) return;

    const navLinks = sidebar.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.htp-section');

    // Smooth scroll on click (uses CSS scroll-margin-top for offset)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for automatic active state on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Update active states
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}`) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Accordion Glossary
function initGlossaryAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const wasActive = accordionItem.classList.contains('active');

            // Close all other accordions in same container
            const container = accordionItem.closest('.glossary-accordion, .sport-tab-content');
            if (container) {
                container.querySelectorAll('.accordion-item.active').forEach(item => {
                    if (item !== accordionItem) {
                        item.classList.remove('active');
                    }
                });
            }

            // Toggle current accordion
            if (wasActive) {
                accordionItem.classList.remove('active');
            } else {
                accordionItem.classList.add('active');
            }
        });
    });
}

// Sports Glossary Tabs
function initSportsGlossaryTabs() {
    const tabs = document.querySelectorAll('.sport-tab');
    const tabContents = document.querySelectorAll('.sport-glossary');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSport = this.getAttribute('data-sport');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update visible content
            tabContents.forEach(content => {
                if (content.id === `sport-${targetSport}`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}

// Initialize all How to Play features
if (document.querySelector('.how-to-play-content')) {
    console.log('How to Play page detected, initializing features');
    initHowToPlayNav();
    initGlossaryAccordion();
    initSportsGlossaryTabs();
}

// Removed JavaScript hack - CSS solution implemented at end of style.css

// Update countdown timers every 30 seconds
function updateAllCountdowns() {
    // Update all status cells with countdowns
    document.querySelectorAll('.tab-status.with-countdown').forEach(element => {
        const cell = element.closest('.tabulator-cell');
        if (cell && cell.dataset.startTime) {
            const startTime = parseInt(cell.dataset.startTime);
            const now = Date.now();
            const timeRemaining = startTime - now;

            if (timeRemaining > 0) {
                const countdown = getCountdownString(timeRemaining);
                element.textContent = `UPCOMING • ${countdown}`;
            } else {
                // Tournament has started, update to LIVE
                element.innerHTML = 'LOCKED • LIVE';
                element.className = 'tab-status status-live';
            }
        }
    });
}

// Start countdown updates - every 30 seconds
if (typeof getCountdownString === 'function') {
    setInterval(updateAllCountdowns, 30000);
}

