/**
 * FACTORY.AI-INSPIRED ANIMATIONS
 * Pure JavaScript implementation
 */

// ============================================
// PARTICLE FIELD ANIMATION
// ============================================

function createParticleField() {
    const particleField = document.querySelector('.particle-field');
    if (!particleField) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleField);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random starting position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;

    // Random animation delay and duration
    const delay = Math.random() * 10;
    const duration = 10 + Math.random() * 10;

    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    container.appendChild(particle);

    // Remove and recreate particle after animation ends
    particle.addEventListener('animationiteration', () => {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
    });
}

// ============================================
// FLOATING CODE SNIPPETS
// ============================================

function createFloatingCodeSnippets() {
    const floatingCode = document.querySelector('.floating-code');
    if (!floatingCode) return;

    const codeSnippets = [
        `// Semantic search with embeddings\nlet results = await semanticSearch.search(\n    query: "iOS development",\n    items: bookmarks\n)`,
        `// Foundation Models AI\n@Observable class AssistantViewModel {\n    let session: FoundationModelSession\n}`,
        `// On-device privacy\nfunc processLocally() async {\n    // No cloud, no tracking\n}`,
        `// SwiftData + CloudKit\n@Model class Bookmark {\n    var title: String\n    var embeddingData: Data?\n}`,
        `// Smart routing\nfunc route(query: String) -> Intent {\n    classifier.classify(query)\n}`
    ];

    let currentIndex = 0;

    // Rotate through code snippets
    setInterval(() => {
        floatingCode.style.opacity = '0';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % codeSnippets.length;
            floatingCode.textContent = codeSnippets[currentIndex];
            floatingCode.style.opacity = '0.6';
        }, 300);
    }, 6000);
}

// ============================================
// SMOOTH SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe showcase section
    const showcase = document.querySelector('.code-terminal');
    if (showcase) {
        showcase.style.opacity = '0';
        showcase.style.transform = 'translateY(30px)';
        showcase.style.transition = 'all 0.6s ease';
        observer.observe(showcase);
    }
}

// ============================================
// SMOOTH ANCHOR SCROLLING
// ============================================

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT (Subtle)
// ============================================

function setupParallaxEffect() {
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.hero-animation');

                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });
}

// ============================================
// CODE TERMINAL TYPING EFFECT
// ============================================

function setupCodeTypingEffect() {
    const codeElement = document.querySelector('.code code');
    if (!codeElement) return;

    const originalText = codeElement.textContent;
    codeElement.textContent = '';

    let charIndex = 0;
    const typingSpeed = 30;

    function typeChar() {
        if (charIndex < originalText.length) {
            codeElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        }
    }

    // Start typing when code terminal is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                setTimeout(typeChar, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const terminal = document.querySelector('.code-terminal');
    if (terminal) {
        observer.observe(terminal);
    }
}

// ============================================
// HOVER EFFECTS ENHANCEMENT
// ============================================

function enhanceHoverEffects() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn { position: relative; overflow: hidden; }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    createParticleField();
    createFloatingCodeSnippets();
    setupScrollAnimations();
    setupSmoothScrolling();
    setupParallaxEffect();
    setupCodeTypingEffect();
    enhanceHoverEffects();

    console.log('✨ Factory.ai-inspired animations initialized');
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');

    // Disable particle animations
    document.querySelectorAll('.particle').forEach(p => p.remove());
}
