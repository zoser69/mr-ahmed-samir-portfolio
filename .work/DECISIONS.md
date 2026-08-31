# Architecture Decision Records (ADRs)

## ADR-001: Local Workspace Skills Installation
- **Date**: 2026-08-31
- **Context**: User requested downloading relevant skills for a 3D English teacher portfolio specifically for this project folder only.
- **Decision**: Installed 25 curated skills into `.agents/skills/` covering two core domains:
  1. Creative WebGL, kinetic typography, and scrollytelling from `MengTo/skills`.
  2. Core 3D engine mechanics (Three.js fundamentals, loaders, lighting, shaders, interaction) from `CloudAI-X/threejs-skills`.
- **Consequences**: Skills are scoped locally to `d:/Anti Projects/MR Ahmed Samir` without cluttering global configs, ready for progressive disclosure.

## ADR-002: Adaptive 3-Tier Performance Engine & Self-Healing Watchdog
- **Date**: 2026-08-31
- **Context**: Need high-fidelity 4K 3D graphics on flagships and desktops without lagging or overheating budget mobile devices.
- **Decision**: Implemented a 3-tier capability detection system (`High`, `Mid`, `Low`) based on `navigator.hardwareConcurrency` and `deviceMemory`. Added a dynamic real-time FPS watchdog that downscales quality on-the-fly if frame rate drops below 40 FPS for 2 seconds.
- **Consequences**: Zero lag on budget devices, pristine visual fidelity on high-end devices, battery-friendly dormancy when offscreen.

## ADR-003: Independent ScrollTriggers & Removal of fastScrollEnd
- **Date**: 2026-08-31
- **Context**: Monolithic GSAP timelines and `fastScrollEnd: true` caused animations to trigger offscreen or skip entirely during fast scrolling.
- **Decision**: Discarded monolithic tall-section timelines in favor of individual element ScrollTriggers (`top 75%`). Removed `fastScrollEnd: true` globally and set `force3D: true`.
- **Consequences**: Animations smoothly and reliably wait for the user to view them before playing, with zero subpixel shifts or stutter.

## ADR-004: Tree-Shaking & Bundle Optimization
- **Date**: 2026-08-31
- **Context**: Production bundle was 1.2MB due to importing full `lucide` icon set and unused assets.
- **Decision**: Tree-shook Lucide icons to 7 named imports and removed 38MB of unreferenced raw images from `public/`.
- **Consequences**: JS bundle reduced by ~50% to 636KB, build size reduced by >90%.

## ADR-005: Addition of Design, Arabic Typography & Color Harmony Skills
- **Date**: 2026-08-31
- **Context**: User requested adding high-rated design skills from GitHub supporting Arabic typography, Arabic fonts, and color harmony.
- **Decision**: 
  1. Ingested `jakubkrehel/skills` (`better-colors`, `better-typography`, `better-ui`, `better-layout`) for interface polish and design token engineering.
  2. Ingested `meodai/skill.color-expert` for color science, OKLCH, APCA, WCAG, and perceptual color harmony.
  3. Engineered custom, world-class `arabic-typography-and-design` skill encoding the zero letter-spacing law, optical size compensation (+15%–25%), line-height rules (1.65–1.85), bilingual pairing matrix, and culturally resonant color palettes.
- **Consequences**: Provides deterministic, expert guidance for Arabic and bilingual luxury design without generic AI design defaults. Audited and passed by independent review.
