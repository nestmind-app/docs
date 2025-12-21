/**
 * THEME MANAGEMENT (Dark/Light Mode)
 * Factory.ai-inspired theme switching with localStorage persistence
 */

// ============================================
// THEME CONFIGURATION
// ============================================

const THEME_KEY = 'nestmind-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

// ============================================
// THEME UTILITIES
// ============================================

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME_DARK
        : THEME_LIGHT;
}

function getSavedTheme() {
    return localStorage.getItem(THEME_KEY);
}

function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

function getCurrentTheme() {
    return getSavedTheme() || getSystemTheme();
}

// ============================================
// THEME APPLICATION
// ============================================

function applyTheme(theme, skipTransition = false) {
    const html = document.documentElement;

    // Disable transitions during initialization to prevent jarring reflows
    if (skipTransition) {
        html.classList.add('disable-transitions');
    }

    if (theme === THEME_DARK) {
        html.classList.add('dark');
        updateThemeIcon('☀️'); // Sun icon for switching to light
    } else {
        html.classList.remove('dark');
        updateThemeIcon('🌙'); // Moon icon for switching to dark
    }

    // Re-enable transitions after a brief delay
    if (skipTransition) {
        setTimeout(() => {
            html.classList.remove('disable-transitions');
        }, 1);
    }

    saveTheme(theme);
}

function updateThemeIcon(icon) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = icon;
    }
}

function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme, false);
}

// ============================================
// THEME INITIALIZATION
// ============================================

function initializeTheme() {
    // Apply theme immediately (before DOMContentLoaded) to prevent flash
    const theme = getCurrentTheme();
    applyTheme(theme, true);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!getSavedTheme()) {
            const newTheme = e.matches ? THEME_DARK : THEME_LIGHT;
            applyTheme(newTheme, false);
        }
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // CMD/Ctrl + Shift + D to toggle theme
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================

function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (!menuToggle || !navLinks) return;

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ============================================
// INITIALIZE
// ============================================

// Apply theme immediately (prevents flash of wrong theme)
initializeTheme();

// Setup event listeners after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupKeyboardShortcuts();
    setupMobileMenu();

    console.log(`🎨 Theme initialized: ${getCurrentTheme()}`);
});

// ============================================
// EXPORT FOR TESTING (Optional)
// ============================================

window.themeManager = {
    getCurrentTheme,
    toggleTheme,
    applyTheme,
    THEME_DARK,
    THEME_LIGHT
};
