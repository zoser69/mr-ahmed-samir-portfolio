# Executable Roadmap

## Lane 1: 3D WebGL Background Engine (`src/threeScene.js`)
- [ ] Implement Three.js canvas setup with responsive resize and pixel ratio capping (max 2).
- [ ] Create floating 3D English typographic letters and phonetic symbols with warm amber glass materials.
- [ ] Add ambient floating golden dust particles and mouse-reactive camera parallax.
- [ ] Implement resource disposal on teardown.

## Lane 2: Hero Portrait 2.5D Parallax & Rim Lighting (`src/portraitHero.js`)
- [ ] Implement mouse tracking with spring physics and dampening.
- [ ] Bind 2.5D 3D tilt rotation and translation to hero portrait image.
- [ ] Add dynamic cursor-following champagne rim-light shader and luminous glow.
- [ ] Implement interactive floating glass badges with hover tilt.

## Lane 3: Interactive Phonetics Lab & Audio Engine (`src/phoneticsLab.js`)
- [ ] Implement audio pronunciation engine (Web Audio / SpeechSynthesis).
- [ ] Build interactive phonetic cards with accent toggle (British / American) and tricky exam words.
- [ ] Add animated audio soundwave canvas visualizer.

## Lane 4: UI Scrollytelling, Bento Grid, Hall of Fame & Booking (`index.html`, `src/main.js`)
- [ ] Build luxury semantic HTML layout with Tailwind CSS.
- [ ] Implement GSAP ScrollTrigger timeline animations for section entrances.
- [ ] Build Bento Grid methodology cards, academic levels breakdown, and Hall of Fame with confetti celebration.
- [ ] Build interactive booking modal with direct WhatsApp integration.

## Lane 5: Build Verification & Independent Review
- [ ] Run `npm run build` and verify clean compilation with 0 errors.
- [ ] Conduct independent quality, security, and responsive checks.
- [ ] Record verification proof in `.work/REVIEW.md`.
