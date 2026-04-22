document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    function isActive(page) {
        return currentPath === page ? 'active' : '';
    }

    // Navbar HTML
    const navbarHTML = `
        <header class="site-header" id="header">
            <a href="index.html" class="logo">frontendure.</a>
            <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="nav-menu" id="nav-menu">
                <ul class="nav-links">
                    <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
                    <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
                    <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
                    <li><a href="portfolio.html" class="${isActive('portfolio.html')}">Portfolio</a></li>
                    <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
                    <li><a href="faq.html" class="${isActive('faq.html')}">FAQ</a></li>
                </ul>
            </nav>
        </header>
        <div class="nav-backdrop" id="nav-backdrop"></div>
    `;

    const footerHTML = `
        <footer class="site-footer">
            <div class="container">
                <h3 class="logo">frontendure.</h3>
                <p>Where your business goes live</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">&copy; ${new Date().getFullYear()} Frontendure. All rights reserved.</p>
            </div>
        </footer>
    `;

    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;

    const footPlaceholder = document.getElementById('footer-placeholder');
    if (footPlaceholder) footPlaceholder.innerHTML = footerHTML;

    // Scroll shrink effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ── Hamburger / Mobile Menu ──────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navBackdrop = document.getElementById('nav-backdrop');

    function openMenu() {
        navMenu.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        navBackdrop.classList.add('visible');
        document.body.style.overflow = 'hidden'; // prevent scroll behind drawer
    }

    function closeMenu() {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        navBackdrop.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (hamburger && navMenu) {
        // Toggle on button click
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('open');
            isOpen ? closeMenu() : openMenu();
        });

        // Close on backdrop click
        if (navBackdrop) {
            navBackdrop.addEventListener('click', closeMenu);
        }

        // Close on nav link tap
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }
});
