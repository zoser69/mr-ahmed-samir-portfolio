/**
 * ============================================================================
 * MR. AHMED SAMIR — 3D LUXURY PORTFOLIO
 * Module: Interactive Phonetics & Voice Lab (Web Speech API + Wave Visualizer)
 * File: src/phoneticsLab.js
 * ============================================================================
 * 
 * Features:
 * - Curated Thanawya Amma & Prep School high-yield phonetics dataset.
 * - British (en-GB) vs. American (en-US) accent speech synthesis engine.
 * - Real-time luxury golden audio wave visualizer inside `<canvas id="audio-wave-canvas">`.
 * - Category filtering (All, Thanawya Traps, Accent Clash, Silent Letters, Stress).
 * - Live search & Slow-motion pronunciation training mode.
 * - Full responsive UI binding with luxury frosted glass aesthetics.
 */

/**
 * Curated Dataset of Tricky Exam Words & Accent Differences
 */
export const PHONETICS_DATA = [
  {
    id: 'schedule',
    word: 'Schedule',
    ukIpa: '/ˈʃedʒ.uːl/',
    usIpa: '/ˈskedʒ.uːl/',
    category: 'thanawya_traps',
    arabic: 'جدول مواعيد / يُجدول',
    explanation: 'في البريطاني تبدأ بصوت "ش" (SHED-yool)، بينما في الأمريكي تبدأ بصوت "سك" (SKED-jool). سؤال متكرر في امتحانات الثانوية العامة!',
    ukTip: 'British: "SHED-yool" (/ʃ/)',
    usTip: 'American: "SKED-jool" (/sk/)',
    badge: 'ثانوية عامة ⭐⭐⭐'
  },
  {
    id: 'colonel',
    word: 'Colonel',
    ukIpa: '/ˈkɜː.nəl/',
    usIpa: '/ˈkɝː.nəl/',
    category: 'silent_letters',
    arabic: 'عقيد (رتبة عسكرية)',
    explanation: 'تُنطق تماماً مثل كلمة (Kernel)! حرف الـ "L" الأول يُنطق كصوت "R" خفي والـ "O" ساكنة.',
    ukTip: 'Sounds like: "KER-nuhl"',
    usTip: 'Rhotic R: "KUR-nl"',
    badge: 'Silent Trap 🎯'
  },
  {
    id: 'lieutenant',
    word: 'Lieutenant',
    ukIpa: '/lefˈten.ənt/',
    usIpa: '/luːˈten.ənt/',
    category: 'uk_vs_us',
    arabic: 'ملازم (رتبة عسكرية)',
    explanation: 'اختلاف جذري! البريطاني يضيف صوت الـ "F" (lef-TEN-uhnt)، بينما الأمريكي ينطقها (loo-TEN-uhnt).',
    ukTip: 'UK: "lef-TEN-uhnt"',
    usTip: 'US: "loo-TEN-uhnt"',
    badge: 'Accent Clash ⚔️'
  },
  {
    id: 'iron',
    word: 'Iron',
    ukIpa: '/ˈaɪ.ən/',
    usIpa: '/ˈaɪ.ɚn/',
    category: 'thanawya_traps',
    arabic: 'حديد / مكواة / يكوي',
    explanation: 'من أكثر الكلمات خطأً! لا تنطق "eye-ron". في البريطاني الـ "r" صامتة تماماً (EYE-uhn).',
    ukTip: 'UK: "EYE-uhn" (No R)',
    usTip: 'US: "EYE-ern"',
    badge: 'Common Mistake ⚠️'
  },
  {
    id: 'comfortable',
    word: 'Comfortable',
    ukIpa: '/ˈkʌm.fə.tə.bəl/',
    usIpa: '/ˈkʌmf.tɚ.bəl/',
    category: 'syllable_stress',
    arabic: 'مريح / مطمئن',
    explanation: 'لا تنطق 4 مقاطع! تُنطق في الغالب كـ 3 مقاطع سريعة: "KUMF-tuh-buhl".',
    ukTip: 'Fast: "KUMF-tuh-bl"',
    usTip: 'Fast: "KUMF-ter-bl"',
    badge: 'Fluency Booster 🚀'
  },
  {
    id: 'recipe',
    word: 'Recipe',
    ukIpa: '/ˈres.ə.pi/',
    usIpa: '/ˈres.ə.pi/',
    category: 'thanawya_traps',
    arabic: 'وصفة طعام / طريقة تحضير',
    explanation: 'تنتهي بصوت "ee" واضح (REH-suh-pee) مثل sesame، وليست "re-seep"!',
    ukTip: 'Ending: "REH-suh-pee"',
    usTip: 'Ending: "REH-suh-pee"',
    badge: 'ثانوية عامة ⭐⭐'
  },
  {
    id: 'phenomenon',
    word: 'Phenomenon',
    ukIpa: '/fəˈnɒm.ɪ.nən/',
    usIpa: '/fəˈnɑː.mə.nɑːn/',
    category: 'thanawya_traps',
    arabic: 'ظاهرة (جمعها Phenomena)',
    explanation: 'المفرد phenomenon والجمع phenomena. موضع سؤال قواعد وترجمة متكرر بالثانوية.',
    ukTip: 'Stress 2nd: fuh-NOM-ih-nuhn',
    usTip: 'Plural: Phenomena (ظواهر)',
    badge: 'Grammar & Vocab 📖'
  },
  {
    id: 'epitome',
    word: 'Epitome',
    ukIpa: '/ɪˈpɪt.ə.mi/',
    usIpa: '/ɪˈpɪt̬.ə.mi/',
    category: 'thanawya_traps',
    arabic: 'مثال نموذجي / قدوة / خلاصة',
    explanation: 'تُنطق 4 مقاطع: (ih-PIT-uh-mee) مع كسر الحرف الأخير، وليست "epi-tomb"!',
    ukTip: '4 Syllables: ih-PIT-uh-mee',
    usTip: '4 Syllables: ih-PIT-uh-mee',
    badge: 'Elite Level 💎'
  },
  {
    id: 'queue',
    word: 'Queue',
    ukIpa: '/kjuː/',
    usIpa: '/kjuː/',
    category: 'silent_letters',
    arabic: 'طابور / يقف في طابور',
    explanation: 'كل الحروف بعد حرف الـ Q صامتة وتنتظر دورها! تنطق تماماً مثل اسم الحرف "Q" (kyoo).',
    ukTip: 'Sounds like: Letter "Q"',
    usTip: 'Sounds like: Letter "Q"',
    badge: 'Daily Life 🇬🇧'
  },
  {
    id: 'chaos',
    word: 'Chaos',
    ukIpa: '/ˈkeɪ.ɒs/',
    usIpa: '/ˈkeɪ.ɑːs/',
    category: 'thanawya_traps',
    arabic: 'فوضى عارمة',
    explanation: 'حرفا "ch" هنا ينطقان /k/ صريح (KAY-oss)، والصفة منها chaotic (kay-OT-ik).',
    ukTip: 'Start with /k/: "KAY-oss"',
    usTip: 'Start with /k/: "KAY-ahs"',
    badge: 'Academic Vocab 🎓'
  },
  {
    id: 'drought',
    word: 'Drought',
    ukIpa: '/draʊt/',
    usIpa: '/draʊt/',
    category: 'thanawya_traps',
    arabic: 'جفاف / قحط',
    explanation: 'تُنطق تماماً بقافية كلمة (Out) أو (Doubt) -> "DROWT"، ولا تنطق مثل thought أو draught.',
    ukTip: 'Rhymes with "Out" / "Doubt"',
    usTip: 'Rhymes with "Out"',
    badge: 'Unit 7 Thanawya 🌿'
  },
  {
    id: 'mischievous',
    word: 'Mischievous',
    ukIpa: '/ˈmɪs.tʃɪ.vəs/',
    usIpa: '/ˈmɪs.tʃə.vəs/',
    category: 'syllable_stress',
    arabic: 'شقي / ماكر / مثير للمتاعب',
    explanation: '3 مقاطع فقط مع تشديد المقطع الأول (MIS-chiv-us). الخطأ الشائع نطقها 4 مقاطع "mis-chee-vee-us".',
    ukTip: 'Stress 1st: "MIS-chiv-uhs"',
    usTip: 'Stress 1st: "MIS-chiv-uhs"',
    badge: 'Stress Trap ⚡'
  },
  {
    id: 'subtle',
    word: 'Subtle',
    ukIpa: '/ˈsʌt.əl/',
    usIpa: '/ˈsʌt̬.əl/',
    category: 'silent_letters',
    arabic: 'خفي / دقيق / غير واضح',
    explanation: 'حرف الـ "b" صامت تماماً! تُنطق (SUT-l) مثل كلمة shuttle لكن بدون صوت الـ sh.',
    ukTip: 'Silent B: "SUT-l"',
    usTip: 'Flap T: "SUD-dl"',
    badge: 'Silent Trap 🎯'
  },
  {
    id: 'hierarchy',
    word: 'Hierarchy',
    ukIpa: '/ˈhaɪə.rɑː.ki/',
    usIpa: '/ˈhaɪ.ɚ.ɑːr.ki/',
    category: 'syllable_stress',
    arabic: 'تسلسل هرمي / تدرج سلطة',
    explanation: 'تُنطق "HIGH-er-ar-kee". الـ "ch" تنطق /k/ والـ "arch" مثل architecture.',
    ukTip: 'Tri-syllabic: "HIGH-uh-rah-kee"',
    usTip: 'Rhotic: "HIGH-er-ar-kee"',
    badge: 'High School Elite 🏆'
  }
];

