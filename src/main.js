import './style.css';
import { initThreeScene } from './threeScene.js';
import { initPortraitHero } from './portraitHero.js';
import { createIcons, icons } from 'lucide';

function initApp() {
  console.log('[App] Initializing Mr. Ahmed Samir Portfolio...');

  // 1. Initialize Lucide Icons properly
  try {
    createIcons({ icons });
    console.log('[App] Lucide icons initialized successfully');
  } catch (err) {
    console.error('[App] Lucide icon error:', err);
  }

  // 2. Initialize 3D Canvas Background
  try {
    initThreeScene();
    console.log('[App] Three.js scene initialized successfully');
  } catch (err) {
    console.error('[App] Three.js error:', err);
  }

  // 3. Initialize Portrait Entrance & Tilt
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
