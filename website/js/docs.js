/**
 * DOCUMENTATION PAGE INTERACTIONS
 * Tbench.ai-inspired functionality
 */

// ============================================
// MOBILE SIDEBAR TOGGLE
// ============================================

function setupMobileSidebar() {
    const toggle = document.querySelector('.mobile-sidebar-toggle');
    const sidebar = document.querySelector('.docs-sidebar');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Close sidebar when clicking a link (mobile)
    const numberedLinks = sidebar.querySelectorAll('.numbered-link');
    numberedLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                sidebar.classList.remove('open');
            }
        });
    });
}

// ============================================
// ACTIVE LINK HIGHLIGHTING & PROGRESS DOTS
// ============================================

function setupActiveLinks() {
    const sections = document.querySelectorAll('.docs-article section');
    const numberedLinks = document.querySelectorAll('.numbered-link');
    const tocLinks = document.querySelectorAll('.toc-link');
    const progressDots = document.querySelectorAll('.progress-dots .dot');

    const observerOptions = {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                // Update numbered sidebar navigation active state
                numberedLinks.forEach((link, index) => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        numberedLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');

                        // Update progress dots based on active link
                        progressDots.forEach(dot => dot.classList.remove('active'));
                        const dotIndex = Math.floor(index / Math.ceil(numberedLinks.length / progressDots.length));
                        if (progressDots[dotIndex]) {
                            progressDots[dotIndex].classList.add('active');
                        }
                    }
                });

                // Update TOC active state
                tocLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        tocLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offset = 72; // Account for sticky header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// CODE COPY BUTTONS
// ============================================

function setupCodeCopyButtons() {
    const copyButtons = document.querySelectorAll('.code-copy');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeBlock = button.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;

            try {
                await navigator.clipboard.writeText(code);

                // Visual feedback
                const originalHTML = button.innerHTML;
                button.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
                button.style.color = '#10b981';

                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });
}

// ============================================
// SEARCH KEYBOARD SHORTCUT
// ============================================

function setupSearchShortcut() {
    const searchToggle = document.querySelector('.search-toggle');

    if (!searchToggle) return;

    document.addEventListener('keydown', (e) => {
        // CMD/Ctrl + K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchToggle.click();
            // In a real implementation, this would open a search modal
            console.log('Search triggered with ⌘K');
        }
    });

    searchToggle.addEventListener('click', () => {
        // Placeholder for search functionality
        console.log('Search clicked - implement search modal here');
    });
}

// ============================================
// TABLE OF CONTENTS SCROLL SPY
// ============================================

function setupTOCScrollSpy() {
    const headings = document.querySelectorAll('.docs-article h2[id], .docs-article h3[id]');
    const tocLinks = document.querySelectorAll('.toc-link');

    if (headings.length === 0 || tocLinks.length === 0) return;

    const observerOptions = {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
    };

    let activeLink = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const correspondingLink = Array.from(tocLinks).find(
                    link => link.getAttribute('href') === `#${id}`
                );

                if (correspondingLink && correspondingLink !== activeLink) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                    activeLink = correspondingLink;
                }
            }
        });
    }, observerOptions);

    headings.forEach(heading => observer.observe(heading));
}

// ============================================
// ANCHOR LINK ICONS (Optional Enhancement)
// ============================================

function addAnchorLinkIcons() {
    const headings = document.querySelectorAll('.docs-article h2[id], .docs-article h3[id]');

    headings.forEach(heading => {
        const anchor = document.createElement('a');
        anchor.href = `#${heading.id}`;
        anchor.className = 'anchor-link';
        anchor.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 6H7a3 3 0 000 6h3m0-6h3a3 3 0 010 6h-3m-3-3h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        anchor.setAttribute('aria-label', 'Link to this section');

        heading.style.position = 'relative';
        heading.appendChild(anchor);
    });

    // Add CSS for anchor links
    const style = document.createElement('style');
    style.textContent = `
        .anchor-link {
            position: absolute;
            left: -28px;
            opacity: 0;
            transition: opacity 200ms;
            color: var(--color-text-tertiary);
        }
        h2:hover .anchor-link,
        h3:hover .anchor-link {
            opacity: 1;
        }
        .anchor-link:hover {
            color: var(--color-accent);
        }
        @media (max-width: 1024px) {
            .anchor-link {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile sidebar
        if (e.key === 'Escape') {
            const sidebar = document.querySelector('.docs-sidebar');
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// ============================================
// INITIALIZE ALL FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupMobileSidebar();
    setupActiveLinks();
    setupSmoothScrolling();
    setupCodeCopyButtons();
    setupSearchShortcut();
    setupTOCScrollSpy();
    addAnchorLinkIcons();
    setupKeyboardNavigation();

    console.log('📚 Documentation page initialized');
});

// ============================================
// EXPORT FOR TESTING
// ============================================

window.docsManager = {
    setupMobileSidebar,
    setupActiveLinks,
    setupCodeCopyButtons
};
