import './style.css';
import { initThreeScene } from './threeScene.js';
import { initPortraitHero } from './portraitHero.js';
import { createIcons, PhoneCall, MessageCircle, Phone, Facebook, Youtube, Video, Instagram } from 'lucide';

function initApp() {
  console.log('[App] Initializing Mr. Ahmed Samir Portfolio...');

  // Reveal App Wrapper safely after CSS is parsed and DOM is ready
  requestAnimationFrame(() => {
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) appWrapper.classList.add('is-ready');
  });

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

  // 2. Initialize 3D Canvas Background
  try {
    initThreeScene();
    console.log('[App] Three.js scene initialized successfully');
  } catch (err) {
    console.error('[App] Three.js error:', err);
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
