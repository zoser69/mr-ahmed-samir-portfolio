import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. Prevent mobile address bar show/hide from jittering ScrollTrigger calculations
ScrollTrigger.config({
  ignoreMobileResize: true
});

// 2. Ensure every page reload starts cleanly from top for a consistent sequence
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let heroEntranceTimeline = null;

export function playHeroEntrance() {
  if (heroEntranceTimeline) {
    heroEntranceTimeline.play();
  }
}

export function initPortraitHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  if (prefersReducedMotion) {
    // Immediate full visibility for reduced-motion users
    gsap.set([
      '#hero-portrait-img',
      '.hero-text-item',
      '#about .about-header-item',
      '#about .timeline-track-base',
      '#about .timeline-track-progress',
      '#about .about-card-item',
      '#contact .contact-reveal-box > *',
      '#contact .social-card-item'
    ], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      scaleY: 1
    });

    document.querySelectorAll('[data-word-reveal]').forEach((el) => {
      el.classList.add('is-visible');
    });
    document.querySelectorAll('.timeline-milestone-dot').forEach((dot) => {
      dot.classList.add('is-active');
    });
    return;
  }

  // --- FEATURE 1: EDITORIAL STAGGERED WORD REVEAL (Pentagram / Awwwards Standard) ---
  document.querySelectorAll('[data-word-reveal]').forEach((heading) => {
    const rawText = heading.textContent.trim();
    const words = rawText.split(/\s+/);
    heading.innerHTML = words.map((word, idx) => 
      `<span class="word-reveal-word" style="--word-index: ${idx}">${word}</span>`
    ).join(' ');

    ScrollTrigger.create({
      trigger: heading,
      start: 'top 85%',
      once: true,
      onEnter: () => heading.classList.add('is-visible')
    });
  });

  // --- SECTION 1: MASTER HERO ENTRANCE (Dynamic Split Side Entrance) ---
  heroEntranceTimeline = gsap.timeline({
    paused: true,
    defaults: { ease: 'power3.out', force3D: true }
  });

  gsap.set(img, {
    opacity: 0,
    x: -40,
    scale: 0.98
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 20
  });

  heroEntranceTimeline
    .to(img, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.9
    })
    .to(
      '.hero-text-item',
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.05
      },
      '-=0.7'
    );

  // --- FEATURE 2: HOLOGRAPHIC PSEUDO-3D PARALLAX (Desktop Mouse Reaction) ---
  if (window.innerWidth >= 1024) {
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(img, {
        x: mouseX * -14,
        y: mouseY * -9,
        rotationY: mouseX * 3.8,
        rotationX: -mouseY * 2.8,
        transformPerspective: 950,
        duration: 0.85,
        ease: 'power2.out',
        overwrite: 'auto',
        force3D: true
      });
    }, { passive: true });
  }

  // --- SECTION 2: SCROLL-SCRUBBED ACADEMIC JOURNEY (#about) ---
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    // Initial states for About items
    gsap.set('#about .about-header-item:not([data-word-reveal])', { opacity: 0, y: 20 });
    gsap.set('#about .about-card-item', { opacity: 0, y: 20 });

    // Section header subtitle reveal
    gsap.to('#about .about-header-item:not([data-word-reveal])', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        once: true
      }
    });

    // Continuous Scroll-Scrubbed Progress Line
    const progressLine = aboutSection.querySelector('.timeline-track-progress');
    if (progressLine) {
      gsap.to(progressLine, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 65%',
          end: 'bottom 80%',
          scrub: 0.4
        }
      });
    }

    // Progressive milestone dot activation & card arrival
    const milestones = aboutSection.querySelectorAll('.about-card-item');
    milestones.forEach((item) => {
      const dot = item.querySelector('.timeline-milestone-dot');

      // Card arrival reveal
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true
        }
      });

      // Interactive milestone dot illumination triggered by scroll progress
      if (dot) {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 68%',
          onEnter: () => dot.classList.add('is-active'),
          onLeaveBack: () => dot.classList.remove('is-active')
        });
      }
    });
  }

  // --- SECTION 3: CONTACT & SOCIAL HUB (#contact) ---
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // Initial states for Contact
    gsap.set('#contact .contact-reveal-box > *:not([data-word-reveal])', { opacity: 0, y: 20 });
    gsap.set('#contact .social-card-item', { opacity: 0, y: 16, scale: 0.96 });

    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 65%',
        once: true
      },
      defaults: { ease: 'power3.out', force3D: true }
    });

    contactTl
      .to('#contact .contact-reveal-box > *:not([data-word-reveal])', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1
      })
      .to('#contact .social-card-item', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.06
      }, '-=0.3');
  }

  // Refresh ScrollTrigger calculations after all resources are loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
