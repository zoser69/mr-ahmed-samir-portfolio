import './style.css';
import { initThreeScene } from './threeScene.js';
import { initPortraitHero, playHeroEntrance } from './portraitHero.js';
import { createIcons, PhoneCall, MessageCircle, Phone, Facebook, Youtube, Video, Instagram } from 'lucide';

let isCurtainLifted = false;

function liftCurtain() {
  if (isCurtainLifted) return;
  isCurtainLifted = true;
  const curtain = document.getElementById('site-curtain');
  if (curtain) {
    curtain.style.opacity = '0';

    // Start hero entrance concurrently with curtain fade for dynamic, zero-lag arrival
    playHeroEntrance();

    setTimeout(() => {
      if (curtain) {
        curtain.style.visibility = 'hidden';
      }
    }, 550);
  } else {
    playHeroEntrance();
  }
}

function initApp() {
  console.log('[App] Initializing Mr. Ahmed Samir Portfolio...');

  const appStartTime = performance.now();
  const MIN_CURTAIN_MS = 350;

  // Fallback curtain lift (2000ms): if WebGL initialization is delayed or fails,
  // ensure the user can still read the site content.
  const curtainSafetyTimer = setTimeout(liftCurtain, 2000);

  // 1. Initialize Lucide Icons with aria-hidden for accessibility
  try {
    createIcons({
      icons: { PhoneCall, MessageCircle, Phone, Facebook, Youtube, Video, Instagram },
      attrs: {
        'aria-hidden': 'true'
      }
    });
    console.log('[App] Lucide icons initialized successfully with a11y');
  } catch (err) {
    console.error('[App] Lucide icon error:', err);
  }

  // 2. Initialize 3D Canvas Background with onReady callback
  try {
    initThreeScene(() => {
      clearTimeout(curtainSafetyTimer);
      const elapsed = performance.now() - appStartTime;
      const delay = Math.max(0, MIN_CURTAIN_MS - elapsed);
      setTimeout(liftCurtain, delay);
    });
    console.log('[App] Three.js scene initialized successfully');
  } catch (err) {
    console.error('[App] Three.js initialization error:', err);
    clearTimeout(curtainSafetyTimer);
    liftCurtain();
  }

  // 3. Initialize Portrait Entrance & Motion
  try {
    initPortraitHero();
    console.log('[App] Portrait hero initialized successfully');
  } catch (err) {
    console.error('[App] Portrait hero error:', err);
  }
}

// Instant Reload Shield: Guarantees 100% solid dark snapshot on reload button click, F5, or navigation
function activateReloadShield() {
  const curtain = document.getElementById('site-curtain');
  if (curtain) {
    curtain.style.transition = 'none';
    curtain.style.visibility = 'visible';
    curtain.style.opacity = '1';
  }
  const canvas = document.getElementById('three-canvas');
  if (canvas) {
    canvas.style.transition = 'none';
    canvas.style.opacity = '0';
  }
}

window.addEventListener('beforeunload', activateReloadShield);
window.addEventListener('pagehide', activateReloadShield);
window.addEventListener('keydown', (e) => {
  if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R'))) {
    activateReloadShield();
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
