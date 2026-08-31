# Technical Specification: 3D Luxury English Portfolio
Status: FINALIZED

## Architecture & Tech Stack
- **Frontend Core**: Vanilla ES6 Modules + Vite 6 + Tailwind CSS 3.4 + PostCSS.
- **3D Engine**: Three.js (r174) with WebGLRenderer, custom floating geometry, MeshPhysicalMaterial / MeshStandardMaterial, and smooth camera dampening.
- **Animation Framework**: GSAP 3.12 + ScrollTrigger for scroll-driven reveals, hover micro-interactions, and magnetic physics.
- **Audio Engine**: Web Audio API + SpeechSynthesis for real-time phonetics playback.
- **Assets**: 5K master portrait cutout processed with alpha matting (`public/images/mr_ahmed_hero_cutout_web.webp`).

## Module Interfaces & Boundaries
1. `src/threeScene.js` -> Manages Three.js Canvas container (`#three-canvas`), kinetic 3D letters, ambient amber particles, resize listener, and RAF loop.
2. `src/portraitHero.js` -> Manages `#hero-portrait-container`, mousemove lerping, 2.5D transform tilt, dynamic CSS custom properties for rim-light angle.
3. `src/phoneticsLab.js` -> Manages interactive pronunciation card listeners, speech synthesis, and audio visualizer wave canvas.
4. `src/main.js` -> Master orchestrator: inits GSAP, ScrollTrigger, Lucide icons, modal dialogs, confetti triggers, and mobile drawer.
5. `index.html` -> Semantic HTML structure, SEO metadata, OpenGraph tags, and layout sections.
