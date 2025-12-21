# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NestMind documentation website - a static marketing/docs site for the NestMind iOS app. Built with pure HTML, CSS, and JavaScript with no build tools, frameworks, or dependencies.

## Local Development

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (recommended for proper MIME types)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Live reload
npx live-server
```

## Architecture

**Pages**: `index.html`, `features.html`, `vision.html`, `privacy.html`, `support.html`

**Stylesheets**:
- `css/styles.css` - Main styles and design system (brand colors at line ~15)
- `css/docs.css` - Documentation-specific styles
- `css/vision.css` - Vision page styles

**JavaScript**:
- `js/animations.js` - Scroll animations, particle field, staggered entrance effects
- `js/theme.js` - Dark/light mode toggle (persists in localStorage, keyboard shortcut: Cmd+Shift+D)
- `js/docs.js` - Documentation page functionality

**Assets**: `images/` contains app screenshots (.webp) and the NestMind icon

## Design Patterns

- Dark-mode first design (respects `prefers-color-scheme`)
- Mobile-first responsive design (breakpoint: 768px)
- Hardware-accelerated animations with reduced motion support
- Factory.ai-inspired aesthetic with particle backgrounds and floating code snippets

## Deployment

Hosted on GitHub Pages. See `HOSTING.md` for alternative deployment options (Netlify, Vercel, Cloudflare Pages).
