// ============================================
// BetMax Tourney - Main JavaScript
// Tournament Betting Platform
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('BetMax Tourney loaded');

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

                // Parse description for prize pool, start time, etc
                const prizeMatch = description.match(/Prize Pool: \$(\d+)/);
                const startMatch = description.match(/Start: ([^|]+)/);
                const matchesMatch = description.match(/(\d+) matches/);

                const prizePool = prizeMatch ? parseInt(prizeMatch[1]) : 0;
                const startDateStr = startMatch ? startMatch[1].trim() : '';
                const matchCount = matchesMatch ? parseInt(matchesMatch[1]) : 0;

                // Parse start date
                const startDate = startDateStr ? new Date(startDateStr) : null;

                // Determine sport from title
                let sport = 'SPORTS';
                const titleLower = title.toLowerCase();
                if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) sport = 'NBA';
                else if (titleLower.includes('football') || titleLower.includes('nfl')) sport = 'NFL';
                else if (titleLower.includes('baseball') || titleLower.includes('mlb')) sport = 'MLB';
                else if (titleLower.includes('soccer') || titleLower.includes('football')) sport = 'SOCCER';
                else if (titleLower.includes('hockey') || titleLower.includes('nhl')) sport = 'NHL';

                tournaments.push({
                    title,
                    description,
                    link,
                    guid,
                    pubDate,
                    prizePool,
                    startDate,
                    matchCount,
                    sport
                });
            });

            // Sort by start date (soonest first)
            tournaments.sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return a.startDate - b.startDate;
            });

            // Take first 3 tournaments
            const displayTournaments = tournaments.slice(0, 3);
            console.log('Displaying tournaments:', displayTournaments);

            // Build tournament HTML
            const tournamentHTML = displayTournaments.map(t => {
                const timeUntil = getTimeUntil(t.startDate);
                const playerCount = Math.floor(Math.random() * 400) + 100; // Placeholder - not in feed

                return `
                    <div class="tournament-item">
                        <div class="tournament-time">
                            <div class="time-badge ${timeUntil.urgent ? 'urgent' : ''}">${timeUntil.text}</div>
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="tournament-info">
                            <div class="tournament-sport-badge">${t.sport}</div>
                            <h3>${t.title}</h3>
                            <p>${t.description.split('|')[0].trim()}</p>
                        </div>
                        <div class="tournament-stats">
                            <div class="stat-item">
                                <strong>${playerCount}</strong>
                                <span>Competing</span>
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
            return { text: 'TBD', badge: 'TBD', isUrgent: false };
        }

        const now = new Date();
        const diff = startDate - now;

        if (diff < 0) {
            return { text: 'LIVE NOW', badge: 'LIVE NOW', isUrgent: true };
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

                // Parse description for details
                const prizeMatch = description.match(/Prize Pool: \$(\d+)/);
                const startMatch = description.match(/Start: ([^|]+)/);
                const endMatch = description.match(/End: ([^|]+)/);
                const matchesMatch = description.match(/(\d+) matches/);

                const prizePool = prizeMatch ? parseInt(prizeMatch[1]) : 0;
                const startDateStr = startMatch ? startMatch[1].trim() : '';
                const endDateStr = endMatch ? endMatch[1].trim() : '';
                const matchCount = matchesMatch ? parseInt(matchesMatch[1]) : 0;

                const startDate = startDateStr ? new Date(startDateStr) : null;
                const endDate = endDateStr ? new Date(endDateStr) : null;

                // Determine sport from title
                let sport = 'SPORTS';
                const titleLower = title.toLowerCase();
                if (titleLower.includes('hoop') || titleLower.includes('basketball') || titleLower.includes('nba')) sport = 'NBA';
                else if (titleLower.includes('football') || titleLower.includes('nfl')) sport = 'NFL';
                else if (titleLower.includes('baseball') || titleLower.includes('mlb')) sport = 'MLB';
                else if (titleLower.includes('soccer') || titleLower.includes('epl') || titleLower.includes('uefa')) sport = 'SOCCER';
                else if (titleLower.includes('hockey') || titleLower.includes('nhl')) sport = 'NHL';
                else if (titleLower.includes('college') || titleLower.includes('ncaa')) sport = 'NCAAF';

                // Determine status
                const now = new Date();
                let status = 'upcoming';

                if (startDate && endDate) {
                    if (now >= startDate && now <= endDate) {
                        status = 'live';
                    } else if (now > endDate) {
                        // Check if completed within last 7 days
                        const daysSinceEnd = (now - endDate) / (1000 * 60 * 60 * 24);
                        if (daysSinceEnd <= 7) {
                            status = 'completed';
                        } else {
                            return; // Skip tournaments completed more than 7 days ago
                        }
                    }
                } else if (startDate && now >= startDate) {
                    status = 'live';
                }

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
                    status,
                    playerCount
                });
            });

            filteredTournaments = [...allTournaments];
            renderTournaments(filteredTournaments);
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
                renderTournaments(filteredTournaments);
            });
        }

        function applyFilters() {
            filteredTournaments = allTournaments.filter(t => {
                const statusMatch = currentStatusFilter === 'all' || t.status === currentStatusFilter;
                const sportMatch = currentSportFilter === 'all' || t.sport === currentSportFilter;
                return statusMatch && sportMatch;
            });

            sortTournaments(sortSelect ? sortSelect.value : 'time-asc');
            renderTournaments(filteredTournaments);
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
                const timeInfo = getTimeUntil(t.startDate);
                const timeBadgeClass = timeInfo.isUrgent ? 'time-badge urgent' : 'time-badge';

                return `
                    <div class="tournament-item" data-status="${t.status}" data-sport="${t.sport}">
                        <div class="tournament-time">
                            <div class="${timeBadgeClass}">${timeInfo.badge}</div>
                            <div class="time-detail">${formatDateTime(t.startDate)}</div>
                        </div>
                        <div class="tournament-info">
                            <div class="tournament-sport-badge">${t.sport}</div>
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
