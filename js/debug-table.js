// Debug script to identify table background issues on mobile
(function() {
    let debugInfo = {};

    function checkTableStyles() {
        const table = document.querySelector('#starting-soon-table');
        if (!table) return;

        const viewportWidth = window.innerWidth;
        const isMobile = viewportWidth <= 768;

        // Get all relevant elements
        const elements = {
            table: table,
            tableholder: table.querySelector('.tabulator-tableholder'),
            tableInner: table.querySelector('.tabulator-table'),
            firstRow: table.querySelector('.tabulator-row'),
            firstCell: table.querySelector('.tabulator-cell'),
            shell: document.querySelector('.starting-soon-shell'),
            section: document.querySelector('.live-tournaments')
        };

        // Get computed styles
        const styles = {};
        for (let key in elements) {
            if (elements[key]) {
                const computed = window.getComputedStyle(elements[key]);
                styles[key] = {
                    background: computed.background,
                    backgroundColor: computed.backgroundColor,
                    opacity: computed.opacity
                };
            }
        }

        // Log the information
        console.group(`Table Styles - ${isMobile ? 'MOBILE' : 'DESKTOP'} (${viewportWidth}px)`);
        console.log('Elements and their backgrounds:');
        for (let key in styles) {
            console.log(`${key}:`, styles[key]);
        }

        // Check for cells that are off-screen
        const cells = table.querySelectorAll('.tabulator-cell');
        let visibleCells = 0;
        let hiddenCells = 0;
        let differentBgCells = [];

        const firstCellBg = cells[0] ? window.getComputedStyle(cells[0]).backgroundColor : null;

        cells.forEach((cell, index) => {
            const rect = cell.getBoundingClientRect();
            const isVisible = rect.left < window.innerWidth && rect.right > 0;
            const cellBg = window.getComputedStyle(cell).backgroundColor;

            if (isVisible) {
                visibleCells++;
            } else {
                hiddenCells++;
            }

            if (cellBg !== firstCellBg) {
                differentBgCells.push({
                    index,
                    bg: cellBg,
                    visible: isVisible
                });
            }
        });

        console.log('Cell visibility:', { visibleCells, hiddenCells });
        if (differentBgCells.length > 0) {
            console.warn('Cells with different backgrounds:', differentBgCells);
        }

        console.groupEnd();
    }

    // Check on load
    window.addEventListener('load', () => {
        setTimeout(checkTableStyles, 1000);
    });

    // Check on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkTableStyles, 500);
    });

    // Check on scroll
    document.addEventListener('scroll', () => {
        const tableholder = document.querySelector('.tabulator-tableholder');
        if (tableholder) {
            tableholder.addEventListener('scroll', checkTableStyles, { once: true });
        }
    }, { once: true });

    // Make function available globally for manual testing
    window.debugTableStyles = checkTableStyles;

    // Force consistent backgrounds on mobile as a failsafe
    function forceConsistentBackgrounds() {
        if (window.innerWidth <= 768) {
            const allCells = document.querySelectorAll('.tabulator-cell');
            allCells.forEach(cell => {
                cell.style.setProperty('background-color', 'rgba(40, 40, 40, 0.85)', 'important');
            });

            const allRows = document.querySelectorAll('.tabulator-row');
            allRows.forEach(row => {
                row.style.setProperty('background-color', 'rgba(40, 40, 40, 0.85)', 'important');
            });
        }
    }

    // Apply fix after table loads
    window.addEventListener('load', () => {
        setTimeout(forceConsistentBackgrounds, 100);
        setTimeout(forceConsistentBackgrounds, 500);
        setTimeout(forceConsistentBackgrounds, 1000);
    });

    // Apply fix on resize
    window.addEventListener('resize', forceConsistentBackgrounds);

    // Apply fix on scroll
    const setupScrollFix = () => {
        const tableholder = document.querySelector('.tabulator-tableholder');
        if (tableholder) {
            tableholder.addEventListener('scroll', forceConsistentBackgrounds, { passive: true });
        }
    };

    setTimeout(setupScrollFix, 1000);

    // Make force function globally available
    window.forceConsistentBackgrounds = forceConsistentBackgrounds;
})();