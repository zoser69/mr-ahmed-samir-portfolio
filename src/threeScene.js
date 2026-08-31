import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

let scene, camera, renderer, animationFrameId;
let lettersGroup, particlesMesh, pointLight;
let isDisposed = false;
let isHeroVisible = true;
let isTabVisible = true;
let mouseX = 0, mouseY = 0;
let targetCameraX = 0, targetCameraY = 0;
let targetLightX = 0, targetLightY = 0;

export function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  const heroSection = document.getElementById('hero');
  if (!canvas) return;

  isDisposed = false;

  // 1. Device Capability & Mobile Tier Detection
  const isMobile = window.innerWidth < 768 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);
  const isLowEnd = isMobile || (typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

  // 2. Scene Setup
  scene = new THREE.Scene();
  scene.background = null;

  // 3. Camera Setup
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 80);
  camera.position.set(0, 0, 32);

  // 4. Lightweight WebGL Renderer (Capped for Mobile Performance)
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isLowEnd, // Disable MSAA on budget phones for max FPS
    alpha: true,
    powerPreference: 'high-performance',
    precision: isLowEnd ? 'mediump' : 'highp'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isLowEnd ? 1.0 : 2.0));

  // 5. Studio 3-Point Lighting Setup (Optimized for Standard Shaders)
  const ambientLight = new THREE.AmbientLight(0xA67C5B, 0.85);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFAF6F0, 1.8);
  keyLight.position.set(15, 20, 20);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x4E2E1B, 2.5);
  rimLight.position.set(-18, -12, -10);
  scene.add(rimLight);

  if (!isLowEnd) {
    pointLight = new THREE.PointLight(0xCDB19B, 2.0, 40);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);
  }

  // 6. Extruded 3D Kinetic Typography (Adaptive Geometry)
  lettersGroup = new THREE.Group();
  scene.add(lettersGroup);

  const fontLoader = new FontLoader();
  const fontPath = `${import.meta.env.BASE_URL}fonts/serif_bold.json`;

  fontLoader.load(fontPath, (font) => {
    if (isDisposed) return;

    // Adaptive glyph count (8 for mobile, 16 for desktop)
    const glyphs = isMobile 
      ? ['E', 'N', 'G', 'L', 'S', 'H', 'A', 'M'] 
      : ['E', 'N', 'G', 'L', 'I', 'S', 'H', 'A', 'M', 'S', 'R', 'X', 'V', 'K', 'Q', 'Z'];

    // High-efficiency Standard Materials
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

    glyphs.forEach((char, idx) => {
      const size = isMobile ? 1.4 + (idx % 2) * 0.5 : 1.8 + (idx % 3) * 0.6;
      
      const textGeo = new TextGeometry(char, {
        font: font,
        size: size,
        depth: 0.28,
        curveSegments: isLowEnd ? 4 : 8, // Low triangle count on budget phones
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: isLowEnd ? 2 : 3,
      });

      textGeo.center();

      const mat = materials[idx % materials.length];
      const mesh = new THREE.Mesh(textGeo, mat);

      // Better cinematic distribution (Constellation layout)
      // We want them to act as a wide background frame, leaving the center mostly clear for content
      
      // Distribute Z depth heavily for parallax effect
      const baseZ = -12 - (idx % 4) * 8.0;

      // Scale radius by depth
      const depthFactor = Math.abs(baseZ) / 10; 
      
      // We want a good distribution throughout the screen, not just edges.
      // So we randomize the radius instead of pushing everything to the max edge.
      const radius = (isMobile ? 6.0 : 12.0) * depthFactor + Math.random() * 8.0 * depthFactor; 
      
      let angle = (idx / glyphs.length) * Math.PI * 2; 
      
      // EXCLUSION ZONE: Avoid bottom-left quadrant (where portrait sits on desktop)
      // PI is left (180 deg), 1.5 PI is bottom (270 deg)
      if (!isMobile && angle > Math.PI * 0.8 && angle < Math.PI * 1.6) {
        // Shift angle to top-left or bottom-right
        angle += Math.PI * 0.8;
      }
      
      // Calculate final X and Y
      const baseX = Math.cos(angle) * radius;
      const baseY = Math.sin(angle) * (radius * 0.6);

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
        floatFreqX: 0.4 + Math.random() * 0.3,
        floatFreqY: 0.5 + Math.random() * 0.4,
        floatFreqZ: 0.3 + Math.random() * 0.3,
        ampX: 0.5 + Math.random() * 0.4,
        ampY: 0.7 + Math.random() * 0.5,
        ampZ: 1.0 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2
      };

      lettersGroup.add(mesh);
    });
  });

  // 7. Ambient Floating Dust Particles (Reduced count on mobile)
  const particleCount = isMobile ? 35 : 90;
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

  // 9. Resize Listener
  const onResize = () => {
    if (isDisposed || !renderer || !camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isLowEnd ? 1.0 : 2.0));
  };
  window.addEventListener('resize', onResize, { passive: true });

  // 10. Pause GPU Rendering When Hero is Offscreen or Tab is Hidden
  let heroObserver;
  if (heroSection && 'IntersectionObserver' in window) {
    heroObserver = new IntersectionObserver((entries) => {
      isHeroVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);
  }

  const onVisibilityChange = () => {
    isTabVisible = !document.hidden;
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  // 11. Optimized Kinetic Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    if (isDisposed) return;
    animationFrameId = requestAnimationFrame(animate);

    // Skip all WebGL draw calls if hero is scrolled out of view or tab is hidden
    if (!isHeroVisible || !isTabVisible) return;

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
  }

  animate();

  return () => {
    disposeThreeScene();
    if (!isMobile) window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (heroObserver) heroObserver.disconnect();
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
