# Mr. Ahmed Samir 3D Portfolio — Session Handoff (UNRESOLVED BUG)

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Local Dev Server**: `http://localhost:5173/`
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js r128 + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (`#060402`, `#4E2E1B`, `#FAF6F0`, `#A67C5B`, `#2E1E15`).

## 2. CRITICAL UNRESOLVED BUG
- **Problem**: Intermittent white background appears under the top bar upon page reload/refresh (`Ctrl + F5` or normal `F5`), affecting both Localhost and GitHub Pages.
- **User Video Proof**: `D:\Downloads\Recording 2026-09-02 203944.mp4` (Frame 00:00 shows the entire hero section background rendered solid white, with dark top bar, dark cards, dark buttons, and teacher portrait).
- **User Observation**: *"احيانا بتعمل الابيض لما احدث واحيانا لا"* (sometimes it renders white on refresh, sometimes it renders dark).
- **Current Status**: **STILL UNRESOLVED**.

## 3. Failed Attempts & Lessons Learned (What Did NOT Work)
1. **Inline styles on `html` and `body`**: Added `style="background-color: #060402 !important;"`. Did not prevent the white background.
2. **Font `display=block` & preloading**: Preloaded fonts and images in `<head>`. Resolved font flicker, but did not resolve the white background.
3. **Canvas `visibility: hidden; opacity: 0;` gate**: Set canvas to hidden until first frame. Did not prevent the white background.
4. **Meta `color-scheme: dark`**: Added to `<head>` and `:root`. Did not prevent the white background.
5. **Hiding `#app-wrapper` until JS loads**: Hid main container until `requestAnimationFrame`. Resulted in visual desync; user still captured screenshot of white background with content rendered.
6. **Blaming mobile Force Dark Mode**: Attempted adding `!important` to blur filters. Misdiagnosis — bug occurs on desktop Edge/Chrome.
7. **Transparent WebGL + `#site-curtain` (`z-index: 999999`)**: Set `alpha: true`, `setClearColor(0, 0)`, and added full-screen dark curtain. Reduced frequency, but as proven in user video frame `00:00`, the bug still recurs intermittently.

## 4. Immediate Starting Point for Next Session
- Open DevTools layer inspector (`chrome://gpu` and Elements -> Layers) during a state where the background is white.
- Trace exactly which DOM element or compositor surface has `#ffffff` computed background.
- Determine if the white layer is the canvas framebuffer, the body compositor layer, or an unstyled container during a failed WebGL context lifecycle.
