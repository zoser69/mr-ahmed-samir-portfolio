# Crystallized Memory & Heuristics

## Heuristics & Rules
- **Date**: 2026-08-31
- **Project**: 3D Portfolio for English Teacher (Mr. Ahmed Samir).
- **Rule 1 (GSAP vs CSS Conflicts)**: Never use Tailwind `transition-all` or `transition-transform` on elements animated by GSAP. Use property-specific transitions (e.g. `transition-colors`) to avoid frame-by-frame interpolation wars and snapping.
- **Rule 2 (GSAP Sub-Pixel Shift)**: Always set `force3D: true` on GSAP `.to()` and `.fromTo()` tweens for images/cards to prevent sub-pixel matrix drop shifts upon tween completion.
- **Rule 3 (Mobile URL Bar Jitter)**: On mobile browsers, ignore `window.resize` events where only height changes (< 140px) due to address bar collapse. Always set `ScrollTrigger.config({ ignoreMobileResize: true })`.
- **Rule 4 (Fast Scroll Completion)**: Never set `fastScrollEnd: true` if you want animations to reliably play when scrolled to quickly.
- **Rule 5 (Adaptive WebGL Scaling)**: Detect CPU cores and RAM via `navigator.hardwareConcurrency` & `navigator.deviceMemory`, and install a dynamic FPS watchdog to self-heal performance on low-tier mobile devices.
- **Rule 6 (Full-Page Fixed WebGL Canvas)**: If a WebGL canvas is fixed in the viewport as a global ambient background (`fixed inset-0`), do NOT bind `IntersectionObserver` to a single section like `#hero`. Pause rendering ONLY via `document.addEventListener('visibilitychange')` when the tab is hidden to prevent freezing background animation on scroll.

## Session Conclusion Handoffs
- **2026-08-31** | 3D Luxury WebGL Portfolio & Adaptive Tiering Engine | `src/threeScene.js`, `src/portraitHero.js`, `index.html`, `src/main.js`, `src/style.css` | Implemented 3-Tier Adaptive WebGL Engine with real-time FPS watchdog, continuous full-page 3D background animation, wide 16:9 slot distribution, anti-slop editorial typography, and Arabic typography standard compliance. | Risk: None (0 errors, verified across all viewports). | Security: No unsanitized inputs, full a11y with aria-hidden, secure external links with noopener.
