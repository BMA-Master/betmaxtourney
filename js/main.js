// ============================================
// Bet Max Tourney - Main JavaScript
// Tournament Betting Platform
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bet Max Tourney loaded');

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
                marqueeTrack.innerHTML = '<div class="marquee-item"><span class="marquee-tournament">No live tournaments</span></div>';
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
                const startTimeMatch = description.match(/Start Time:\s*([^\n]+)/i);
                const endTimeMatch = description.match(/End Time:\s*([^\n]+)/i);

                // Parse multiple sports from the RSS feed (e.g., "NFL, NBA, MLB")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then normalize multi-word sports
                    sports = sportMatch[1].split(',').map(s => {
                        const normalized = s.trim().toUpperCase();
                        // Map multi-word sports to single CSS-safe names
                        if (normalized === 'UEFA CHAMPIONS LEAGUE' || normalized === 'CHAMPIONS LEAGUE') return 'UEFA';
                        if (normalized === 'MIXED MARTIAL ARTS') return 'MMA';
                        return normalized;
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

                const startTime = startTimeMatch ? startTimeMatch[1] : '';
                const endDate = endTimeMatch ? new Date(endTimeMatch[1]) : null;

                // Filter: Only show LOCKED, upcoming, and recently completed (last 7 days)
                if (!isRecentlyCompleted(status, endDate)) {
                    return; // Skip tournaments completed more than 7 days ago
                }

                // Calculate countdown for upcoming tournaments
                let countdown = '';
                if (startTime && status === 'upcoming') {
                    const startDate = new Date(startTime);
                    const now = new Date();
                    const diff = startDate - now;

                    if (diff > 0) {
                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        countdown = `<span class="marquee-countdown">Starts in ${hours}h ${minutes}m</span>`;
                    }
                }

                // Determine status display and color class based on RSS status
                let statusClass = 'marquee-status-live';
                let statusText = '● LIVE';

                if (status === 'locked') {
                    // LOCKED means active/live
                    statusClass = 'marquee-status-live';
                    statusText = '● LIVE';
                } else if (status === 'upcoming') {
                    statusClass = 'marquee-status-upcoming';
                    statusText = '◉ UPCOMING';
                } else if (status === 'completed') {
                    statusClass = 'marquee-status-completed';
                    statusText = '✓ COMPLETED';
                }

                // Generate sport icons HTML (icon + label for each sport)
                let sportsHTML = '';
                if (sports.length > 0) {
                    console.log(`Tournament "${title}" has sports:`, sports);
                    sportsHTML = '<span class="marquee-separator">•</span>';
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

                marqueeHTML += `
                    <div class="marquee-item">
                        <span class="marquee-status ${statusClass}">${statusText}</span>
                        ${countdown}
                        <span class="marquee-tournament">${title}</span>
                        ${sportsHTML}
                    </div>
                `;
            });

            // Duplicate content for seamless loop
            marqueeTrack.innerHTML = marqueeHTML + marqueeHTML;

        } catch (error) {
            console.error('Failed to load tournaments:', error);
            marqueeTrack.innerHTML = '<div class="marquee-item"><span class="marquee-tournament">Unable to load tournaments</span></div>';
        }
    }

    // Load marquee on page load
    loadTournamentMarquee();

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
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                menuToggle.setAttribute('aria-expanded', 'true');
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

                // FILTER: Only include upcoming tournaments for "Tournaments Starting Soon"
                if (status !== 'upcoming') {
                    return; // Skip non-upcoming tournaments
                }

                // Parse description for prize pool, start time, etc
                const prizeMatch = description.match(/Prize Pool: \$(\d+)/);
                const startMatch = description.match(/Start(?:\s+Time)?:\s*([^\n|]+)/i);
                const matchesMatch = description.match(/(\d+) matches/);
                const sportMatch = description.match(/Sports?:\s*([^\n|]+)/i); // Match "Sport:" or "Sports:" and capture everything until newline or pipe

                const prizePool = prizeMatch ? parseInt(prizeMatch[1]) : 0;
                const startDateStr = startMatch ? startMatch[1].trim() : '';
                const matchCount = matchesMatch ? parseInt(matchesMatch[1]) : 0;

                // Parse start date
                const startDate = startDateStr ? new Date(startDateStr) : null;

                // Parse multiple sports from the RSS feed (e.g., "NFL, NBA, MLB")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then normalize multi-word sports
                    sports = sportMatch[1].split(',').map(s => {
                        const normalized = s.trim().toUpperCase();
                        // Map multi-word sports to single CSS-safe names
                        if (normalized === 'UEFA CHAMPIONS LEAGUE' || normalized === 'CHAMPIONS LEAGUE') return 'UEFA';
                        if (normalized === 'MIXED MARTIAL ARTS') return 'MMA';
                        return normalized;
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

                // Generate sport text labels for homepage tournament cards
                const sportsArray = t.sports || [t.sport];
                const sportLabels = sportsArray.join(', ');

                return `
                    <div class="tournament-item">
                        <div class="tournament-time">
                            <div class="time-badge ${timeUntil.urgent ? 'urgent' : ''}">${timeUntil.text}</div>
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="tournament-info">
                            <div class="tournament-sport-badge">${sportLabels}</div>
                            <h3>${t.title}</h3>
                            <p>${t.description.split('|')[0].trim()}</p>
                        </div>
                        <div class="tournament-stats">
                            <div class="stat-item">
                                <strong>${matchCount}</strong>
                                <span>Matches</span>
                            </div>
                            <div class="stat-item">
                                <strong>FREE</strong>
                                <span>Entry</span>
                            </div>
                        </div>
                        <div class="tournament-action">
                            <a href="${t.link}" class="btn btn-primary">Enter Free</a>
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

    // Helper: Calculate time until tournament
    function getTimeUntil(startDate) {
        if (!startDate || isNaN(startDate.getTime())) {
            return { text: 'UPCOMING', badge: 'UPCOMING', isUrgent: false };
        }

        const now = new Date();
        const diff = startDate - now;

        // For "Tournaments Starting Soon", we only show upcoming tournaments
        // So negative diff should show as UPCOMING instead of LIVE NOW
        if (diff < 0) {
            return { text: 'UPCOMING', badge: 'UPCOMING', isUrgent: false };
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return {
                text: `STARTS IN ${days}D ${hours % 24}H`,
                badge: `STARTS IN ${days}D ${hours % 24}H`,
                isUrgent: false
            };
        } else if (hours > 0) {
            return {
                text: `STARTS IN ${hours}H ${minutes}M`,
                badge: `STARTS IN ${hours}H ${minutes}M`,
                isUrgent: hours < 3
            };
        } else {
            return {
                text: `STARTS IN ${minutes}M`,
                badge: `STARTS IN ${minutes}M`,
                isUrgent: true
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
                    <div class="time-badge">STARTS IN 2H 15M</div>
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
                        <span>Competing</span>
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
                    <div class="time-badge">STARTS IN 5H 45M</div>
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
                        <span>Competing</span>
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
                    <div class="time-badge">STARTS TOMORROW</div>
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
                        <span>Competing</span>
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
    loadLiveTournaments();

    // ============================================
    // Tournaments Page - Full Listing with Filters
    // ============================================
    const tournamentsPage = document.querySelector('.tournaments-page');

    if (tournamentsPage) {
        loadAllTournaments();
    }

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

                // Parse multiple sports from the RSS feed (e.g., "NFL, NBA, MLB")
                let sports = [];
                if (sportMatch) {
                    // Split by comma and trim whitespace, then normalize multi-word sports
                    sports = sportMatch[1].split(',').map(s => {
                        const normalized = s.trim().toUpperCase();
                        // Map multi-word sports to single CSS-safe names
                        if (normalized === 'UEFA CHAMPIONS LEAGUE' || normalized === 'CHAMPIONS LEAGUE') return 'UEFA';
                        if (normalized === 'MIXED MARTIAL ARTS') return 'MMA';
                        return normalized;
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
                    timeInfo = { text: 'LIVE NOW', badge: 'LIVE NOW', isUrgent: true };
                    timeBadgeClass = 'time-badge urgent';
                } else if (t.status === 'completed') {
                    timeInfo = { text: 'COMPLETED', badge: 'COMPLETED', isUrgent: false };
                    timeBadgeClass = 'time-badge completed';
                } else {
                    timeInfo = getTimeUntil(t.startDate);
                    timeBadgeClass = timeInfo.isUrgent ? 'time-badge urgent' : 'time-badge';
                }

                // Generate sport text labels for tournament cards
                const sportsArray = t.sports || [t.sport];
                const sportLabels = sportsArray.join(', ');

                return `
                    <div class="tournament-item" data-status="${t.status}" data-sport="${t.sport}">
                        <div class="tournament-time">
                            <div class="${timeBadgeClass}">${timeInfo.badge}</div>
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="tournament-info">
                            <div class="tournament-sport-badge">${sportLabels}</div>
                            <h3>${t.title}</h3>
                            <p>${t.description.split('|')[0].trim()}</p>
                        </div>
                        <div class="tournament-stats">
                            <div class="stat-item">
                                <strong>${t.playerCount}</strong>
                                <span>Competing</span>
                            </div>
                            <div class="stat-item">
                                <strong>FREE</strong>
                                <span>Entry</span>
                            </div>
                        </div>
                        <div class="tournament-action">
                            <a href="${t.link}" class="btn btn-primary">
                                ${t.status === 'live' ? 'Enter Now' : t.status === 'completed' ? 'View Results' : 'Enter Free'}
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

// Sidebar Navigation - Active State & Smooth Scroll
function initHowToPlayNav() {
    const sidebar = document.querySelector('.htp-sidebar');
    if (!sidebar) return;

    const navLinks = sidebar.querySelectorAll('.htp-nav-link, .htp-sub-link');
    const sections = document.querySelectorAll('.htp-section');

    // Handle expandable nav items
    const expandableItems = sidebar.querySelectorAll('.htp-nav-item.has-sub');
    expandableItems.forEach(item => {
        const link = item.querySelector('.htp-nav-link');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            item.classList.toggle('expanded');
        });
    });

    // Smooth scroll and active state on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Update active states
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Expand parent if clicking sub-item
                const parentItem = this.closest('.htp-nav-item.has-sub');
                if (parentItem) {
                    parentItem.classList.add('expanded');
                }
            }
        });
    });

    // Update active state on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNavOnScroll(sections, navLinks);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Set initial active state
    updateActiveNavOnScroll(sections, navLinks);
}

function updateActiveNavOnScroll(sections, navLinks) {
    const scrollPosition = window.scrollY + 150;

    let currentSection = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
        }
    });

    if (currentSection) {
        const currentId = currentSection.id;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Auto-expand parent if sub-item is active
                const parentItem = link.closest('.htp-nav-item.has-sub');
                if (parentItem) {
                    parentItem.classList.add('expanded');
                }
            }
        });
    }
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

