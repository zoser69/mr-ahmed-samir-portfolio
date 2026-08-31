# Crystallized Memory & Heuristics

## Heuristics & Rules
- **Date**: 2026-08-31
- **Project**: 3D Portfolio for English Teacher (Mr. Ahmed Samir).
- **Rule 1 (GSAP vs CSS Conflicts)**: Never use Tailwind `transition-all` or `transition-transform` on elements animated by GSAP. Use property-specific transitions (e.g. `transition-colors`) to avoid frame-by-frame interpolation wars and snapping.
- **Rule 2 (GSAP Sub-Pixel Shift)**: Always set `force3D: true` on GSAP `.to()` and `.fromTo()` tweens for images/cards to prevent sub-pixel matrix drop shifts upon tween completion.
- **Rule 3 (Mobile URL Bar Jitter)**: On mobile browsers, ignore `window.resize` events where only height changes (< 140px) due to address bar collapse. Always set `ScrollTrigger.config({ ignoreMobileResize: true })`.
- **Rule 4 (Fast Scroll Completion)**: Never set `fastScrollEnd: true` if you want animations to reliably play when scrolled to quickly.
- **Rule 5 (Adaptive WebGL Scaling)**: Detect CPU cores and RAM via `navigator.hardwareConcurrency` & `navigator.deviceMemory`, and install a dynamic FPS watchdog to self-heal performance on low-tier mobile devices.
