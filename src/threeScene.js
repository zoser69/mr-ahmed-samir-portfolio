import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

let scene, camera, renderer, animationFrameId;
let lettersGroup, particlesMesh, pointLight;
let isDisposed = false;
let isTabVisible = true;
let mouseX = 0, mouseY = 0;
let targetCameraX = 0, targetCameraY = 0;
let targetLightX = 0, targetLightY = 0;

// Dynamic Adaptive Quality Configuration
const TIER_CONFIG = {
  high: {
    pixelRatioMax: 2.0,
    antialias: true,
    curveSegments: 8,
    bevelSegments: 3,
    desktopParticles: 90,
    mobileParticles: 40,
    precision: 'highp',
    desktopLetters: 16,
    mobileLetters: 8,
    enablePointLight: true
  },
  mid: {
    pixelRatioMax: 1.75,
    antialias: true,
    curveSegments: 6,
    bevelSegments: 2,
    desktopParticles: 50,
    mobileParticles: 25,
    precision: 'highp',
    desktopLetters: 14,
    mobileLetters: 8,
    enablePointLight: true
  },
  low: {
    pixelRatioMax: 1.25,
    antialias: false,
    curveSegments: 4,
    bevelSegments: 2,
    desktopParticles: 25,
    mobileParticles: 15,
    precision: 'mediump',
    desktopLetters: 10,
    mobileLetters: 6,
    enablePointLight: false
  }
};

function detectDeviceTier() {
  const isMobile = window.innerWidth < 768 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);
  const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
  const memory = (typeof navigator !== 'undefined' && navigator.deviceMemory) || 4; // in GB

  // Low Tier: budget devices or heavily constrained hardware
  if (cores <= 2 || memory <= 2) {
    return 'low';
  }

  // High Tier: desktop with >= 6 cores or modern flagship phone with >= 8 cores and >= 6GB RAM
  if (!isMobile && cores >= 6) {
    return 'high';
  }
  if (isMobile && cores >= 8 && memory >= 6) {
    return 'high';
  }

  // Mid Tier: standard phones & laptops
  return 'mid';
}

