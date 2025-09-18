# Adil PA • Lume Productions — Cinematic Neon Portfolio
[Frontend-only] React + Vite + Tailwind portfolio for **Adil PA** at **Lume Productions**, production-ready for Vercel.

## Tech
React (Vite) • Tailwind (dark mode class) • Framer Motion • Swiper.js — static site.

## Setup
```bash
npm install
npm run dev
```
Build & preview:
```bash
npm run build
npm run preview
```

## Deploy to Vercel
- Push to GitHub and import in Vercel (or drag-drop).
- `vercel.json` routes all paths to `index.html` and sets `dist` as output.

## Replace placeholders
- **B/W image:** `src/assets/bw-placeholder.png`
- **Logo:** `src/assets/logo-placeholder.png`
- **Hero poster/video:** `src/assets/hero-poster.jpg` (optional `src/assets/hero-loop.mp4` if you add one)
- **Brands:** `src/assets/brand1.png ... brand8.png`
- **YouTube thumbs:** `src/assets/yt-thumb-1.jpg ... yt-thumb-6.jpg`
- **Instagram thumbs:** `src/assets/instagram-thumb-1.jpg ... instagram-thumb-6.jpg`
- **OG image:** `src/assets/og-image.png`
- **Contact details:** `src/components/Contact.jsx`
- **Project data:** `src/data/projects.js`, logos in `src/data/brands.js`

## YouTube embeds (lazy)
Thumbnails render first. When a thumbnail is clicked, the iframe is inserted inside the modal. Put your `https://www.youtube.com/embed/VIDEO_ID?autoplay=1` in `projects.js` → `url` field.

## Connect a form
Use Formspree or EmailJS:
- Replace `<form action="https://formspree.io/f/XXXX" method="POST">` in `Contact.jsx`.
- Add hidden `_subject` etc. if needed.

## Troubleshooting
- Tailwind not applying? Restart dev server after editing `tailwind.config.cjs`.
- Swiper not styled? Ensure imports in components.
- Fonts: switch to self-hosted by replacing files in `/fonts` and keeping `fonts.css` linked in `index.html`.

### Deployment Checklist
- [ ] `npm install` succeeds
- [ ] `npm run dev` renders site
- [ ] Dark/light toggle persists via `localStorage`
- [ ] Sliders auto-play, responsive
- [ ] Modal loads YouTube iframe on click
- [ ] Images use `loading="lazy"`
- [ ] `npm run build` → `dist/`
- [ ] Deployed on Vercel
