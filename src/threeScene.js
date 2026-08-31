import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

let scene, camera, renderer, animationFrameId;
let lettersGroup, particlesMesh, pointLight;
let isDisposed = false;
let mouseX = 0, mouseY = 0;
let targetCameraX = 0, targetCameraY = 0;
let targetLightX = 0, targetLightY = 0;

export function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  isDisposed = false;

  // 1. Scene
  scene = new THREE.Scene();
  scene.background = null;

  // 2. Camera
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
  camera.position.set(0, 0, 32);

  // 3. WebGL Renderer with High Performance
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  // 4. Studio 3-Point Lighting Setup for 3D Reflections
  const ambientLight = new THREE.AmbientLight(0xA67C5B, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFAF6F0, 2.2);
  keyLight.position.set(15, 25, 20);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x4E2E1B, 3.5);
  rimLight.position.set(-20, -15, -10);
  scene.add(rimLight);

  // Interactive Cursor Glint Light
  pointLight = new THREE.PointLight(0xCDB19B, 2.5, 45);
  pointLight.position.set(0, 0, 15);
  scene.add(pointLight);

  // 5. Load Real 3D Serif Typeface and Build Extruded 3D Kinetic Letters
  lettersGroup = new THREE.Group();
  scene.add(lettersGroup);

  const fontLoader = new FontLoader();
  fontLoader.load('./fonts/serif_bold.json', (font) => {
    if (isDisposed) return;

    // Curated high-prestige English glyphs
    const glyphs = ['E', 'N', 'G', 'L', 'I', 'S', 'H', 'A', 'M', 'S', 'R', 'X', 'V', 'K', 'Q', 'Z'];

    // Luxury Material Variants (Palette D with Polished Clearcoat Depth)
    const materials = [
      new THREE.MeshPhysicalMaterial({
        color: 0x4E2E1B,
        emissive: 0x1A0D06,
        metalness: 0.45,
        roughness: 0.18,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        reflectivity: 0.9,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x6E4227,
        emissive: 0x241208,
        metalness: 0.55,
        roughness: 0.22,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x8E5A38,
        emissive: 0x2E180B,
        metalness: 0.35,
        roughness: 0.25,
        clearcoat: 0.8,
        clearcoatRoughness: 0.12,
      })
    ];

    glyphs.forEach((char, idx) => {
      const size = 1.4 + (idx % 3) * 0.5; // Varied scale
      const textGeo = new TextGeometry(char, {
        font: font,
        size: size,
        depth: 0.35, // True 3D Depth
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.06,
        bevelSize: 0.04,
        bevelOffset: 0,
        bevelSegments: 4,
      });

      textGeo.center(); // Center rotation pivot

      const mat = materials[idx % materials.length];
      const mesh = new THREE.Mesh(textGeo, mat);

      // Distribute across full 3D space (leaving central column clear for portrait)
      const side = idx % 2 === 0 ? 1 : -1;
      const posX = side * (8.5 + (idx % 5) * 3.2);
      const posY = ((idx % 7) - 3) * 3.8 + (Math.random() - 0.5) * 2;
      const posZ = -4 - (idx % 4) * 5.5;

      mesh.position.set(posX, posY, posZ);

      // Initial random 3D angles
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Dynamic kinetic properties
      mesh.userData = {
        baseX: posX,
        baseY: posY,
        baseZ: posZ,
        rotSpeedX: (Math.random() - 0.5) * 0.008 + 0.004,
        rotSpeedY: (Math.random() - 0.5) * 0.01 + 0.005,
        rotSpeedZ: (Math.random() - 0.5) * 0.006,
        floatFreqX: 0.4 + Math.random() * 0.4,
        floatFreqY: 0.5 + Math.random() * 0.5,
        floatFreqZ: 0.3 + Math.random() * 0.3,
        ampX: 0.6 + Math.random() * 0.5,
        ampY: 0.8 + Math.random() * 0.7,
        ampZ: 1.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2
      };

      lettersGroup.add(mesh);
    });
  });

  // 6. Glowing Ambient Floating Dust
  const particleCount = 140;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 65;
    positions[i + 1] = (Math.random() - 0.5) * 55;
    positions[i + 2] = -8 - Math.random() * 30;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xA67C5B,
    size: 0.22,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  particlesMesh = new THREE.Points(particleGeo, particleMat);
  scene.add(particlesMesh);

  // 7. Mouse Parallax & Dynamic Lighting Interaction
  const onMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    targetCameraX = mouseX * 2.8;
    targetCameraY = -mouseY * 2.0;
    targetLightX = mouseX * 18;
    targetLightY = -mouseY * 12;
  };
  window.addEventListener('mousemove', onMouseMove);

  // 8. Responsive Resize
  const onResize = () => {
    if (isDisposed || !renderer || !camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener('resize', onResize);

  // 9. Kinetic 3D Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    if (isDisposed) return;
    animationFrameId = requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    // Smooth Camera & Interactive Light Lerping
    camera.position.x += (targetCameraX - camera.position.x) * 0.05;
    camera.position.y += (targetCameraY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    if (pointLight) {
      pointLight.position.x += (targetLightX - pointLight.position.x) * 0.08;
      pointLight.position.y += (targetLightY - pointLight.position.y) * 0.08;
    }

    // Dynamic 3-Axis Kinetic Letter Rotation & 3D Wave Motion
    if (lettersGroup && lettersGroup.children.length > 0) {
      lettersGroup.children.forEach((mesh) => {
        const u = mesh.userData;

        // Continuous 3D tumbling rotation
        mesh.rotation.x += u.rotSpeedX;
        mesh.rotation.y += u.rotSpeedY;
        mesh.rotation.z += u.rotSpeedZ;

        // Harmonic 3D spatial undulating motion
        mesh.position.x = u.baseX + Math.sin(t * u.floatFreqX + u.phase) * u.ampX;
        mesh.position.y = u.baseY + Math.cos(t * u.floatFreqY + u.phase) * u.ampY;
        mesh.position.z = u.baseZ + Math.sin(t * u.floatFreqZ + u.phase) * u.ampZ;
      });
    }

    // Swirling Particle Dust
    if (particlesMesh) {
      particlesMesh.rotation.y = t * 0.02;
      particlesMesh.rotation.x = Math.sin(t * 0.015) * 0.08;
    }

    renderer.render(scene, camera);
  }

  animate();

  return () => {
    disposeThreeScene();
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
  };
}

export function disposeThreeScene() {
  isDisposed = true;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (renderer) {
    renderer.dispose();
  }
}
