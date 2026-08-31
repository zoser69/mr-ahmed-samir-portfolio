# Mr. Ahmed Samir 3D Portfolio — Session Handoff

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (#060402, #4E2E1B, #FAF6F0, #A67C5B, #2E1E15).

## 2. Key Architecture & Features Completed
1. **Adaptive 3-Tier WebGL Engine (src/threeScene.js)**:
   - Hardware-aware tier detection (High, Mid, Low) based on CPU cores and RAM.
   - Dynamic real-time FPS watchdog downscales quality on-the-fly if frame rate drops below 40 FPS, preventing any lag or stutter.
   - Art-directed 16-slot coordinate system (DESKTOP_SLOTS and MOBILE_SLOTS) ensuring zero overlap with the teacher's portrait.
   - Time-delta frame-rate independent rotation (t * rotSpeed * 60).
2. **Deterministic GSAP Scroll Motion (src/portraitHero.js)**:
   - Independent element ScrollTriggers (top 75%) so animations never trigger offscreen or rush past the user.
   - Complete removal of fastScrollEnd and addition of force3D: true for buttery 60fps motion without subpixel shifts.
   - Mobile URL bar resize stabilization (ScrollTrigger.config({ ignoreMobileResize: true }) and width-only listener).
3. **High-End UI & Frosted Glass Header (index.html, src/style.css)**:
   - Frosted Glassmorphism header (backdrop-blur-2xl bg-[#060402]/50).
   - Pure typography pairing: Playfair Display / Cinzel + El Messiri + Manrope.
   - Tree-shaken Lucide icons (bundle reduced by 50% to 636KB).

## 3. Production Build & Deployment Pipeline
- Build: npm run build
- Deploy: npx --yes gh-pages -d dist
- Repository: https://github.com/zoser69/mr-ahmed-samir-portfolio.git (branch main).