/**
 * Speech Synthesis Voice Manager
 */
class VoiceEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.voices = [];
    this.currentUtterance = null;
    this.isSpeaking = false;
    this.activeWord = null;
    this.activeAccent = 'US';
    this.onStateChangeCallbacks = [];

    if (this.synth) {
      this.loadVoices();
      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      this.voices = this.synth.getVoices() || [];
    } catch (e) {
      console.warn('[PhoneticsLab] Could not load voices:', e);
      this.voices = [];
    }
  }

  getBestVoice(accent) {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }

    const isUk = accent === 'UK' || accent === 'en-GB' || accent?.toLowerCase().includes('gb') || accent?.toLowerCase().includes('uk');

    if (isUk) {
      // Preferred UK English Voices
      const ukKeywords = ['United Kingdom', 'en-GB', 'en_GB', 'British', 'Daniel', 'George', 'Oliver', 'Hazel', 'Google UK English Male', 'Google UK English Female', 'Serena'];
      for (const kw of ukKeywords) {
        const found = this.voices.find(v => (v.lang && v.lang.replace('_', '-').includes('en-GB')) || (v.name && v.name.includes(kw)));
        if (found) return found;
      }
    } else {
      // Preferred US English Voices
      const usKeywords = ['United States', 'en-US', 'en_US', 'Samantha', 'Alex', 'David', 'Google US English', 'Zira', 'Mark', 'Ava'];
      for (const kw of usKeywords) {
        const found = this.voices.find(v => (v.lang && v.lang.replace('_', '-').includes('en-US')) || (v.name && v.name.includes(kw)));
        if (found) return found;
      }
    }

    // Fallback to any English voice
    return this.voices.find(v => v.lang && v.lang.startsWith('en')) || null;
  }

  speak({ word, accent = 'US', rate = 0.9, pitch = 1.0 }) {
    if (!this.synth) {
      console.warn('[PhoneticsLab] SpeechSynthesis is not supported on this browser.');
      return;
    }

    try {
      // Cancel previous utterance and resume if paused (iOS Safari / Chrome quirk)
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(word);
      const voice = this.getBestVoice(accent);

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = accent === 'UK' ? 'en-GB' : 'en-US';
      }

      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.activeWord = word;
        this.activeAccent = accent;
        this.notifyStateChange();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.activeWord = null;
        this.notifyStateChange();
      };

      utterance.onerror = (e) => {
        // Ignore 'canceled' or 'interrupted' events
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('[PhoneticsLab] Speech synthesis event:', e.error);
        }
        this.isSpeaking = false;
        this.activeWord = null;
        this.notifyStateChange();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (err) {
      console.error('[PhoneticsLab] Error during speak:', err);
      this.isSpeaking = false;
      this.notifyStateChange();
    }
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        // ignore
      }
      this.isSpeaking = false;
      this.activeWord = null;
      this.notifyStateChange();
    }
  }

  subscribe(callback) {
    this.onStateChangeCallbacks.push(callback);
    return () => {
      this.onStateChangeCallbacks = this.onStateChangeCallbacks.filter(cb => cb !== callback);
    };
  }

  notifyStateChange() {
    const payload = {
      isSpeaking: this.isSpeaking,
      activeWord: this.activeWord,
      activeAccent: this.activeAccent
    };
    this.onStateChangeCallbacks.forEach(cb => cb(payload));
  }
}

