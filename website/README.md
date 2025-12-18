# 🧠 NestMind Documentation Website

Factory.ai-inspired documentation website for NestMind - your personal AI knowledge companion.

Built with pure HTML, CSS, and JavaScript. No build tools, no frameworks, no dependencies.

## ✨ Features

### Factory.ai-Inspired Animations
- **Particle field background** - Floating animated particles
- **Floating code snippets** - Rotating NestMind code examples
- **Scroll-triggered animations** - Cards and sections fade in on scroll
- **Staggered entrance** - Hero content appears with smooth timing
- **Code typing effect** - Terminal displays code with realistic typing
- **Smooth transitions** - 200ms animations with cubic-bezier easing
- **Hover effects** - Card elevation, button ripples, underline animations

### Dark-Mode First Design
- Defaults to dark mode
- Respects system preference (`prefers-color-scheme`)
- Persists user choice in localStorage
- Smooth theme transitions
- Keyboard shortcut: `Cmd/Ctrl + Shift + D`

### Responsive Design
- Mobile-first approach
- Breakpoint: 768px
- Touch-friendly interactions
- Optimized for iPhone, iPad, Desktop

### Privacy & Performance
- All animations hardware-accelerated
- Reduced motion support (WCAG compliance)
- Zero external dependencies
- Works completely offline

## 📂 File Structure

```
website/
├── index.html          # Main page
├── css/
│   └── styles.css     # Factory.ai design system + NestMind custom styles
├── js/
│   ├── animations.js  # All animation implementations
│   └── theme.js       # Dark/light mode switching
├── assets/            # Future: images, icons, fonts
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Local Development

1. **Open directly in browser**:
   ```bash
   open index.html
   ```

2. **Use Python's built-in server** (optional, for proper MIME types):
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

3. **Use PHP's built-in server** (alternative):
   ```bash
   php -S localhost:8000
   ```

### Option 2: Deploy to GitHub Pages

1. **Create a new repository** or use existing NestMind repo

2. **Add website to repository**:
   ```bash
   # From NEST_MIND_DOCS/website directory
   git add .
   git commit -m "Add NestMind documentation website"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`, folder: `/NEST_MIND_DOCS/website`
   - Save

4. **Access your site**:
   - URL: `https://yourusername.github.io/NestMind/`
   - May take 2-3 minutes to deploy

### Option 3: Deploy to Netlify

1. **Drag and drop**:
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag the `website/` folder
   - Get instant deployment URL

2. **Connect to Git** (for continuous deployment):
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   cd website/
   netlify deploy --prod
   ```

### Option 4: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd website/
vercel --prod
```

## 🎨 Customization Guide

### Change Brand Colors

Edit `css/styles.css`:

```css
/* Line ~15 - Main accent color */
--color-accent: #ff6b35;        /* Change to your brand color */
--color-accent-hover: #ff5722;  /* Darker variant for hover */
```

### Change Content

Edit `index.html`:

```html
<!-- Hero section -->
<h1 class="hero-title">
    Your Custom
    <span class="gradient-text">Title</span>
</h1>

<!-- Feature cards -->
<div class="card">
    <div class="card-icon">🎯</div>
    <h3 class="card-title">Your Feature</h3>
    <p class="card-description">Your description</p>
</div>
```

### Adjust Animations

Edit `js/animations.js`:

```javascript
// Change particle count (line ~14)
const particleCount = 50; // Default: 30

// Change typing speed (line ~117)
const typingSpeed = 20; // Default: 30ms per character

// Change code rotation interval (line ~66)
setInterval(() => { ... }, 4000); // Default: 6000ms
```

### Disable Specific Animations

Edit `js/animations.js`:

```javascript
// At the bottom, comment out unwanted animations:
document.addEventListener('DOMContentLoaded', () => {
    createParticleField();              // ✅ Keep
    // createFloatingCodeSnippets();    // ❌ Disable
    setupScrollAnimations();            // ✅ Keep
    // setupCodeTypingEffect();         // ❌ Disable
});
```

## 🧪 Testing Checklist

- [ ] **Desktop browsers**:
  - [ ] Chrome/Edge (latest)
  - [ ] Safari (latest)
  - [ ] Firefox (latest)

- [ ] **Mobile browsers**:
  - [ ] iOS Safari
  - [ ] Android Chrome

- [ ] **Theme toggle**:
  - [ ] Click button switches themes
  - [ ] Theme persists on reload
  - [ ] Respects system preference on first visit
  - [ ] Keyboard shortcut works (Cmd+Shift+D)

