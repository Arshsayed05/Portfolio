# ARSH. — Experimental Swiss Brutalist Personal Portfolio

> **"ENGINEERED TO THINK. BUILT TO CREATE."**  
> An experimental personal portfolio website for **Arsh Kasim Sayed**, combining Swiss International Typographic Style, modern brutalism, editorial compositions, and interactive creative web engineering.

---

## ✦ Art Direction & Design System

- **Visual Concept:** Swiss International Typographic Style meets modern digital brutalism.
- **Palette:**
  - **Primary Background:** Warm Off-White (`#F3F1E8`)
  - **Primary Typography:** Near Black (`#111111`)
  - **Accent:** Acid Lime (`#D6FF00`)
  - **Secondary Accent:** Muted Grey (`#777777`)
  - **Supporting Surface:** Light Grey (`#E5E5DF`)
- **Typography:**
  - Display: *Space Grotesk*
  - Body & UI: *Inter*
  - Metadata & Monospace: *IBM Plex Mono*
  - Editorial Accents: *Newsreader*
- **Grid:** Visible 12-column Swiss coordinate grid lines, hairline borders, and datum points.

---

## ✦ Core Features & Architecture

1. **Preloader:** Minimal typographic Swiss ticker with rapid progress counter and smooth reveal.
2. **Sticky Brutalist Header:**
   - Active section spy
   - Live Indian Standard Time (IST) clock
   - Web Audio interface click feedback toggle
   - Interactive Terminal toggle (`[CLI ~]`)
   - Fully responsive mobile drawer
3. **Hero Composition:**
   - Massive typographic hierarchy (`ARSH` / `KASIM` / `SAYED.`)
   - Acid-lime positioning statement banner
   - Interactive 2D/3D Kinetic Isometric Canvas responding to cursor movement
   - Technical spec box & quick CTA triggers
4. **About Dossier:**
   - Editorial two-column story
   - Oversized typographic pull-quote
   - Swiss crop-marked photographic portrait placeholder
5. **The Three Dimensions:**
   - **Dimension 01: The Engineer** (Computer Science, Python, Java, JS, TypeScript, Socket Programming, full-stack web)
   - **Dimension 02: The Competitor** (BGMI competitive circuit since 2018/2020, XTREME PHOENIX squad ownership, verified LAN runner-up and Champions League runner-up)
   - **Dimension 03: The Builder** (AFTER HOURS collegiate esports club founder dossier, organizational leadership, campus tournaments)
6. **Project Archive:**
   - Project 001: AFTER HOURS — Collegiate Esports Platform (React, TypeScript, Video Scrubbing, live at afterhoursnmamit.vercel.app)
   - Project 002: ARSH. — Swiss Brutalist Personal Portfolio (React, TypeScript, Web Audio, CLI, live at arshsayeddev.vercel.app)
   - Project 003: Python Multi-Client Socket Chat System (Python, Socket Programming, TCP/IP, Concurrency)
   - Custom SVG technical schematics & detailed architecture modal with direct GitHub links
7. **Experience Timeline:**
   - Editorial horizontal & vertical chronological track from 2018 to Present
   - Interactive click-to-focus milestone inspector
8. **Skills Toolkit:**
   - Curated competency index across Programming, Technology, Creative, and Leadership
   - Real-world focus areas with no fake percentage bars
9. **Verified Achievements:**
   - Official Swiss registry of verified podium finishes and institutional leadership
10. **Contact & Colophon:**
    - Direct form with client validation and automated `mailto:` dispatch fallback
    - One-click copy email address to clipboard
    - Verified GitHub link and labeled placeholders for LinkedIn and Instagram
11. **Signature Interactions:**
    - Custom desktop cursor tracking coordinates `[X, Y]` and button states
    - Interactive Terminal shell with commands: `about`, `projects`, `skills`, `esports`, `contact`, `date`, `clear`

---

## ✦ How to Customize Content

All text, links, social handles, and projects are centralized in one clean TypeScript file:
```
src/data/portfolioContent.ts
```

### To replace the portrait placeholder with your photo:
1. Place your photo (e.g. `arsh.jpg`) into the `public/` directory.
2. Open `src/components/AboutSection.tsx` and replace the placeholder frame with `<img src="/arsh.jpg" alt="Arsh Kasim Sayed" className="w-full h-full object-cover" />`.

---

## ✦ Development & Deployment

### Run locally:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```
The output will be in `dist/`, ready to deploy immediately to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.
