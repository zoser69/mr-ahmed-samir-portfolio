import './style.css';
import { initThreeScene } from './threeScene.js';
import { initPortraitHero } from './portraitHero.js';
import { createIcons, PhoneCall, MessageCircle, Phone, Facebook, Youtube, Video, Instagram } from 'lucide';

function liftCurtain() {
  const curtain = document.getElementById('site-curtain');
  if (curtain) {
    curtain.style.opacity = '0';
    setTimeout(() => {
      if (curtain && curtain.parentNode) {
        curtain.parentNode.removeChild(curtain);
      }
    }, 600);
  }
}

function revealCanvas() {
  const container = document.getElementById('three-canvas-container');
  const canvas = document.getElementById('three-canvas');
  if (container) {
    container.style.opacity = '1';
  }
  if (canvas) {
    canvas.classList.add('canvas-ambient-blur');
  }
}

function initApp() {
  console.log('[App] Initializing Mr. Ahmed Samir Portfolio...');

  // Fallback curtain lift (1200ms): if WebGL initialization is delayed or fails,
  // ensure the user can still read the site content. The canvas is NEVER forcibly
  // revealed on a timer — it stays hidden (opacity: 0) unless WebGL reports ready.
  const curtainSafetyTimer = setTimeout(liftCurtain, 1200);

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
      revealCanvas();
      liftCurtain();
    });
    console.log('[App] Three.js scene initialized successfully');
  } catch (err) {
    console.error('[App] Three.js initialization error:', err);
    clearTimeout(curtainSafetyTimer);
    const canvas = document.getElementById('three-canvas');
    if (canvas) canvas.style.display = 'none';
    const container = document.getElementById('three-canvas-container');
    if (container) container.style.display = 'none';
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
