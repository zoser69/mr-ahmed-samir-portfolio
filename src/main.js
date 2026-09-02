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
  if (container) {
    container.style.opacity = '1';
  }
}

function initApp() {
  console.log('[App] Initializing Mr. Ahmed Samir Portfolio...');

  // Fallback safety: guarantee curtain dissolves even if WebGL is delayed
  const curtainSafetyTimer = setTimeout(liftCurtain, 800);

  // Fallback safety: reveal the canvas even if the ready callback never fires,
  // as long as scene initialization itself succeeded (context lost mid-flight
  // keeps the canvas display:none, so this stays safe).
  const canvasRevealSafetyTimer = setTimeout(revealCanvas, 1200);

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
      clearTimeout(canvasRevealSafetyTimer);
      revealCanvas();
      liftCurtain();
    });
    console.log('[App] Three.js scene initialized successfully');
  } catch (err) {
    console.error('[App] Three.js initialization error:', err);
    clearTimeout(canvasRevealSafetyTimer);
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