/**
 * Luxury Champagne Gold Audio Wave Visualizer Engine
 */
class AudioWaveVisualizer {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    this.ctx = canvasEl ? canvasEl.getContext('2d') : null;
    this.isSpeaking = false;
    this.isDestroyed = false;
    this.amplitude = 5;
    this.targetAmplitude = 5;
    this.phase = 0;
    this.rafId = null;
    this.particles = [];
    this.init();
  }

  init() {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    this.handleResize = () => this.resize();
    window.addEventListener('resize', this.handleResize, { passive: true });

    // Seed floating champagne sparkle particles
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random(),
        y: Math.random(),
        radius: Math.random() * 1.6 + 0.6,
        speedX: (Math.random() - 0.5) * 0.0012,
        speedY: (Math.random() - 0.5) * 0.0015,
        alpha: Math.random() * 0.5 + 0.25
      });
    }

    this.animate();
  }

  resize() {
    if (!this.canvas || this.isDestroyed) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = rect.width || 320;
    this.height = rect.height || 100;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    if (this.ctx) {
      this.ctx.resetTransform?.() || this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(dpr, dpr);
    }
  }

  setSpeaking(speaking) {
    this.isSpeaking = speaking;
    this.targetAmplitude = speaking ? 28 : 5;
  }

  animate() {
    if (this.isDestroyed || !this.canvas || !this.ctx) return;

    // Smooth amplitude interpolation
    this.amplitude += (this.targetAmplitude - this.amplitude) * 0.08;
    this.phase += this.isSpeaking ? 0.07 : 0.02;

    const w = this.width || 320;
    const h = this.height || 100;
    const centerY = h / 2;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Center radial ambient glow
    const glowGrad = this.ctx.createRadialGradient(w / 2, centerY, 0, w / 2, centerY, w * 0.45);
    glowGrad.addColorStop(0, this.isSpeaking ? 'rgba(212, 163, 115, 0.25)' : 'rgba(212, 163, 115, 0.06)');
    glowGrad.addColorStop(1, 'transparent');
    this.ctx.fillStyle = glowGrad;
    this.ctx.fillRect(0, 0, w, h);

    // 2. Floating Champagne Sparkle Particles
    this.particles.forEach(p => {
      p.x = (p.x + p.speedX + 1) % 1;
      p.y = (p.y + p.speedY + 1) % 1;
      const px = p.x * w;
      const py = p.y * h;
      this.ctx.beginPath();
      this.ctx.arc(px, py, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(248, 229, 211, ${p.alpha * (this.isSpeaking ? 1.0 : 0.4)})`;
      this.ctx.fill();
    });

    // 3. Multi-Layer Harmonic Sine Waves
    const waveLayers = [
      {
        freq: 0.018,
        speed: 1.0,
        ampFactor: 1.0,
        colorStart: '#FAF6F0',
        colorEnd: '#D4A373',
        lineWidth: 2.5,
        alpha: 0.95
      },
      {
        freq: 0.026,
        speed: -1.3,
        ampFactor: 0.75,
        colorStart: '#D4A373',
        colorEnd: '#8C4D2B',
        lineWidth: 1.8,
        alpha: 0.7
      },
      {
        freq: 0.038,
        speed: 1.6,
        ampFactor: 0.5,
        colorStart: '#E2B88F',
        colorEnd: '#AA5E35',
        lineWidth: 1.2,
        alpha: 0.5
      }
    ];

    waveLayers.forEach(layer => {
      this.ctx.beginPath();
      const grad = this.ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(212, 163, 115, 0.1)');
      grad.addColorStop(0.3, layer.colorStart);
      grad.addColorStop(0.7, layer.colorEnd);
      grad.addColorStop(1, 'rgba(140, 77, 43, 0.1)');

      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = layer.lineWidth;
      this.ctx.globalAlpha = layer.alpha;

      for (let x = 0; x <= w; x += 3) {
        // Window envelope to smoothly taper waves at canvas borders
        const windowEnvelope = Math.sin((x / w) * Math.PI);
        const wave1 = Math.sin(x * layer.freq + this.phase * layer.speed);
        const wave2 = Math.cos(x * layer.freq * 0.6 + this.phase * 0.8);
        const y = centerY + (wave1 * 0.7 + wave2 * 0.3) * this.amplitude * layer.ampFactor * windowEnvelope;

        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    });

    this.ctx.globalAlpha = 1.0;
    this.rafId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isDestroyed = true;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.handleResize) window.removeEventListener('resize', this.handleResize);
  }
}

/**
 * Initialize Interactive Phonetics Lab Component
 * Seamlessly binds to existing HTML elements in #phonetics-lab
 *
 * @param {Object} options Configuration options
 * @returns {Object} Public API interface
 */
export function initPhoneticsLab(options = {}) {
  // DOM References
  const waveCanvas = document.getElementById('phonetics-wave-canvas') || document.getElementById('audio-wave-canvas');
  const accentButtons = document.querySelectorAll('.accent-toggle-btn');
  const activeWordText = document.getElementById('active-word-text') || document.getElementById('phonetics-active-word');
  const activeWordIpa = document.getElementById('active-word-ipa') || document.getElementById('phonetics-active-ipa');
  const activeWordMeaning = document.getElementById('active-word-meaning');
  const wordCards = document.querySelectorAll('.phonetic-word-card');

  const voiceEngine = new VoiceEngine();
  const visualizer = waveCanvas ? new AudioWaveVisualizer(waveCanvas) : null;

  let currentAccent = 'US'; // 'US' or 'UK'

  /**
   * Updates the UI when switching between US and UK accent
   */
  function setAccent(accent) {
    currentAccent = accent === 'UK' ? 'UK' : 'US';

    // 1. Update Accent Toggle Button styles
    accentButtons.forEach(btn => {
      const btnAccent = btn.dataset.accent;
      if (btnAccent === currentAccent) {
        btn.className = 'accent-toggle-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-champagne-500 text-espresso-950 shadow-glow-subtle transition-all duration-200 flex items-center gap-1.5';
      } else {
        btn.className = 'accent-toggle-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-espresso-900 text-champagne-300 hover:bg-espresso-800 transition-all duration-200 flex items-center gap-1.5';
      }
    });

    // 2. Update IPA badges on all word cards
    wordCards.forEach(card => {
      const ipaBadge = card.querySelector('.word-ipa-badge');
      if (ipaBadge) {
        const ipaText = currentAccent === 'UK' ? card.dataset.ipaUk : card.dataset.ipaUs;
        if (ipaText) ipaBadge.textContent = ipaText;
      }
    });

    // 3. Update active word display IPA
    if (activeWordIpa && activeWordText) {
      const currentWord = activeWordText.textContent.trim();
      const matchingCard = Array.from(wordCards).find(c => c.dataset.word === currentWord);
      if (matchingCard) {
        const ipaText = currentAccent === 'UK' ? matchingCard.dataset.ipaUk : matchingCard.dataset.ipaUs;
        if (ipaText) activeWordIpa.textContent = ipaText;
      }
    }
  }

  /**
   * Pronounce a word and highlight its card
   */
  function triggerPronounce(card) {
    if (!card) return;

    const word = card.dataset.word || '';
    const meaning = card.dataset.meaning || '';
    const ipa = currentAccent === 'UK' ? card.dataset.ipaUk : card.dataset.ipaUs;

    // Update active word header displays
    if (activeWordText) activeWordText.textContent = word;
    if (activeWordIpa) activeWordIpa.textContent = ipa || '';
    if (activeWordMeaning) activeWordMeaning.textContent = meaning;

    // Trigger audio speech synthesis
    voiceEngine.speak({
      word,
      accent: currentAccent,
      rate: 0.9
    });
  }

  // Bind Accent Toggle Button Click Handlers
  accentButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenAccent = btn.dataset.accent || 'US';
      setAccent(chosenAccent);

      // Re-pronounce currently displayed active word in the newly selected accent
      if (activeWordText) {
        const currentWord = activeWordText.textContent.trim();
        const matchingCard = Array.from(wordCards).find(c => c.dataset.word === currentWord);
        if (matchingCard) {
          triggerPronounce(matchingCard);
        }
      }
    });
  });

  // Bind Word Cards Click Handlers
  wordCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      triggerPronounce(card);
    });

    const playBtn = card.querySelector('.play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        triggerPronounce(card);
      });
    }
  });

  // Subscribe Voice Engine state to Visualizer and Active Card UI
  voiceEngine.subscribe(({ isSpeaking, activeWord }) => {
    if (visualizer) {
      visualizer.setSpeaking(isSpeaking);
    }

    wordCards.forEach(card => {
      const isCardActive = isSpeaking && card.dataset.word === activeWord;
      if (isCardActive) {
        card.classList.add('ring-2', 'ring-champagne-400', 'shadow-glow-cognac', 'bg-espresso-850', 'scale-[1.02]');
      } else {
        card.classList.remove('ring-2', 'ring-champagne-400', 'shadow-glow-cognac', 'bg-espresso-850', 'scale-[1.02]');
      }
    });
  });

  // Initial Sync
  setAccent(currentAccent);

  // Return Public API
  return {
    voiceEngine,
    visualizer,
    setAccent,
    speak: (wordText, accent = currentAccent) => {
      voiceEngine.speak({
        word: wordText,
        accent,
        rate: 0.9
      });
    },
    stop: () => voiceEngine.stop(),
    destroy: () => {
      voiceEngine.stop();
      if (visualizer) visualizer.destroy();
    }
  };
}
