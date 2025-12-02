// ============================================
// BetMax Tourney - Main JavaScript
// Tournament Betting Platform
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('BetMax Tourney loaded');

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            // Toggle aria-expanded for accessibility
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
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
});