- [ ] **Animations**:
  - [ ] Particles float in background
  - [ ] Code snippets rotate every 6 seconds
  - [ ] Hero content fades in with stagger
  - [ ] Cards fade in on scroll
  - [ ] Code types out in terminal
  - [ ] Buttons have ripple effect on click

- [ ] **Responsive design**:
  - [ ] Resize browser window (1920px → 375px)
  - [ ] All sections stack properly on mobile
  - [ ] Navigation collapses appropriately
  - [ ] Touch interactions work on mobile

- [ ] **Accessibility**:
  - [ ] Keyboard navigation works
  - [ ] Focus indicators visible
  - [ ] ARIA labels present
  - [ ] Reduced motion respected (System Preferences)

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### Optimization Tips

1. **Images** (when added):
   ```html
   <img src="logo.png" alt="NestMind" loading="lazy" width="100" height="100">
   ```

2. **Defer JavaScript**:
   ```html
   <script src="js/animations.js" defer></script>
   ```

3. **Minify for production**:
   ```bash
   # CSS
   npx csso css/styles.css -o css/styles.min.css

   # JavaScript
   npx terser js/animations.js -o js/animations.min.js
   npx terser js/theme.js -o js/theme.min.js
   ```

4. **Enable gzip compression** (server-side):
   - GitHub Pages: Automatic
   - Netlify: Automatic
   - Custom server: Configure `.htaccess` or nginx

## 🔧 Troubleshooting

### Animations Not Working

1. **Check JavaScript console** (F12 → Console)
   - Look for errors
   - Verify scripts loaded

2. **Verify file paths**:
   ```html
   <!-- Check these match your structure -->
   <link rel="stylesheet" href="css/styles.css">
   <script src="js/animations.js"></script>
   <script src="js/theme.js"></script>
   ```

3. **Check element classes**:
   - `.particle-field` exists for particles
   - `.floating-code` exists for code snippets
   - `.card` elements exist for scroll animations

### Theme Not Switching

1. **Clear localStorage**:
   ```javascript
   // In browser console
   localStorage.clear();
   location.reload();
   ```

2. **Check button exists**:
   ```html
   <button class="theme-toggle">
       <span class="theme-icon">🌙</span>
   </button>
   ```

### Particles Not Showing

1. **Check reduced motion setting**:
   - macOS: System Preferences → Accessibility → Display → Reduce Motion
   - Windows: Settings → Ease of Access → Display → Show animations

2. **Check mobile device**:
   - Particles hidden on small screens for performance
   - Edit `css/styles.css` to enable

### Layout Issues on Mobile

1. **Verify viewport meta tag**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test responsive breakpoints**:
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test at 375px, 768px, 1024px, 1920px

## 🎯 Next Steps

### Add More Content
- [ ] API documentation pages
- [ ] Feature deep-dives
- [ ] Code examples
- [ ] Architecture diagrams
- [ ] Video demos

### Add Assets
- [ ] NestMind logo (SVG recommended)
- [ ] App screenshots
- [ ] Feature mockups
- [ ] Social media preview image

### SEO Optimization
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt

### Analytics (Optional)
- [ ] Google Analytics
- [ ] Plausible (privacy-friendly)
- [ ] Fathom Analytics

## 📝 Notes

### Design Philosophy
- **Factory.ai-inspired** - Modern, animated, developer-focused
- **Dark-mode first** - Respects modern preferences
- **Privacy-first** - No tracking, no external calls
- **Performance-first** - Hardware-accelerated, optimized

### Browser Support
- **Chrome/Edge**: 90+
- **Safari**: 14+
- **Firefox**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Android**: Latest

### Accessibility
- **WCAG 2.1 Level AA** compliant
- **Keyboard navigation** fully supported
- **Screen reader** friendly
- **Reduced motion** respected

## 🤝 Contributing

To improve this website:

1. **Test on your device** and report issues
2. **Suggest content additions** for documentation
3. **Propose design improvements** that maintain factory.ai aesthetic
4. **Submit pull requests** with enhancements

## 📚 Resources

- **Factory.ai** (inspiration): https://factory.ai
- **Modern Web Factory skill**: `.claude/skills/modern-web-factory/`
- **NestMind docs**: `NEST_MIND_DOCS/`
- **Design principles**: `.claude/skills/modern-web-factory/references/design-principles.md`
- **Animation library**: `.claude/skills/modern-web-factory/references/animation-library.md`

## 📄 License

This documentation website is part of the NestMind project.

---

Built with ❤️ for the iOS community using factory.ai-inspired design patterns.