export function initThreeScene(onReady) {
  const canvas = document.getElementById('three-canvas');
  const heroSection = document.getElementById('hero');
  if (!canvas) return;

  isDisposed = false;

  // 1. Device Capability & Tier Detection
  const isMobile = window.innerWidth < 768 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);
  let currentTier = detectDeviceTier();
  let tierConfig = TIER_CONFIG[currentTier];

  console.log(`[ThreeScene] Device capability tier: "${currentTier}" (Cores: ${navigator.hardwareConcurrency || 'N/A'}, RAM: ${navigator.deviceMemory || 'N/A'}GB)`);

  // 2. Scene Setup (Transparent 3D Kinetic Layer - Background Owned by CSS)
  scene = new THREE.Scene();
  scene.background = null;

  // 3. Camera Setup
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 90);
  camera.position.set(0, 0, 32);

  // 4. Studio WebGL Renderer (Transparent Canvas Overlay - Zero White Compositor Flashes)
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: tierConfig.antialias,
    alpha: true,
    powerPreference: 'high-performance',
    precision: tierConfig.precision
  });
  renderer.setClearColor(0x000000, 0);

  const getOptimalPixelRatio = () => {
    const dpr = window.devicePixelRatio || 1;
    if (isMobile) {
      if (currentTier === 'high') return Math.min(dpr, 1.5);
      if (currentTier === 'mid') return Math.min(dpr, 1.25);
      return Math.min(dpr, 1.0);
    }
    return Math.min(dpr, tierConfig.pixelRatioMax);
  };

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(getOptimalPixelRatio());

  // 5. Studio 3-Point Lighting Setup (Warm Truffle & Ambient Gold)
  const ambientLight = new THREE.AmbientLight(0xA67C5B, 0.95);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFAF6F0, 2.0);
  keyLight.position.set(15, 20, 20);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x4E2E1B, 3.0);
  rimLight.position.set(-18, -12, -10);
  scene.add(rimLight);

  if (tierConfig.enablePointLight) {
    pointLight = new THREE.PointLight(0xCDB19B, 2.2, 45);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);
  }

  // 6. Extruded 3D Kinetic Typography (Art-Directed Balanced Constellation)
  lettersGroup = new THREE.Group();
  scene.add(lettersGroup);

  const fontLoader = new FontLoader();
  const fontPath = `${import.meta.env.BASE_URL}fonts/serif_bold.json`;

  fontLoader.load(fontPath, (font) => {
    if (isDisposed) return;

    // Adaptive glyph count by tier
    const allGlyphs = ['E', 'N', 'G', 'L', 'I', 'S', 'H', 'A', 'M', 'S', 'R', 'X', 'V', 'K', 'Q', 'Z'];
    const maxLetters = isMobile ? tierConfig.mobileLetters : tierConfig.desktopLetters;
    const glyphs = allGlyphs.slice(0, maxLetters);

    // Luxury Dark Truffle & Warm Umber Materials
    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x4E2E1B,
        emissive: 0x140A04,
        metalness: 0.4,
        roughness: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x6E4227,
        emissive: 0x1E0E06,
        metalness: 0.5,
        roughness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8E5A38,
        emissive: 0x241208,
        metalness: 0.35,
        roughness: 0.35,
      })
    ];

    // Balanced, art-directed 3D constellation slots (Zero overlap, wide screen coverage)
    const DESKTOP_SLOTS = [
      // 1. Far Left Margin (Left of Teacher)
      { x: -28, y: 11,  z: -14, size: 2.2 },
      { x: -25, y: 2,   z: -18, size: 2.0 },
      { x: -29, y: -6,  z: -22, size: 2.3 },
      { x: -24, y: -13, z: -16, size: 1.9 },

      // 2. Top Banner Row (Above Teacher & Above Title - Wide Spread)
      { x: -16, y: 13.5, z: -20, size: 2.1 },
      { x: -5,  y: 14.5, z: -16, size: 1.8 },
      { x: 9,   y: 14.0, z: -22, size: 2.2 },
      { x: 23,  y: 13.0, z: -18, size: 2.0 },

      // 3. Far Right Margin (Right of Hero Title & CTAs)
      { x: 28,  y: 7.5,  z: -16, size: 2.0 },
      { x: 26,  y: -0.5, z: -20, size: 2.2 },
      { x: 30,  y: -8.0, z: -18, size: 2.1 },
      { x: 25,  y: -14.0, z: -22, size: 2.4 },

      // 4. Ambient Deep Background Layer (Deep Z-depth, widely dispersed)
      { x: -14, y: -3.0, z: -30, size: 2.8 },
      { x: 14,  y: -6.0, z: -28, size: 2.6 },
      { x: 2,   y: 8.0,  z: -32, size: 2.9 },
      { x: 16,  y: 9.5,  z: -26, size: 2.4 }
    ];

    const MOBILE_SLOTS = [
      // Left Column (Wide edges)
      { x: -8.5, y: 13.5,  z: -14, size: 1.6 },
      { x: -8.0, y: 4.5,   z: -18, size: 1.8 },
      { x: -8.5, y: -4.5,  z: -15, size: 1.6 },
      { x: -7.5, y: -13.5, z: -20, size: 1.9 },

      // Right Column (Wide edges)
      { x: 8.5,  y: 12.0,  z: -16, size: 1.7 },
      { x: 8.0,  y: 3.0,   z: -14, size: 1.5 },
      { x: 8.5,  y: -6.0,  z: -19, size: 1.8 },
      { x: 7.5,  y: -15.0, z: -15, size: 1.6 }
    ];

    const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;

    glyphs.forEach((char, idx) => {
      const slot = slots[idx % slots.length];
      const size = slot.size || 1.8;
      
      const textGeo = new TextGeometry(char, {
        font: font,
        size: size,
        depth: 0.28,
        curveSegments: tierConfig.curveSegments,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: tierConfig.bevelSegments,
      });

      textGeo.center();

      const mat = materials[idx % materials.length];
      const mesh = new THREE.Mesh(textGeo, mat);

      const baseX = slot.x;
      const baseY = slot.y;
      const baseZ = slot.z;

      mesh.position.set(baseX, baseY, baseZ);
      const startRotX = Math.random() * Math.PI;
      const startRotY = Math.random() * Math.PI;
      const startRotZ = Math.random() * Math.PI;
      
      mesh.rotation.set(startRotX, startRotY, startRotZ);

      mesh.userData = {
        baseX: baseX,
        baseY: baseY,
        baseZ: baseZ,
        baseRotX: startRotX,
        baseRotY: startRotY,
        baseRotZ: startRotZ,
        rotSpeedX: (Math.random() - 0.5) * 0.008 + 0.003,
        rotSpeedY: (Math.random() - 0.5) * 0.01 + 0.004,
        rotSpeedZ: (Math.random() - 0.5) * 0.005,
        floatFreqX: 0.35 + Math.random() * 0.25,
        floatFreqY: 0.45 + Math.random() * 0.3,
        floatFreqZ: 0.3 + Math.random() * 0.25,
        ampX: 0.4 + Math.random() * 0.3,
        ampY: 0.5 + Math.random() * 0.4,
        ampZ: 0.8 + Math.random() * 0.5,
        phase: (idx / glyphs.length) * Math.PI * 2
      };

      lettersGroup.add(mesh);
    });
  });

  // 7. Ambient Floating Dust Particles (Scaled by Tier)
  const particleCount = isMobile ? tierConfig.mobileParticles : tierConfig.desktopParticles;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 55;
    positions[i + 1] = (Math.random() - 0.5) * 45;
    positions[i + 2] = -8 - Math.random() * 25;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xA67C5B,
    size: isMobile ? 0.18 : 0.22,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });

  particlesMesh = new THREE.Points(particleGeo, particleMat);
  scene.add(particlesMesh);

  // 8. Mouse / Touch Parallax (Only on desktop to save mobile battery)
  const onMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    targetCameraX = mouseX * 2.2;
    targetCameraY = -mouseY * 1.6;
    if (pointLight) {
      targetLightX = mouseX * 16;
      targetLightY = -mouseY * 10;
    }
  };
  if (!isMobile) {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
  }

  // 9. Resize Listener (Stabilized for mobile URL bar collapses)
  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  const onResize = () => {
    if (isDisposed || !renderer || !camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // On mobile, ignore vertical-only resize jumps caused by address bar toggling on scroll
    if (isMobile && Math.abs(w - lastWidth) < 2 && Math.abs(h - lastHeight) < 140) {
      return;
    }

    lastWidth = w;
    lastHeight = h;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(getOptimalPixelRatio());
  };
  window.addEventListener('resize', onResize, { passive: true });

  // 10. Pause GPU Rendering Only When Browser Tab is Hidden (Save Battery)
  const onVisibilityChange = () => {
    isTabVisible = !document.hidden;
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  // 11. Optimized Kinetic Animation Loop with Self-Healing Dynamic FPS Watchdog
  const clock = new THREE.Clock();
  let frameCount = 0;
  let lastFpsCheckTime = performance.now();
  let lowFpsCount = 0;

  function animate() {
    if (isDisposed) return;
    animationFrameId = requestAnimationFrame(animate);

    // Skip WebGL draw calls only if browser tab is hidden/minimized
    if (!isTabVisible) return;

    // Dynamic FPS Watchdog (Auto-downscale if frame rate drops under 40 FPS on weak hardware)
    frameCount++;
    const now = performance.now();
    if (now - lastFpsCheckTime >= 1000) {
      const currentFps = (frameCount * 1000) / (now - lastFpsCheckTime);
      frameCount = 0;
      lastFpsCheckTime = now;

      if (currentFps < 40 && isTabVisible) {
        lowFpsCount++;
        if (lowFpsCount >= 2) {
          // Downgrade quality tier dynamically to restore smooth 60 FPS
          if (currentTier === 'high') {
            currentTier = 'mid';
            tierConfig = TIER_CONFIG.mid;
            renderer.setPixelRatio(getOptimalPixelRatio());
            console.warn('[ThreeScene FPS Watchdog] Downscaled quality tier to "mid" for smooth 60 FPS');
          } else if (currentTier === 'mid') {
            currentTier = 'low';
            tierConfig = TIER_CONFIG.low;
            renderer.setPixelRatio(getOptimalPixelRatio());
            console.warn('[ThreeScene FPS Watchdog] Downscaled quality tier to "low" for smooth 60 FPS');
          }
          lowFpsCount = 0;
        }
      } else {
        lowFpsCount = Math.max(0, lowFpsCount - 1);
      }
    }

    const t = clock.getElapsedTime();

    if (!isMobile) {
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      if (pointLight) {
        pointLight.position.x += (targetLightX - pointLight.position.x) * 0.08;
        pointLight.position.y += (targetLightY - pointLight.position.y) * 0.08;
      }
    }

    // Dynamic Letter Kinetic Tumbling & Spatial Waves
    if (lettersGroup && lettersGroup.children.length > 0) {
      lettersGroup.children.forEach((mesh) => {
        const u = mesh.userData;
        mesh.rotation.x = u.baseRotX + t * (u.rotSpeedX * 60);
        mesh.rotation.y = u.baseRotY + t * (u.rotSpeedY * 60);
        mesh.rotation.z = u.baseRotZ + t * (u.rotSpeedZ * 60);

        mesh.position.x = u.baseX + Math.sin(t * u.floatFreqX + u.phase) * u.ampX;
        mesh.position.y = u.baseY + Math.cos(t * u.floatFreqY + u.phase) * u.ampY;
        mesh.position.z = u.baseZ + Math.sin(t * u.floatFreqZ + u.phase) * u.ampZ;
      });
    }

    // Swirling Particles
    if (particlesMesh) {
      particlesMesh.rotation.y = t * 0.015;
    }

    renderer.render(scene, camera);

    // Notify caller that first WebGL frame is safely drawn to dissolve curtain
    if (typeof onReady === 'function') {
      onReady();
      onReady = null;
    }
  }

  animate();

  return () => {
    disposeThreeScene();
    if (!isMobile) window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
}

export function disposeThreeScene() {
  isDisposed = true;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }
  if (renderer) {
    renderer.dispose();
  }
}
