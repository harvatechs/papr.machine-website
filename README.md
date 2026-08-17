# Papr.Machine — Marketing Website

Production landing page for **Papr.Machine** ("Printing. Automated.") by **Tilak Infotech**.

## Design Tokens & Source of Truth

All design tokens (colors, typography, spacing, shadows, radius, motion) live in:
`src/styles/tokens.css`

To modify brand colors or spacing, edit that single file.

## Project Structure

```
├── index.html                  # Semantic one-page marketing structure
├── README.md                   # Build and developer notes
├── src/
│   ├── styles/
│   │   ├── tokens.css          # Design variables & core spec palette
│   │   ├── base.css            # Resets, typography, accessible focus
│   │   ├── layout.css          # Containers, section padding, reveal utilities
│   │   ├── components/         # Modular component styles (one job per file)
│   │   └── main.css            # Master stylesheet bundle
│   └── scripts/
│       ├── nav-scroll-spy.js   # IntersectionObserver active navigation
│       ├── header-shrink.js    # Sticky header transition on scroll
│       ├── section-reveal.js   # Scroll reveal choreography
│       ├── totp-ring.js        # Live TOTP ring countdown & PIN
│       ├── contact-form.js     # Form validation & submission simulation
│       └── main.js             # Application bootstrap entry point
├── assets/
│   ├── brand/                  # Logo, reversed white logo, custom SVG icons
│   ├── screenshots/            # Optimized product screenshots & kiosk render
│   └── downloads/              # Free Windows demo download package
└── public/
    ├── favicon.ico
    ├── favicon.png
    ├── og-image.png            # Open Graph social preview
    └── robots.txt              # Search engine directives
```

## Running Locally

This is a pure static site with ES6 modules. Run any local HTTP server:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js / npx
npx serve .
```

Open `http://localhost:3000` in your browser.

## Production Deployment

Deploy the entire folder to any static hosting service (Cloudflare Pages, Vercel, Netlify, AWS S3 / CloudFront, GitHub Pages, or Caddy). No build step required.
