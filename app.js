/**
 * VISUALISATOR ALGORITMA PENCARIAN (BINARY SEARCH, LINEAR SEARCH & DUEL ARENA)
 * Mata Kuliah: Logika Pemrograman
 * Fitur:
 *  1. Mode Mandiri Binary Search O(log n)
 *  2. Mode Mandiri Linear Search O(n)
 *  3. Mode Duel / Komparasi Visual Balapan Head-to-Head (Linear vs Binary)
 *  4. Live Dry-Run Trace Table, Sinkronisasi Kode Multi-Bahasa, Audio FX & Confetti
 */

(function () {
  'use strict';

  // --- PRESET DATA SETS ---
  const PRESETS = {
    binary: {
      default: [6, 11, 15, 23, 35, 50, 51, 56, 58, 59, 79, 96, 98, 101],
      primes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43],
      evens: [2, 4, 8, 12, 16, 20, 26, 32, 40, 50, 64, 78, 90, 100],
      fibonacci: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
      tens: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]
    },
    linear: {
      unsorted_default: [42, 17, 89, 23, 56, 11, 74, 38, 95, 5, 63, 28, 50, 81],
      grades: [75, 88, 62, 95, 50, 70, 83, 91, 68, 85, 99, 45, 78, 92],
      scrambled: [19, 3, 84, 56, 2, 97, 33, 61, 12, 48, 77, 25, 90, 14],
      sorted: [6, 11, 15, 23, 35, 50, 51, 56, 58, 59, 79, 96, 98, 101]
    },
    compare: {
      default: [6, 11, 15, 23, 35, 50, 51, 56, 58, 59, 79, 96, 98, 101],
      primes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43],
      evens: [2, 4, 8, 12, 16, 20, 26, 32, 40, 50, 64, 78, 90, 100],
      tens: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]
    }
  };

  // --- MULTI-LANGUAGE CODE DEFINITIONS ---
  const CODE_SNIPPETS = {
    binary: {
      pseudocode: [
        { ln: 1, text: 'ALGORITMA BinarySearch(A: array, target: integer) -> integer', role: 'def' },
        { ln: 2, text: '  lo ← 0, hi ← panjang(A) - 1', role: 'init' },
        { ln: 3, text: '  SELAMA lo ≤ hi LAKUKAN:', role: 'loop' },
        { ln: 4, text: '    mid ← ⌊(lo + hi) / 2⌋', role: 'mid' },
        { ln: 5, text: '    JIKA A[mid] = target MAKA:', role: 'check_eq' },
        { ln: 6, text: '      KEMBALIKAN mid  // Target Ditemukan!', role: 'found' },
        { ln: 7, text: '    LAINNYA JIKA A[mid] < target MAKA:', role: 'check_lt' },
        { ln: 8, text: '      lo ← mid + 1    // Geser ke paruh kanan', role: 'go_right' },
        { ln: 9, text: '    LAINNYA:', role: 'check_gt' },
        { ln: 10, text: '      hi ← mid - 1    // Geser ke paruh kiri', role: 'go_left' },
        { ln: 11, text: '  KEMBALIKAN -1       // Target Tidak Ada', role: 'not_found' }
      ],
      python: [
        { ln: 1, text: 'def binary_search(arr, target):', role: 'def' },
        { ln: 2, text: '    lo, hi = 0, len(arr) - 1', role: 'init' },
        { ln: 3, text: '    while lo <= hi:', role: 'loop' },
        { ln: 4, text: '        mid = (lo + hi) // 2', role: 'mid' },
        { ln: 5, text: '        if arr[mid] == target:', role: 'check_eq' },
        { ln: 6, text: '            return mid  # Ditemukan', role: 'found' },
        { ln: 7, text: '        elif arr[mid] < target:', role: 'check_lt' },
        { ln: 8, text: '            lo = mid + 1', role: 'go_right' },
        { ln: 9, text: '        else:', role: 'check_gt' },
        { ln: 10, text: '            hi = mid - 1', role: 'go_left' },
        { ln: 11, text: '    return -1  # Tidak ditemukan', role: 'not_found' }
      ],
      cpp: [
        { ln: 1, text: 'int binarySearch(const vector<int>& a, int target) {', role: 'def' },
        { ln: 2, text: '    int lo = 0, hi = a.size() - 1;', role: 'init' },
        { ln: 3, text: '    while (lo <= hi) {', role: 'loop' },
        { ln: 4, text: '        int mid = lo + (hi - lo) / 2;', role: 'mid' },
        { ln: 5, text: '        if (a[mid] == target) return mid;', role: 'check_eq' },
        { ln: 6, text: '        if (a[mid] < target)', role: 'check_lt' },
        { ln: 7, text: '            lo = mid + 1;', role: 'go_right' },
        { ln: 8, text: '        else', role: 'check_gt' },
        { ln: 9, text: '            hi = mid - 1;', role: 'go_left' },
        { ln: 10, text: '    }', role: 'loop' },
        { ln: 11, text: '    return -1;', role: 'not_found' },
        { ln: 12, text: '}', role: 'def' }
      ],
      java: [
        { ln: 1, text: 'public static int binarySearch(int[] a, int target) {', role: 'def' },
        { ln: 2, text: '    int lo = 0, hi = a.length - 1;', role: 'init' },
        { ln: 3, text: '    while (lo <= hi) {', role: 'loop' },
        { ln: 4, text: '        int mid = lo + (hi - lo) / 2;', role: 'mid' },
        { ln: 5, text: '        if (a[mid] == target) return mid;', role: 'check_eq' },
        { ln: 6, text: '        else if (a[mid] < target) lo = mid + 1;', role: 'go_right' },
        { ln: 7, text: '        else hi = mid - 1;', role: 'go_left' },
        { ln: 8, text: '    }', role: 'loop' },
        { ln: 9, text: '    return -1;', role: 'not_found' },
        { ln: 10, text: '}', role: 'def' }
      ]
    },
    linear: {
      pseudocode: [
        { ln: 1, text: 'ALGORITMA LinearSearch(A: array, target: integer) -> integer', role: 'def' },
        { ln: 2, text: '  UNTUK i ← 0 SAMPAI panjang(A) - 1 LAKUKAN:', role: 'loop' },
        { ln: 3, text: '    JIKA A[i] = target MAKA:', role: 'check_eq' },
        { ln: 4, text: '      KEMBALIKAN i  // Target Ditemukan!', role: 'found' },
        { ln: 5, text: '    // Jika tidak sama, lanjut ke indeks i + 1', role: 'next' },
        { ln: 6, text: '  KEMBALIKAN -1     // Target Tidak Ada dalam Array', role: 'not_found' }
      ],
      python: [
        { ln: 1, text: 'def linear_search(arr, target):', role: 'def' },
        { ln: 2, text: '    for i in range(len(arr)):', role: 'loop' },
        { ln: 3, text: '        if arr[i] == target:', role: 'check_eq' },
        { ln: 4, text: '            return i  # Ditemukan di indeks i', role: 'found' },
        { ln: 5, text: '    return -1  # Target tidak ada dalam array', role: 'not_found' }
      ],
      cpp: [
        { ln: 1, text: 'int linearSearch(const vector<int>& a, int target) {', role: 'def' },
        { ln: 2, text: '    for (int i = 0; i < a.size(); ++i) {', role: 'loop' },
        { ln: 3, text: '        if (a[i] == target) {', role: 'check_eq' },
        { ln: 4, text: '            return i; // Ditemukan', role: 'found' },
        { ln: 5, text: '        }', role: 'loop' },
        { ln: 6, text: '    }', role: 'loop' },
        { ln: 7, text: '    return -1; // Tidak ditemukan', role: 'not_found' },
        { ln: 8, text: '}', role: 'def' }
      ],
      java: [
        { ln: 1, text: 'public static int linearSearch(int[] a, int target) {', role: 'def' },
        { ln: 2, text: '    for (int i = 0; i < a.length; i++) {', role: 'loop' },
        { ln: 3, text: '        if (a[i] == target) {', role: 'check_eq' },
        { ln: 4, text: '            return i; // Ditemukan', role: 'found' },
        { ln: 5, text: '        }', role: 'loop' },
        { ln: 6, text: '    }', role: 'loop' },
        { ln: 7, text: '    return -1; // Tidak ditemukan', role: 'not_found' },
        { ln: 8, text: '}', role: 'def' }
      ]
    }
  };

  // --- APPLICATION STATE ---
  const state = {
    currentAlgo: 'binary', // 'binary' | 'linear' | 'compare'
    array: [...PRESETS.binary.default],
    target: 56,

    // Single-view state
    steps: [],
    currentStepIndex: 0,
    isPlaying: false,
    playTimer: null,

    // Duel-view state
    duelSteps: [],
    currentDuelStepIndex: 0,
    isDuelPlaying: false,
    duelPlayTimer: null,

    speed: 1.0,
    soundEnabled: true,
    theme: 'dark',
    currentLang: 'pseudocode'
  };

  // --- AUDIO SYNTHESIS (Web Audio API) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.15, volume = 0.08) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio unsupported or blocked
    }
  }

  function playSoundStep() {
    playTone(460, 'triangle', 0.1, 0.05);
  }

  function playSoundFound() {
    playTone(523.25, 'sine', 0.18, 0.1);
    setTimeout(() => playTone(659.25, 'sine', 0.22, 0.12), 110);
    setTimeout(() => playTone(783.99, 'sine', 0.35, 0.14), 220);
    setTimeout(() => playTone(1046.50, 'sine', 0.45, 0.16), 350);
  }

  function playSoundMiss() {
    playTone(330, 'sawtooth', 0.18, 0.05);
    setTimeout(() => playTone(220, 'sawtooth', 0.25, 0.06), 140);
  }

  // --- CONFETTI PARTICLE SYSTEM ---
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimId = null;

  function resizeConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfetti);
  resizeConfetti();

  function triggerConfetti() {
    confettiParticles = [];
    const colors = ['#06b6d4', '#10b981', '#a855f7', '#f59e0b', '#3b82f6', '#ec4899'];
    for (let i = 0; i < 90; i++) {
      confettiParticles.push({
        x: confettiCanvas.width / 2 + (Math.random() - 0.5) * 200,
        y: confettiCanvas.height / 3 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    if (!confettiAnimId) renderConfetti();
  }

  function renderConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let active = false;

    confettiParticles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        active = true;
        confettiCtx.save();
        confettiCtx.globalAlpha = Math.max(0, p.alpha);
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        confettiCtx.restore();
      }
    });

    if (active) {
      confettiAnimId = requestAnimationFrame(renderConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiAnimId = null;
    }
  }

  // --- BINARY SEARCH STEP GENERATOR ---
  function generateBinarySearchSteps(arr, target) {
    const steps = [];
    let lo = 0;
    let hi = arr.length - 1;
    let stepNumber = 1;

    steps.push({
      stepNumber: 0,
      lo: lo,
      hi: hi,
      mid: -1,
      midVal: null,
      comparison: '?',
      status: 'idle',
      actionTitle: 'Persiapan Binary Search',
      actionDesc: `Inisialisasi batas jangkauan awal: lo = 0 dan hi = ${hi} (total ${arr.length} elemen terurut).`,
      eliminatedIndices: [],
      activeCodeRole: 'init'
    });

    const currentEliminated = new Set();

    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const midVal = arr[mid];
      const remainingCount = hi - lo + 1;

      if (midVal === target) {
        steps.push({
          stepNumber: stepNumber++,
          lo: lo,
          hi: hi,
          mid: mid,
          midVal: midVal,
          comparison: '==',
          status: 'found',
          actionTitle: `Target Ditemukan pada Indeks [${mid}]!`,
          actionDesc: `Nilai a[${mid}] = ${midVal} tepat sama dengan target ${target}. Pencarian BERHASIL diselesaikan dalam ${stepNumber - 1} iterasi!`,
          formulaText: `⌊(${lo} + ${hi}) / 2⌋ = ${mid}`,
          comparisonText: `${midVal} == ${target}`,
          decisionText: `Target sama! Selesai (Return ${mid})`,
          remainingCount: remainingCount,
          eliminatedIndices: Array.from(currentEliminated),
          activeCodeRole: 'found'
        });
        return steps;
      } else if (midVal < target) {
        for (let i = lo; i <= mid; i++) currentEliminated.add(i);

        steps.push({
          stepNumber: stepNumber++,
          lo: lo,
          hi: hi,
          mid: mid,
          midVal: midVal,
          comparison: '<',
          status: 'go_right',
          actionTitle: `a[${mid}] = ${midVal} < ${target} ➜ Geser ke Kanan`,
          actionDesc: `Karena array terurut dan target (${target}) lebih besar dari ${midVal}, maka target tidak mungkin berada di paruh kiri [${lo}..${mid}]. Elemen dieliminasi, geser lo = mid + 1 (${mid + 1}).`,
          formulaText: `⌊(${lo} + ${hi}) / 2⌋ = ${mid}`,
          comparisonText: `${midVal} < ${target}`,
          decisionText: `Target lebih besar, geser lo = mid + 1 (${mid + 1})`,
          remainingCount: remainingCount,
          eliminatedIndices: Array.from(currentEliminated),
          activeCodeRole: 'go_right'
        });

        lo = mid + 1;
      } else {
        for (let i = mid; i <= hi; i++) currentEliminated.add(i);

        steps.push({
          stepNumber: stepNumber++,
          lo: lo,
          hi: hi,
          mid: mid,
          midVal: midVal,
          comparison: '>',
          status: 'go_left',
          actionTitle: `a[${mid}] = ${midVal} > ${target} ➜ Geser ke Kiri`,
          actionDesc: `Karena target (${target}) lebih kecil dari ${midVal}, maka target tidak mungkin berada di paruh kanan [${mid}..${hi}]. Elemen dieliminasi, geser hi = mid - 1 (${mid - 1}).`,
          formulaText: `⌊(${lo} + ${hi}) / 2⌋ = ${mid}`,
          comparisonText: `${midVal} > ${target}`,
          decisionText: `Target lebih kecil, geser hi = mid - 1 (${mid - 1})`,
          remainingCount: remainingCount,
          eliminatedIndices: Array.from(currentEliminated),
          activeCodeRole: 'go_left'
        });

        hi = mid - 1;
      }
    }

    steps.push({
      stepNumber: stepNumber,
      lo: lo,
      hi: hi,
      mid: -1,
      midVal: null,
      comparison: '≠',
      status: 'not_found',
      actionTitle: `Target ${target} Tidak Ditemukan (lo > hi)`,
      actionDesc: `Rentang pencarian kosong karena lo (${lo}) > hi (${hi}). Seluruh kemungkinan lokasi telah diperiksa. Algoritma mengembalikan nilai -1.`,
      formulaText: `lo (${lo}) > hi (${hi})`,
      comparisonText: `Tidak Ada`,
      decisionText: `Pencarian berhenti (Return -1)`,
      remainingCount: 0,
      eliminatedIndices: Array.from(currentEliminated),
      activeCodeRole: 'not_found'
    });

    return steps;
  }

  // --- LINEAR SEARCH STEP GENERATOR ---
  function generateLinearSearchSteps(arr, target) {
    const steps = [];
    const checkedIndices = [];

    steps.push({
      stepNumber: 0,
      currIndex: -1,
      currVal: null,
      comparison: '?',
      status: 'idle',
      actionTitle: 'Persiapan Linear Search',
      actionDesc: `Mulai penelusuran berurutan dari indeks 0 hingga ${arr.length - 1} (total ${arr.length} elemen).`,
      checkedIndices: [],
      activeCodeRole: 'loop'
    });

    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      const remainingCount = arr.length - i - 1;

      if (val === target) {
        steps.push({
          stepNumber: i + 1,
          currIndex: i,
          currVal: val,
          comparison: '==',
          status: 'found',
          actionTitle: `Target Ditemukan pada Indeks [${i}]!`,
          actionDesc: `Pemeriksaan indeks ke-${i}: Nilai a[${i}] = ${val} sama persis dengan target ${target}. Pencarian selesai dalam ${i + 1} langkah!`,
          comparisonText: `a[${i}] (${val}) == ${target}`,
          decisionText: `Cocok! Target ditemukan di indeks ${i} (Return ${i})`,
          remainingCount: remainingCount,
          checkedIndices: [...checkedIndices],
          activeCodeRole: 'found'
        });
        return steps;
      } else {
        checkedIndices.push(i);
        steps.push({
          stepNumber: i + 1,
          currIndex: i,
          currVal: val,
          comparison: '≠',
          status: 'scanning',
          actionTitle: `Pemeriksaan Indeks [${i}]: Bukan Target`,
          actionDesc: `Nilai a[${i}] = ${val} ≠ ${target}. Target belum ditemukan, melangkah ke indeks berikutnya [${i + 1}].`,
          comparisonText: `a[${i}] (${val}) ≠ ${target}`,
          decisionText: `Bukan target, lanjut ke indeks ${i + 1}`,
          remainingCount: remainingCount,
          checkedIndices: [...checkedIndices],
          activeCodeRole: 'check_eq'
        });
      }
    }

    steps.push({
      stepNumber: arr.length + 1,
      currIndex: -1,
      currVal: null,
      comparison: '≠',
      status: 'not_found',
      actionTitle: `Target ${target} Tidak Ditemukan!`,
      actionDesc: `Semua ${arr.length} elemen telah diperiksa, tidak ada yang cocok. Algoritma mengembalikan -1.`,
      comparisonText: `Selesai`,
      decisionText: `Seluruh elemen selesai diperiksa (Return -1)`,
      remainingCount: 0,
      checkedIndices: [...checkedIndices],
      activeCodeRole: 'not_found'
    });

    return steps;
  }

  // --- DUEL ARENA STEP GENERATOR ---
  function generateDuelSteps(arr, target) {
    const binSteps = generateBinarySearchSteps(arr, target);
    const linSteps = generateLinearSearchSteps(arr, target);

    const maxTicks = Math.max(binSteps.length, linSteps.length);
    const duelSteps = [];

    const lastBinStep = binSteps[binSteps.length - 1];
    const lastLinStep = linSteps[linSteps.length - 1];

    for (let t = 0; t < maxTicks; t++) {
      const bStep = t < binSteps.length ? binSteps[t] : lastBinStep;
      const lStep = t < linSteps.length ? linSteps[t] : lastLinStep;

      // Comparative note
      let note = '';
      if (t === 0) {
        note = 'Start: Kedua algoritma siap memulai balapan';
      } else if (bStep.status === 'found' && lStep.status !== 'found') {
        note = `⚡ Binary Search SELESAI LEBIH DULU! Linear Search masih memeriksa indeks [${lStep.currIndex}]`;
      } else if (bStep.status === 'found' && lStep.status === 'found') {
        note = 'Kedua algoritma telah menyelesaikan pencarian.';
      } else {
        note = `Binary memeriksa mid [${bStep.mid}] (memotong 50% jangkauan), Linear memeriksa sekuensial [${lStep.currIndex}].`;
      }

      duelSteps.push({
        tick: t,
        binStep: bStep,
        linStep: lStep,
        binFinished: t >= binSteps.length - 1,
        linFinished: t >= linSteps.length - 1,
        note: note
      });
    }

    return { duelSteps, binTotalSteps: binSteps.length - 1, linTotalSteps: linSteps.length - 1 };
  }

  // --- DOM REFERENCES ---
  const elAlgoTabBinary = document.getElementById('tabBinarySearch');
  const elAlgoTabLinear = document.getElementById('tabLinearSearch');
  const elAlgoTabCompare = document.getElementById('tabCompare');
  const elActiveAlgoBadge = document.getElementById('activeAlgoBadge');
  const elAlgoLogoIcon = document.getElementById('algoLogoIcon');
  const elTimeComplexityText = document.getElementById('timeComplexityText');
  const elSpaceComplexityText = document.getElementById('spaceComplexityText');

  const elSingleAlgoContainer = document.getElementById('singleAlgoContainer');
  const elCompareArenaContainer = document.getElementById('compareArenaContainer');

  const elArrayViewport = document.getElementById('arrayViewport');
  const elRangeIndicatorWrapper = document.getElementById('rangeIndicatorWrapper');
  const elRangeBracket = document.getElementById('rangeBracket');
  const elRangeLabel = document.getElementById('rangeLabel');

  const elPointerLo = document.getElementById('pointerLo');
  const elPointerMid = document.getElementById('pointerMid');
  const elPointerHi = document.getElementById('pointerHi');
  const elPointerLoIdx = document.getElementById('pointerLoIdx');
  const elPointerMidIdx = document.getElementById('pointerMidIdx');
  const elPointerHiIdx = document.getElementById('pointerHiIdx');
  const elPointerScan = document.getElementById('pointerScan');
  const elPointerScanIdx = document.getElementById('pointerScanIdx');

  const elVisualLegend = document.getElementById('visualLegend');
  const elStatusPulse = document.getElementById('statusPulse');
  const elStatusMessage = document.getElementById('statusMessage');

  const elCompTargetVal = document.getElementById('compTargetVal');
  const elCompExaminedLabel = document.getElementById('compExaminedLabel');
  const elCompExaminedVal = document.getElementById('compExaminedVal');
  const elCompOperator = document.getElementById('compOperator');
  const elCompEvaluation = document.getElementById('compEvaluation');

  const elCurrentStepText = document.getElementById('currentStepText');
  const elTotalStepsText = document.getElementById('totalStepsText');
  const elProgressPercent = document.getElementById('progressPercent');
  const elProgressFill = document.getElementById('progressFill');

  const elBtnFirst = document.getElementById('btnFirst');
  const elBtnPrev = document.getElementById('btnPrev');
  const elBtnPlay = document.getElementById('btnPlay');
  const elBtnNext = document.getElementById('btnNext');
  const elBtnLast = document.getElementById('btnLast');
  const elBtnReset = document.getElementById('btnReset');
  const elPlayIcon = document.getElementById('playIcon');
  const elPlayText = document.getElementById('playText');

  // Duel Arena DOM
  const elDuelLinearStepsCount = document.getElementById('duelLinearStepsCount');
  const elDuelBinaryStepsCount = document.getElementById('duelBinaryStepsCount');
  const elDuelLinearStatus = document.getElementById('duelLinearStatus');
  const elDuelBinaryStatus = document.getElementById('duelBinaryStatus');
  const elDuelEfficiencyVerdict = document.getElementById('duelEfficiencyVerdict');
  const elMetricBarBinary = document.getElementById('metricBarBinary');
  const elMetricBarLinear = document.getElementById('metricBarLinear');

  const elDuelLinearViewport = document.getElementById('duelLinearViewport');
  const elDuelBinaryViewport = document.getElementById('duelBinaryViewport');
  const elDuelPointerLinear = document.getElementById('duelPointerLinear');
  const elDuelPointerLinearIdx = document.getElementById('duelPointerLinearIdx');
  const elDuelPointerLo = document.getElementById('duelPointerLo');
  const elDuelPointerMid = document.getElementById('duelPointerMid');
  const elDuelPointerHi = document.getElementById('duelPointerHi');
  const elDuelPointerLoIdx = document.getElementById('duelPointerLoIdx');
  const elDuelPointerMidIdx = document.getElementById('duelPointerMidIdx');
  const elDuelPointerHiIdx = document.getElementById('duelPointerHiIdx');
  const elDuelLinearMiniLog = document.getElementById('duelLinearMiniLog');
  const elDuelBinaryMiniLog = document.getElementById('duelBinaryMiniLog');

  const elBtnDuelFirst = document.getElementById('btnDuelFirst');
  const elBtnDuelPrev = document.getElementById('btnDuelPrev');
  const elBtnDuelPlay = document.getElementById('btnDuelPlay');
  const elBtnDuelNext = document.getElementById('btnDuelNext');
  const elBtnDuelLast = document.getElementById('btnDuelLast');
  const elBtnDuelReset = document.getElementById('btnDuelReset');
  const elDuelPlayIcon = document.getElementById('duelPlayIcon');
  const elDuelPlayText = document.getElementById('duelPlayText');
  const elDuelCurrentStepText = document.getElementById('duelCurrentStepText');
  const elDuelTotalStepsText = document.getElementById('duelTotalStepsText');
  const elDuelProgressPercent = document.getElementById('duelProgressPercent');
  const elDuelProgressFill = document.getElementById('duelProgressFill');
  const elDuelSpeedSelect = document.getElementById('duelSpeedSelect');

  const elDuelTableBody = document.getElementById('duelTableBody');
  const elBtnCopyDuelTable = document.getElementById('btnCopyDuelTable');
  const elBtnExportDuelCsv = document.getElementById('btnExportDuelCsv');

  // Common Controls
  const elTargetInput = document.getElementById('targetInput');
  const elBtnSearch = document.getElementById('btnSearch');
  const elPresetSelect = document.getElementById('presetSelect');
  const elBtnRandom = document.getElementById('btnRandom');
  const elSizeSlider = document.getElementById('sizeSlider');
  const elSizeDisplay = document.getElementById('sizeDisplay');
  const elSpeedSelect = document.getElementById('speedSelect');

  const elTableTitleText = document.getElementById('tableTitleText');
  const elTraceTableHead = document.getElementById('traceTableHead');
  const elTraceTableBody = document.getElementById('traceTableBody');
  const elBtnCopyTable = document.getElementById('btnCopyTable');
  const elBtnExportCsv = document.getElementById('btnExportCsv');

  const elCodeDisplay = document.getElementById('codeDisplay');
  const elLangTabs = document.getElementById('langTabs');
  const elExpStepTitle = document.getElementById('expStepTitle');
  const elExpStepText = document.getElementById('expStepText');
  const elEducationCardsGrid = document.getElementById('educationCardsGrid');

  const elSoundToggle = document.getElementById('soundToggle');
  const elSoundIcon = document.getElementById('soundIcon');
  const elThemeToggle = document.getElementById('themeToggle');
  const elThemeIcon = document.getElementById('themeIcon');

  const elCustomModal = document.getElementById('customModal');
  const elBtnCloseModal = document.getElementById('btnCloseModal');
  const elBtnCancelCustom = document.getElementById('btnCancelCustom');
  const elBtnApplyCustom = document.getElementById('btnApplyCustom');
  const elCustomArrayInput = document.getElementById('customArrayInput');
  const elModalHintText = document.getElementById('modalHintText');

  // --- POPULATE PRESETS & LABELS ---
  function updatePresetDropdown() {
    elPresetSelect.innerHTML = '';
    if (state.currentAlgo === 'binary' || state.currentAlgo === 'compare') {
      elPresetSelect.innerHTML = `
        <option value="default">Preset: Terurut Default (14 Angka)</option>
        <option value="primes">Preset: Bilangan Prima</option>
        <option value="evens">Preset: Bilangan Genap</option>
        <option value="tens">Preset: Kelipatan 10</option>
        <option value="custom">✏️ Masukkan Data Sendiri...</option>
      `;
    } else {
      elPresetSelect.innerHTML = `
        <option value="unsorted_default">Preset: Data Acak / Unsorted (14 Angka)</option>
        <option value="grades">Preset: Nilai Mahasiswa Acak (45 - 99)</option>
        <option value="scrambled">Preset: Angka Campuran Bebas</option>
        <option value="sorted">Preset: Data Terurut</option>
        <option value="custom">✏️ Masukkan Data Sendiri...</option>
      `;
    }
  }

  function updateVisualLegend() {
    if (state.currentAlgo === 'binary') {
      elVisualLegend.innerHTML = `
        <div class="legend-item"><span class="legend-color legend-active"></span> Jangkauan Aktif [lo..hi]</div>
        <div class="legend-item"><span class="legend-color legend-mid"></span> Elemen Tengah (Mid)</div>
        <div class="legend-item"><span class="legend-color legend-eliminated"></span> Tereliminasi (50% Dibuang)</div>
        <div class="legend-item"><span class="legend-color legend-found"></span> Target Ditemukan</div>
      `;
    } else if (state.currentAlgo === 'linear') {
      elVisualLegend.innerHTML = `
        <div class="legend-item"><span class="legend-color legend-scan"></span> Indeks Diperiksa (i)</div>
        <div class="legend-item"><span class="legend-color legend-checked"></span> Sudah Diperiksa (Tidak Cocok)</div>
        <div class="legend-item"><span class="legend-color legend-found"></span> Target Cocok / Ditemukan</div>
      `;
    }
  }

  function updateEducationCards() {
    if (state.currentAlgo === 'binary') {
      elEducationCardsGrid.innerHTML = `
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">⚡</span><h4>Analisis Kompleksitas Binary Search</h4></div>
          <table class="edu-table">
            <tr><td>Kasus Terbaik</td><td><span class="badge-tag green">O(1)</span></td><td>Target tepat berada di titik tengah pertama kali diperiksa.</td></tr>
            <tr><td>Kasus Rata-rata</td><td><span class="badge-tag cyan">O(log n)</span></td><td>Pencarian selalu memangkas 50% data di setiap langkah.</td></tr>
            <tr><td>Kasus Terburuk</td><td><span class="badge-tag orange">O(log n)</span></td><td>Rentang menyusut hingga 1 elemen sebelum ditemukan / nihil.</td></tr>
            <tr><td>Kompleksitas Ruang</td><td><span class="badge-tag green">O(1)</span></td><td>Hanya butuh 3 penunjuk: lo, mid, hi.</td></tr>
          </table>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">📐</span><h4>Kekuatan Divide &amp; Conquer</h4></div>
          <div class="edu-content">
            <p>Di setiap iterasi, separuh rentang langsung dibuang tanpa perlu diuji satu per satu:</p>
            <div class="math-flow">
              <span class="math-node">N</span><span class="math-arr">➜</span>
              <span class="math-node">N/2</span><span class="math-arr">➜</span>
              <span class="math-node">N/4</span><span class="math-arr">➜</span>
              <span class="math-node">...</span><span class="math-arr">➜</span>
              <span class="math-node">1</span>
            </div>
            <div class="comparison-stat-box">
              <div class="stat-col"><span class="stat-num">1.000.000 Data</span><span class="stat-label">Dataset Terurut</span></div>
              <div class="stat-vs">VS</div>
              <div class="stat-col"><span class="stat-num text-cyan">Maks. 20</span><span class="stat-label">Langkah Binary</span></div>
              <div class="stat-col"><span class="stat-num text-orange">Maks. 1.000.000</span><span class="stat-label">Langkah Linear</span></div>
            </div>
          </div>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">⚠️</span><h4>Syarat Mutlak Binary Search</h4></div>
          <ul class="edu-rules-list">
            <li><strong>Data Harus Terurut:</strong> Binary Search hanya valid jika data sudah disortir sebelumnya.</li>
            <li><strong>Akses Acak Cepat:</strong> Efektif pada array atau vektor di mana indeks diakses dalam O(1).</li>
          </ul>
        </div>
      `;
    } else if (state.currentAlgo === 'linear') {
      elEducationCardsGrid.innerHTML = `
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">🔍</span><h4>Analisis Kompleksitas Linear Search</h4></div>
          <table class="edu-table">
            <tr><td>Kasus Terbaik</td><td><span class="badge-tag green">O(1)</span></td><td>Target langsung berada di indeks pertama (indeks 0).</td></tr>
            <tr><td>Kasus Rata-rata</td><td><span class="badge-tag orange">O(n)</span></td><td>Rata-rata memeriksa sekitar n/2 elemen dalam array.</td></tr>
            <tr><td>Kasus Terburuk</td><td><span class="badge-tag orange">O(n)</span></td><td>Target di indeks paling akhir, atau tidak ada sama sekali.</td></tr>
            <tr><td>Kompleksitas Ruang</td><td><span class="badge-tag green">O(1)</span></td><td>Hanya butuh 1 variabel pencacah loop indeks i.</td></tr>
          </table>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">💡</span><h4>Kapan Menggunakan Linear Search?</h4></div>
          <ul class="edu-rules-list">
            <li><strong>Data Acak / Tidak Terurut:</strong> Jika data belum terurut dan hanya dicari 1 kali, Linear Search lebih praktis daripada mengurutkan data lebih dulu (O(n log n)).</li>
            <li><strong>Dataset Kecil:</strong> Pada array kecil (n &lt; 30), efisiensi Linear Search sudah sangat cukup.</li>
          </ul>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">⚖️</span><h4>Perbandingan: Linear vs Binary</h4></div>
          <div class="comparison-stat-box">
            <div class="stat-col"><span class="stat-num text-orange">Linear Search</span><span class="stat-label">Data Acak / Terurut</span></div>
            <div class="stat-vs">VS</div>
            <div class="stat-col"><span class="stat-num text-cyan">Binary Search</span><span class="stat-label">Wajib Terurut</span></div>
          </div>
        </div>
      `;
    } else {
      // Compare Arena Education Cards
      elEducationCardsGrid.innerHTML = `
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">🏁</span><h4>Pelajaran Utama dari Duel Balapan</h4></div>
          <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">
            Ketika dataset terurut, <strong>Binary Search membagi dua masalah di setiap perbandingan</strong>, sehingga melaju sangat pesat menuju target. Sementara <strong>Linear Search harus melangkah santai satu per satu</strong>. Pada 14 data, Binary Search selesai dalam 1–4 langkah, sedangkan Linear Search butuh hingga 14 langkah.
          </p>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">📊</span><h4>Tabel Perbandingan Nyata</h4></div>
          <table class="edu-table">
            <tr><th>Ukuran Data (N)</th><th>Linear Search Maks</th><th>Binary Search Maks</th></tr>
            <tr><td>16 elemen</td><td>16 langkah</td><td>4 langkah (4x lebih cepat)</td></tr>
            <tr><td>1.024 elemen</td><td>1.024 langkah</td><td>10 langkah (102x lebih cepat!)</td></tr>
            <tr><td>1.000.000 elemen</td><td>1.000.000 langkah</td><td>20 langkah (50.000x lebih cepat!)</td></tr>
          </table>
        </div>
        <div class="edu-card">
          <div class="edu-card-title"><span class="edu-icon">🎯</span><h4>Kapan Linear Search Menang?</h4></div>
          <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">
            Linear Search hanya mengalahkan Binary Search jika target <strong>berada tepat di indeks paling awal (indeks 0 atau 1)</strong>, di mana Linear Search selesai dalam 1 langkah, sedangkan Binary Search memeriksa indeks tengah terlebih dahulu.
          </p>
        </div>
      `;
    }
  }

  // --- RENDER CODE DISPLAY ---
  function renderCodeBlock() {
    const algoKey = state.currentAlgo === 'compare' ? 'binary' : state.currentAlgo;
    const algoSnippets = CODE_SNIPPETS[algoKey] || CODE_SNIPPETS.binary;
    const lines = algoSnippets[state.currentLang] || algoSnippets.pseudocode;
    elCodeDisplay.innerHTML = '';

    lines.forEach((line) => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'code-line';
      lineDiv.dataset.role = line.role;

      const lnSpan = document.createElement('span');
      lnSpan.className = 'code-ln';
      lnSpan.textContent = line.ln;

      const textSpan = document.createElement('span');
      textSpan.className = 'code-text';
      textSpan.textContent = line.text;

      lineDiv.appendChild(lnSpan);
      lineDiv.appendChild(textSpan);
      elCodeDisplay.appendChild(lineDiv);
    });
  }

  function highlightCodeLine(role) {
    const allLines = elCodeDisplay.querySelectorAll('.code-line');
    allLines.forEach((l) => l.classList.remove('active', 'active-linear'));

    if (!role) return;

    let targetLine = elCodeDisplay.querySelector(`.code-line[data-role="${role}"]`);
    if (!targetLine) {
      if (role === 'go_right') targetLine = elCodeDisplay.querySelector('.code-line[data-role="check_lt"]');
      if (role === 'go_left') targetLine = elCodeDisplay.querySelector('.code-line[data-role="check_gt"]');
    }

    if (targetLine) {
      if (state.currentAlgo === 'linear') {
        targetLine.classList.add('active-linear');
      } else {
        targetLine.classList.add('active');
      }
      targetLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // --- RENDER TRACE TABLE (SINGLE VIEW) ---
  function renderTraceTable() {
    elTraceTableHead.innerHTML = '';
    elTraceTableBody.innerHTML = '';

    if (state.currentAlgo === 'binary') {
      elTableTitleText.textContent = 'Tabel Tracing Binary Search (Dry-Run Table)';
      elTraceTableHead.innerHTML = `
        <tr>
          <th class="col-step">Iterasi</th>
          <th class="col-range">Rentang [lo .. hi]</th>
          <th class="col-formula">Rumus mid = ⌊(lo + hi) / 2⌋</th>
          <th class="col-midval">Nilai a[mid]</th>
          <th class="col-comp">Perbandingan vs Target</th>
          <th class="col-action">Keputusan &amp; Aksi Logika</th>
          <th class="col-remaining">Sisa Data</th>
        </tr>
      `;

      const executionSteps = state.steps.filter((s) => s.stepNumber > 0);
      executionSteps.forEach((step) => {
        const row = document.createElement('tr');
        row.dataset.stepIndex = step.stepNumber;

        const tdStep = document.createElement('td');
        tdStep.className = 'col-step';
        tdStep.innerHTML = `<span class="cell-pill cyan">Iterasi ${step.stepNumber}</span>`;

        const tdRange = document.createElement('td');
        tdRange.className = 'col-range';
        if (step.status === 'not_found') {
          tdRange.innerHTML = `<span class="cell-pill rose">lo (${step.lo}) > hi (${step.hi})</span>`;
        } else {
          tdRange.innerHTML = `<strong>[${step.lo} .. ${step.hi}]</strong> <small class="text-dim">(${step.hi - step.lo + 1} elemen)</small>`;
        }

        const tdFormula = document.createElement('td');
        tdFormula.className = 'col-formula';
        tdFormula.innerHTML = `<code>${step.formulaText || '—'}</code>`;

        const tdMidVal = document.createElement('td');
        tdMidVal.className = 'col-midval';
        tdMidVal.innerHTML = step.midVal !== null ? `<span class="cell-pill purple">a[${step.mid}] = ${step.midVal}</span>` : '—';

        const tdComp = document.createElement('td');
        tdComp.className = 'col-comp';
        tdComp.innerHTML = `<strong>${step.comparisonText || '—'}</strong>`;

        const tdAction = document.createElement('td');
        tdAction.className = 'col-action';
        if (step.status === 'found') {
          tdAction.innerHTML = `<span class="cell-pill green">✓ ${step.decisionText}</span>`;
        } else if (step.status === 'not_found') {
          tdAction.innerHTML = `<span class="cell-pill rose">✗ ${step.decisionText}</span>`;
        } else {
          tdAction.textContent = step.decisionText || '—';
        }

        const tdRemaining = document.createElement('td');
        tdRemaining.className = 'col-remaining';
        const pct = Math.round((step.remainingCount / state.array.length) * 100);
        tdRemaining.innerHTML = `${step.remainingCount} data <small class="text-dim">(${pct}%)</small>`;

        row.appendChild(tdStep);
        row.appendChild(tdRange);
        row.appendChild(tdFormula);
        row.appendChild(tdMidVal);
        row.appendChild(tdComp);
        row.appendChild(tdAction);
        row.appendChild(tdRemaining);

        row.addEventListener('click', () => jumpToStep(step.stepNumber));
        elTraceTableBody.appendChild(row);
      });
    } else {
      elTableTitleText.textContent = 'Tabel Tracing Linear Search (Dry-Run Table)';
      elTraceTableHead.innerHTML = `
        <tr>
          <th class="col-step">Langkah</th>
          <th class="col-range">Indeks (i)</th>
          <th class="col-midval">Nilai a[i]</th>
          <th class="col-comp">Perbandingan a[i] == Target</th>
          <th class="col-action">Hasil &amp; Keputusan Logika</th>
          <th class="col-remaining">Belum Diperiksa</th>
        </tr>
      `;

      const executionSteps = state.steps.filter((s) => s.stepNumber > 0);
      executionSteps.forEach((step) => {
        const row = document.createElement('tr');
        row.dataset.stepIndex = step.stepNumber;

        const tdStep = document.createElement('td');
        tdStep.className = 'col-step';
        tdStep.innerHTML = `<span class="cell-pill amber">Langkah ${step.stepNumber}</span>`;

        const tdIdx = document.createElement('td');
        tdIdx.className = 'col-range';
        tdIdx.innerHTML = step.currIndex !== -1 ? `<strong>Indeks [${step.currIndex}]</strong>` : '<span class="cell-pill rose">Selesai</span>';

        const tdVal = document.createElement('td');
        tdVal.className = 'col-midval';
        tdVal.innerHTML = step.currVal !== null ? `<span class="cell-pill amber">a[${step.currIndex}] = ${step.currVal}</span>` : '—';

        const tdComp = document.createElement('td');
        tdComp.className = 'col-comp';
        tdComp.innerHTML = `<strong>${step.comparisonText || '—'}</strong>`;

        const tdAction = document.createElement('td');
        tdAction.className = 'col-action';
        if (step.status === 'found') {
          tdAction.innerHTML = `<span class="cell-pill green">✓ ${step.decisionText}</span>`;
        } else if (step.status === 'not_found') {
          tdAction.innerHTML = `<span class="cell-pill rose">✗ ${step.decisionText}</span>`;
        } else {
          tdAction.textContent = step.decisionText || '—';
        }

        const tdRemaining = document.createElement('td');
        tdRemaining.className = 'col-remaining';
        tdRemaining.innerHTML = `${step.remainingCount} elemen`;

        row.appendChild(tdStep);
        row.appendChild(tdIdx);
        row.appendChild(tdVal);
        row.appendChild(tdComp);
        row.appendChild(tdAction);
        row.appendChild(tdRemaining);

        row.addEventListener('click', () => jumpToStep(step.stepNumber));
        elTraceTableBody.appendChild(row);
      });
    }
  }

  function updateTraceTableHighlight(stepIndex) {
    const rows = elTraceTableBody.querySelectorAll('tr');
    rows.forEach((r) => {
      r.classList.remove('active-row', 'active-row-linear', 'found-row', 'missed-row');
      const rowStep = parseInt(r.dataset.stepIndex, 10);
      if (rowStep === stepIndex) {
        const stepData = state.steps[stepIndex];
        if (stepData && stepData.status === 'found') {
          r.classList.add('found-row');
        } else if (stepData && stepData.status === 'not_found') {
          r.classList.add('missed-row');
        } else {
          if (state.currentAlgo === 'linear') {
            r.classList.add('active-row-linear');
          } else {
            r.classList.add('active-row');
          }
        }
        r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // --- RENDER ARRAY ELEMENTS HELPER ---
  function createArrayDOM(arr, prefix = 'cell') {
    const fragment = document.createDocumentFragment();
    arr.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'array-cell';
      cell.id = `${prefix}-${idx}`;
      cell.dataset.index = idx;

      const idxLabel = document.createElement('span');
      idxLabel.className = 'cell-index';
      idxLabel.textContent = idx;

      const cellBox = document.createElement('div');
      cellBox.className = 'cell-box';
      cellBox.textContent = val;

      cell.appendChild(idxLabel);
      cell.appendChild(cellBox);
      fragment.appendChild(cell);
    });
    return fragment;
  }

  function positionPointerElement(pointerEl, cellIndex, indexLabelEl, prefix = 'cell') {
    if (cellIndex === -1 || cellIndex === undefined || cellIndex === null) {
      pointerEl.style.opacity = '0';
      pointerEl.style.pointerEvents = 'none';
      return;
    }

    const cell = document.getElementById(`${prefix}-${cellIndex}`);
    if (!cell) {
      pointerEl.style.opacity = '0';
      return;
    }

    pointerEl.style.opacity = '1';
    const cellLeft = cell.offsetLeft;
    const cellWidth = cell.offsetWidth;
    const pointerWidth = pointerEl.offsetWidth || 58;

    const targetLeft = cellLeft + cellWidth / 2 - pointerWidth / 2;
    pointerEl.style.left = `${targetLeft}px`;

    if (indexLabelEl) indexLabelEl.textContent = `[${cellIndex}]`;
  }

  // --- RENDER SINGLE VIEW STEP ---
  function renderCurrentStep() {
    if (state.currentAlgo === 'compare') return;

    const step = state.steps[state.currentStepIndex];
    if (!step) return;

    const cells = elArrayViewport.querySelectorAll('.array-cell');

    if (state.currentAlgo === 'binary') {
      elPointerScan.style.display = 'none';
      elPointerLo.style.display = 'flex';
      elPointerMid.style.display = 'flex';
      elPointerHi.style.display = 'flex';
      elCompExaminedLabel.textContent = 'a[mid]';

      cells.forEach((cell, idx) => {
        cell.classList.remove('active', 'is-mid', 'is-found', 'eliminated', 'is-scanning', 'is-checked-miss');

        if (step.eliminatedIndices && step.eliminatedIndices.includes(idx)) {
          cell.classList.add('eliminated');
        }
        if (step.lo <= step.hi && idx >= step.lo && idx <= step.hi) {
          cell.classList.add('active');
        }
        if (idx === step.mid) {
          cell.classList.add('is-mid');
        }
        if (step.status === 'found' && idx === step.mid) {
          cell.classList.remove('is-mid');
          cell.classList.add('is-found');
        }
      });

      const validLo = step.lo >= 0 && step.lo < state.array.length ? step.lo : -1;
      const validHi = step.hi >= 0 && step.hi < state.array.length ? step.hi : -1;
      positionPointerElement(elPointerLo, validLo, elPointerLoIdx);
      positionPointerElement(elPointerHi, validHi, elPointerHiIdx);
      positionPointerElement(elPointerMid, step.mid, elPointerMidIdx);

      // Bracket
      if (step.lo >= 0 && step.hi >= 0 && step.lo <= step.hi) {
        const cellLo = document.getElementById(`cell-${step.lo}`);
        const cellHi = document.getElementById(`cell-${step.hi}`);
        if (cellLo && cellHi) {
          elRangeIndicatorWrapper.style.display = 'block';
          elRangeBracket.style.opacity = '1';
          const leftPos = cellLo.offsetLeft;
          const rightPos = cellHi.offsetLeft + cellHi.offsetWidth;
          elRangeBracket.style.left = `${leftPos}px`;
          elRangeBracket.style.width = `${rightPos - leftPos}px`;
          elRangeLabel.textContent = `${step.lo} .. ${step.hi}`;
        }
      } else {
        elRangeBracket.style.opacity = '0';
      }

      elCompTargetVal.textContent = state.target;
      elCompExaminedVal.textContent = step.midVal !== null ? step.midVal : '—';
      elCompOperator.className = 'comp-operator';

      if (step.comparison === '==') {
        elCompOperator.textContent = '=';
        elCompOperator.classList.add('eq');
      } else if (step.comparison === '<') {
        elCompOperator.textContent = '<';
        elCompOperator.classList.add('lt');
      } else if (step.comparison === '>') {
        elCompOperator.textContent = '>';
        elCompOperator.classList.add('gt');
      } else {
        elCompOperator.textContent = '?';
      }

      if (step.stepNumber === 0) {
        elCompEvaluation.textContent = 'Tekan tombol Putar atau Langkah Berikutnya';
      } else if (step.status === 'found') {
        elCompEvaluation.innerHTML = `<span style="color:var(--emerald); font-weight:700;">Target ${state.target} Ditemukan pada indeks [${step.mid}]!</span>`;
      } else if (step.status === 'not_found') {
        elCompEvaluation.innerHTML = `<span style="color:var(--rose); font-weight:700;">Target ${state.target} Tidak Ditemukan!</span>`;
      } else if (step.comparison === '<') {
        elCompEvaluation.textContent = `${step.midVal} < ${state.target} ➜ Target ada di sebelah kanan (lo = mid + 1)`;
      } else if (step.comparison === '>') {
        elCompEvaluation.textContent = `${step.midVal} > ${state.target} ➜ Target ada di sebelah kiri (hi = mid - 1)`;
      }
    } else {
      // Linear Single View
      elPointerLo.style.display = 'none';
      elPointerMid.style.display = 'none';
      elPointerHi.style.display = 'none';
      elPointerScan.style.display = 'flex';
      elRangeIndicatorWrapper.style.display = 'none';
      elCompExaminedLabel.textContent = 'a[i]';

      cells.forEach((cell, idx) => {
        cell.classList.remove('active', 'is-mid', 'is-found', 'eliminated', 'is-scanning', 'is-checked-miss');

        if (step.checkedIndices && step.checkedIndices.includes(idx)) {
          cell.classList.add('is-checked-miss');
        }
        if (idx === step.currIndex) {
          cell.classList.remove('is-checked-miss');
          if (step.status === 'found') {
            cell.classList.add('is-found');
          } else {
            cell.classList.add('is-scanning');
          }
        }
      });

      positionPointerElement(elPointerScan, step.currIndex, elPointerScanIdx);

      elCompTargetVal.textContent = state.target;
      elCompExaminedVal.textContent = step.currVal !== null ? step.currVal : '—';
      elCompOperator.className = 'comp-operator';

      if (step.comparison === '==') {
        elCompOperator.textContent = '=';
        elCompOperator.classList.add('eq');
      } else if (step.comparison === '≠') {
        elCompOperator.textContent = '≠';
        elCompOperator.classList.add('neq');
      } else {
        elCompOperator.textContent = '?';
      }

      if (step.stepNumber === 0) {
        elCompEvaluation.textContent = 'Mulai scanning sekuensial dari indeks 0';
      } else if (step.status === 'found') {
        elCompEvaluation.innerHTML = `<span style="color:var(--emerald); font-weight:700;">Cocok! a[${step.currIndex}] = ${step.currVal} == ${state.target}</span>`;
      } else if (step.status === 'not_found') {
        elCompEvaluation.innerHTML = `<span style="color:var(--rose); font-weight:700;">Target ${state.target} Tidak Ditemukan!</span>`;
      } else {
        elCompEvaluation.textContent = `a[${step.currIndex}] (${step.currVal}) ≠ ${state.target} ➜ Lanjut periksa indeks [${step.currIndex + 1}]`;
      }
    }

    // Status Banner
    elStatusPulse.className = 'pulse-indicator';
    if (step.status === 'found') {
      elStatusPulse.classList.add('found');
      elStatusMessage.innerHTML = `<strong style="color:var(--emerald);">✓ ${step.actionTitle}</strong>`;
    } else if (step.status === 'not_found') {
      elStatusPulse.classList.add('missed');
      elStatusMessage.innerHTML = `<strong style="color:var(--rose);">✗ ${step.actionTitle}</strong>`;
    } else if (step.stepNumber > 0) {
      if (state.currentAlgo === 'linear') {
        elStatusPulse.classList.add('scanning');
      } else {
        elStatusPulse.classList.add('searching');
      }
      elStatusMessage.innerHTML = `<span>Langkah ${step.stepNumber}: ${step.actionTitle}</span>`;
    } else {
      elStatusMessage.textContent = step.actionDesc;
    }

    // Progress
    elCurrentStepText.textContent = step.stepNumber;
    const maxSteps = Math.max(1, state.steps.length - 1);
    elTotalStepsText.textContent = maxSteps;
    const pct = Math.round((state.currentStepIndex / maxSteps) * 100);
    elProgressPercent.textContent = `${pct}%`;
    elProgressFill.style.width = `${pct}%`;

    elBtnFirst.disabled = state.currentStepIndex === 0;
    elBtnPrev.disabled = state.currentStepIndex === 0;
    elBtnNext.disabled = state.currentStepIndex === state.steps.length - 1;
    elBtnLast.disabled = state.currentStepIndex === state.steps.length - 1;

    updateTraceTableHighlight(step.stepNumber);
    highlightCodeLine(step.activeCodeRole);
    elExpStepTitle.textContent = step.actionTitle;
    elExpStepText.textContent = step.actionDesc;

    if (step.status === 'found') {
      playSoundFound();
      triggerConfetti();
    } else if (step.status === 'not_found') {
      playSoundMiss();
    } else if (step.stepNumber > 0) {
      playSoundStep();
    }
  }

  // --- RENDER DUEL ARENA STEP ---
  function renderDuelStep() {
    if (state.currentAlgo !== 'compare') return;

    const duelObj = state.duelSteps[state.currentDuelStepIndex];
    if (!duelObj) return;

    const bStep = duelObj.binStep;
    const lStep = duelObj.linStep;

    // 1. Render Linear Search Lane
    const lCells = elDuelLinearViewport.querySelectorAll('.array-cell');
    lCells.forEach((cell, idx) => {
      cell.classList.remove('is-scanning', 'is-checked-miss', 'is-found');
      if (lStep.checkedIndices && lStep.checkedIndices.includes(idx)) {
        cell.classList.add('is-checked-miss');
      }
      if (idx === lStep.currIndex) {
        cell.classList.remove('is-checked-miss');
        if (lStep.status === 'found') {
          cell.classList.add('is-found');
        } else {
          cell.classList.add('is-scanning');
        }
      }
    });

    positionPointerElement(elDuelPointerLinear, lStep.currIndex, elDuelPointerLinearIdx, 'duel-lin');
    elDuelLinearMiniLog.textContent = lStep.actionTitle;

    // 2. Render Binary Search Lane
    const bCells = elDuelBinaryViewport.querySelectorAll('.array-cell');
    bCells.forEach((cell, idx) => {
      cell.classList.remove('active', 'is-mid', 'is-found', 'eliminated');
      if (bStep.eliminatedIndices && bStep.eliminatedIndices.includes(idx)) {
        cell.classList.add('eliminated');
      }
      if (bStep.lo <= bStep.hi && idx >= bStep.lo && idx <= bStep.hi) {
        cell.classList.add('active');
      }
      if (idx === bStep.mid) {
        cell.classList.add('is-mid');
      }
      if (bStep.status === 'found' && idx === bStep.mid) {
        cell.classList.remove('is-mid');
        cell.classList.add('is-found');
      }
    });

    const validLo = bStep.lo >= 0 && bStep.lo < state.array.length ? bStep.lo : -1;
    const validHi = bStep.hi >= 0 && bStep.hi < state.array.length ? bStep.hi : -1;
    positionPointerElement(elDuelPointerLo, validLo, elDuelPointerLoIdx, 'duel-bin');
    positionPointerElement(elDuelPointerHi, validHi, elDuelPointerHiIdx, 'duel-bin');
    positionPointerElement(elDuelPointerMid, bStep.mid, elDuelPointerMidIdx, 'duel-bin');
    elDuelBinaryMiniLog.textContent = bStep.actionTitle;

    // 3. Scoreboard Updates
    elDuelLinearStepsCount.textContent = lStep.stepNumber;
    elDuelBinaryStepsCount.textContent = bStep.stepNumber;

    const scoreCardLinear = document.querySelector('.score-card.score-linear');
    const scoreCardBinary = document.querySelector('.score-card.score-binary');
    scoreCardLinear.classList.remove('winner');
    scoreCardBinary.classList.remove('winner');

    if (bStep.status === 'found') {
      elDuelBinaryStatus.textContent = '🏆 Ditemukan! (Selesai)';
      scoreCardBinary.classList.add('winner');
    } else if (bStep.status === 'not_found') {
      elDuelBinaryStatus.textContent = '✗ Tidak Ada (Selesai)';
    } else {
      elDuelBinaryStatus.textContent = `Langkah ${bStep.stepNumber}...`;
    }

    if (lStep.status === 'found') {
      elDuelLinearStatus.textContent = '✓ Ditemukan! (Selesai)';
      if (bStep.status !== 'found') {
        scoreCardLinear.classList.add('winner');
      }
    } else if (lStep.status === 'not_found') {
      elDuelLinearStatus.textContent = '✗ Tidak Ada (Selesai)';
    } else {
      elDuelLinearStatus.textContent = `Langkah ${lStep.stepNumber}...`;
    }

    // 4. Comparison Ratio Bars
    const maxSteps = Math.max(1, state.duelSteps.length - 1);
    elDuelCurrentStepText.textContent = duelObj.tick;
    elDuelTotalStepsText.textContent = maxSteps;
    const pct = Math.round((state.currentDuelStepIndex / maxSteps) * 100);
    elDuelProgressPercent.textContent = `${pct}%`;
    elDuelProgressFill.style.width = `${pct}%`;

    const totalCalculated = Math.max(1, lStep.stepNumber + bStep.stepNumber);
    const binShare = Math.round((bStep.stepNumber / totalCalculated) * 100);
    const linShare = 100 - binShare;
    elMetricBarBinary.style.width = `${binShare}%`;
    elMetricBarBinary.textContent = `Binary: ${bStep.stepNumber} langkah (${binShare}%)`;
    elMetricBarLinear.style.width = `${linShare}%`;
    elMetricBarLinear.textContent = `Linear: ${lStep.stepNumber} langkah (${linShare}%)`;

    // Verdict text
    if (bStep.status === 'found' && lStep.status !== 'found') {
      elDuelEfficiencyVerdict.innerHTML = `<span style="color:var(--emerald);">🏆 Binary Search SELESAI LEBIH DULU pada langkah ke-${bStep.stepNumber}! Linear Search masih di langkah ke-${lStep.stepNumber}.</span>`;
    } else if (bStep.status === 'found' && lStep.status === 'found') {
      const diff = lStep.stepNumber - bStep.stepNumber;
      if (diff > 0) {
        const savings = Math.round((diff / lStep.stepNumber) * 100);
        elDuelEfficiencyVerdict.innerHTML = `<span style="color:var(--emerald);">Binary Search lebih hemat ${diff} langkah (${savings}% penghematan komputasi)!</span>`;
      } else if (diff === 0) {
        elDuelEfficiencyVerdict.innerHTML = `<span>Kedua algoritma sama-sama selesai dalam ${bStep.stepNumber} langkah.</span>`;
      } else {
        elDuelEfficiencyVerdict.innerHTML = `<span style="color:var(--amber);">Linear Search selesai lebih dulu (karena target berada di awal array).</span>`;
      }
    } else {
      elDuelEfficiencyVerdict.textContent = duelObj.note;
    }

    // 5. Highlight Table Row
    const duelRows = elDuelTableBody.querySelectorAll('tr');
    duelRows.forEach((r) => {
      r.classList.remove('active-row', 'found-row');
      const tick = parseInt(r.dataset.tick, 10);
      if (tick === duelObj.tick) {
        r.classList.add('active-row');
        r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // 6. Duel Buttons
    elBtnDuelFirst.disabled = state.currentDuelStepIndex === 0;
    elBtnDuelPrev.disabled = state.currentDuelStepIndex === 0;
    elBtnDuelNext.disabled = state.currentDuelStepIndex === state.duelSteps.length - 1;
    elBtnDuelLast.disabled = state.currentDuelStepIndex === state.duelSteps.length - 1;

    // Sound FX
    if (bStep.status === 'found' && duelObj.tick === bStep.stepNumber) {
      playSoundFound();
      triggerConfetti();
    } else if (duelObj.tick > 0) {
      playSoundStep();
    }
  }

  // --- RENDER DUEL HEAD-TO-HEAD TABLE ---
  function renderDuelTable() {
    elDuelTableBody.innerHTML = '';
    state.duelSteps.forEach((d) => {
      if (d.tick === 0) return; // skip initial prep row
      const row = document.createElement('tr');
      row.dataset.tick = d.tick;

      const tdTick = document.createElement('td');
      tdTick.innerHTML = `<span class="cell-pill cyan">Tahap ${d.tick}</span>`;

      const tdLin = document.createElement('td');
      if (d.linStep.currIndex !== -1) {
        tdLin.innerHTML = `Periksa <code>a[${d.linStep.currIndex}] = ${d.linStep.currVal}</code> vs ${state.target}`;
      } else {
        tdLin.textContent = d.linStep.decisionText;
      }

      const tdLinStatus = document.createElement('td');
      if (d.linStep.status === 'found') {
        tdLinStatus.innerHTML = `<span class="cell-pill green">✓ Ditemukan</span>`;
      } else if (d.linStep.status === 'not_found') {
        tdLinStatus.innerHTML = `<span class="cell-pill rose">✗ Nihil</span>`;
      } else {
        tdLinStatus.innerHTML = `<span class="cell-pill amber">Memindai</span>`;
      }

      const tdBin = document.createElement('td');
      if (d.binStep.mid !== -1) {
        tdBin.innerHTML = `<code>[${d.binStep.lo}..${d.binStep.hi}]</code> ➜ Mid <code>a[${d.binStep.mid}] = ${d.binStep.midVal}</code>`;
      } else {
        tdBin.textContent = d.binStep.decisionText;
      }

      const tdBinStatus = document.createElement('td');
      if (d.binStep.status === 'found') {
        tdBinStatus.innerHTML = `<span class="cell-pill green">✓ Ditemukan</span>`;
      } else if (d.binStep.status === 'not_found') {
        tdBinStatus.innerHTML = `<span class="cell-pill rose">✗ Nihil</span>`;
      } else {
        tdBinStatus.innerHTML = `<span class="cell-pill purple">Bagi Dua</span>`;
      }

      const tdAdvantage = document.createElement('td');
      if (d.binStep.status === 'found' && d.linStep.status !== 'found') {
        tdAdvantage.innerHTML = `<strong style="color:var(--emerald);">⚡ Binary Menang! (Selesai duluan)</strong>`;
      } else if (d.binStep.status === 'found' && d.linStep.status === 'found') {
        tdAdvantage.textContent = 'Keduanya selesai';
      } else {
        tdAdvantage.innerHTML = `Binary telah memangkas ${state.array.length - d.binStep.remainingCount} data`;
      }

      row.appendChild(tdTick);
      row.appendChild(tdLin);
      row.appendChild(tdLinStatus);
      row.appendChild(tdBin);
      row.appendChild(tdBinStatus);
      row.appendChild(tdAdvantage);

      row.addEventListener('click', () => jumpDuelStep(d.tick));
      elDuelTableBody.appendChild(row);
    });
  }

  // --- DUEL PLAYBACK CONTROLS ---
  function jumpDuelStep(tick) {
    pauseDuelPlayback();
    if (tick < 0) tick = 0;
    if (tick >= state.duelSteps.length) tick = state.duelSteps.length - 1;
    state.currentDuelStepIndex = tick;
    renderDuelStep();
  }

  function stepDuelNext() {
    if (state.currentDuelStepIndex < state.duelSteps.length - 1) {
      state.currentDuelStepIndex++;
      renderDuelStep();
      return true;
    } else {
      pauseDuelPlayback();
      return false;
    }
  }

  function stepDuelPrev() {
    pauseDuelPlayback();
    if (state.currentDuelStepIndex > 0) {
      state.currentDuelStepIndex--;
      renderDuelStep();
    }
  }

  function startDuelPlayback() {
    if (state.isDuelPlaying) return;
    if (state.currentDuelStepIndex >= state.duelSteps.length - 1) {
      state.currentDuelStepIndex = 0;
      renderDuelStep();
    }

    state.isDuelPlaying = true;
    elDuelPlayIcon.textContent = '⏸';
    elDuelPlayText.textContent = 'Jeda Balapan';
    elBtnDuelPlay.classList.add('playing');

    const intervalTime = Math.max(250, 1500 / state.speed);
    state.duelPlayTimer = setInterval(() => {
      const hasMore = stepDuelNext();
      if (!hasMore) pauseDuelPlayback();
    }, intervalTime);
  }

  function pauseDuelPlayback() {
    state.isDuelPlaying = false;
    clearInterval(state.duelPlayTimer);
    state.duelPlayTimer = null;
    elDuelPlayIcon.textContent = '▶';
    elDuelPlayText.textContent = 'Lanjutkan Balapan';
    elBtnDuelPlay.classList.remove('playing');
  }

  function toggleDuelPlayback() {
    if (state.isDuelPlaying) {
      pauseDuelPlayback();
    } else {
      startDuelPlayback();
    }
  }

  function resetDuelPlayback() {
    pauseDuelPlayback();
    state.currentDuelStepIndex = 0;
    renderDuelStep();
  }

  // --- SINGLE-VIEW PLAYBACK CONTROLS ---
  function jumpToStep(stepIdx) {
    pausePlayback();
    if (stepIdx < 0) stepIdx = 0;
    if (stepIdx >= state.steps.length) stepIdx = state.steps.length - 1;
    state.currentStepIndex = stepIdx;
    renderCurrentStep();
  }

  function stepNext() {
    if (state.currentStepIndex < state.steps.length - 1) {
      state.currentStepIndex++;
      renderCurrentStep();
      return true;
    } else {
      pausePlayback();
      return false;
    }
  }

  function stepPrev() {
    pausePlayback();
    if (state.currentStepIndex > 0) {
      state.currentStepIndex--;
      renderCurrentStep();
    }
  }

  function startPlayback() {
    if (state.isPlaying) return;
    if (state.currentStepIndex >= state.steps.length - 1) {
      state.currentStepIndex = 0;
      renderCurrentStep();
    }

    state.isPlaying = true;
    elPlayIcon.textContent = '⏸';
    elPlayText.textContent = 'Jeda';
    elBtnPlay.classList.add('playing');

    const intervalTime = Math.max(250, 1500 / state.speed);
    state.playTimer = setInterval(() => {
      const hasMore = stepNext();
      if (!hasMore) pausePlayback();
    }, intervalTime);
  }

  function pausePlayback() {
    state.isPlaying = false;
    clearInterval(state.playTimer);
    state.playTimer = null;
    elPlayIcon.textContent = '▶';
    elPlayText.textContent = 'Putar';
    elBtnPlay.classList.remove('playing');
  }

  function togglePlayback() {
    if (state.isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  }

  function resetPlayback() {
    pausePlayback();
    state.currentStepIndex = 0;
    renderCurrentStep();
  }

  // --- RECALCULATE SEARCH / DUEL ---
  function reinitializeSearch() {
    pausePlayback();
    pauseDuelPlayback();

    if (state.currentAlgo === 'binary') {
      state.steps = generateBinarySearchSteps(state.array, state.target);
      state.currentStepIndex = 0;
      elArrayViewport.innerHTML = '';
      elArrayViewport.appendChild(createArrayDOM(state.array, 'cell'));
      renderTraceTable();
      renderCurrentStep();
    } else if (state.currentAlgo === 'linear') {
      state.steps = generateLinearSearchSteps(state.array, state.target);
      state.currentStepIndex = 0;
      elArrayViewport.innerHTML = '';
      elArrayViewport.appendChild(createArrayDOM(state.array, 'cell'));
      renderTraceTable();
      renderCurrentStep();
    } else {
      // DUEL ARENA
      const duelResult = generateDuelSteps(state.array, state.target);
      state.duelSteps = duelResult.duelSteps;
      state.currentDuelStepIndex = 0;

      elDuelLinearViewport.innerHTML = '';
      elDuelLinearViewport.appendChild(createArrayDOM(state.array, 'duel-lin'));
      elDuelBinaryViewport.innerHTML = '';
      elDuelBinaryViewport.appendChild(createArrayDOM(state.array, 'duel-bin'));

      renderDuelTable();
      renderDuelStep();
    }

    setTimeout(() => {
      if (state.currentAlgo === 'compare') {
        renderDuelStep();
      } else {
        renderCurrentStep();
      }
    }, 40);
  }

  // --- SWITCH ALGORITHM ---
  function switchAlgorithm(newAlgo) {
    if (state.currentAlgo === newAlgo) return;
    pausePlayback();
    pauseDuelPlayback();
    state.currentAlgo = newAlgo;

    elAlgoTabBinary.classList.toggle('active', newAlgo === 'binary');
    elAlgoTabLinear.classList.toggle('active', newAlgo === 'linear');
    elAlgoTabCompare.classList.toggle('active', newAlgo === 'compare');

    if (newAlgo === 'binary') {
      elSingleAlgoContainer.classList.remove('hidden');
      elCompareArenaContainer.classList.add('hidden');
      elActiveAlgoBadge.textContent = 'Binary Search';
      elActiveAlgoBadge.style.color = 'var(--cyan)';
      elAlgoLogoIcon.textContent = '⚡';
      elTimeComplexityText.textContent = 'O(log n)';
      elSpaceComplexityText.textContent = 'O(1)';
      elModalHintText.textContent = 'Binary Search memerlukan data terurut (akan otomatis disortir).';
      state.array = [...PRESETS.binary.default];
      state.target = 56;
    } else if (newAlgo === 'linear') {
      elSingleAlgoContainer.classList.remove('hidden');
      elCompareArenaContainer.classList.add('hidden');
      elActiveAlgoBadge.textContent = 'Linear Search';
      elActiveAlgoBadge.style.color = 'var(--amber)';
      elAlgoLogoIcon.textContent = '🔎';
      elTimeComplexityText.textContent = 'O(n)';
      elSpaceComplexityText.textContent = 'O(1)';
      elModalHintText.textContent = 'Linear Search dapat mencari pada data acak maupun terurut.';
      state.array = [...PRESETS.linear.unsorted_default];
      state.target = 56;
    } else {
      // Compare Arena
      elSingleAlgoContainer.classList.add('hidden');
      elCompareArenaContainer.classList.remove('hidden');
      elActiveAlgoBadge.textContent = 'Komparasi Duel Arena';
      elActiveAlgoBadge.style.color = 'var(--rose)';
      elAlgoLogoIcon.textContent = '⚔️';
      elTimeComplexityText.textContent = 'O(log n) vs O(n)';
      elSpaceComplexityText.textContent = 'O(1)';
      elModalHintText.textContent = 'Komparasi duel dijalankan pada data terurut agar kedua algoritma dapat diuji secara adil.';
      state.array = [...PRESETS.compare.default];
      state.target = 56;
    }

    elTargetInput.value = state.target;
    elSizeSlider.value = state.array.length;
    elSizeDisplay.textContent = state.array.length;

    updatePresetDropdown();
    updateVisualLegend();
    updateEducationCards();
    renderCodeBlock();
    reinitializeSearch();
  }

  function setTargetValue(newTarget) {
    if (isNaN(newTarget)) return;
    state.target = newTarget;
    elTargetInput.value = newTarget;
    reinitializeSearch();
  }

  function setArrayData(newArr) {
    if (!Array.isArray(newArr) || newArr.length < 3) return;
    if (state.currentAlgo === 'binary' || state.currentAlgo === 'compare') {
      newArr.sort((a, b) => a - b);
    }
    state.array = newArr;
    elSizeSlider.value = newArr.length;
    elSizeDisplay.textContent = newArr.length;
    reinitializeSearch();
  }

  function generateRandomArray(size = 14) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
      const n = Math.floor(Math.random() * 95) + 3;
      numbers.push(n);
    }

    if (state.currentAlgo === 'binary' || state.currentAlgo === 'compare') {
      const uniqueSorted = Array.from(new Set(numbers)).sort((a, b) => a - b);
      state.array = uniqueSorted;
    } else {
      state.array = numbers;
    }

    if (Math.random() < 0.75) {
      state.target = state.array[Math.floor(Math.random() * state.array.length)];
    } else {
      state.target = Math.floor(Math.random() * 95) + 3;
    }

    elTargetInput.value = state.target;
    elSizeSlider.value = state.array.length;
    elSizeDisplay.textContent = state.array.length;
    reinitializeSearch();
  }

  // --- EXPORT TOOLS ---
  function exportTraceTableToCSV() {
    const steps = state.steps.filter((s) => s.stepNumber > 0);
    if (!steps.length) return;

    let csvContent = 'data:text/csv;charset=utf-8,';
    if (state.currentAlgo === 'binary') {
      csvContent += 'Iterasi,Rentang lo-hi,Rumus Mid,a[mid],Perbandingan,Keputusan,Sisa Elemen\n';
      steps.forEach((s) => {
        const row = [
          `"Iterasi ${s.stepNumber}"`,
          `"[${s.lo} .. ${s.hi}]"`,
          `"${s.formulaText || ''}"`,
          `"${s.midVal !== null ? s.midVal : ''}"`,
          `"${s.comparisonText || ''}"`,
          `"${s.decisionText || ''}"`,
          `"${s.remainingCount} data"`
        ];
        csvContent += row.join(',') + '\n';
      });
    } else {
      csvContent += 'Langkah,Indeks i,Nilai a[i],Perbandingan,Hasil Keputusan,Sisa Belum Diperiksa\n';
      steps.forEach((s) => {
        const row = [
          `"Langkah ${s.stepNumber}"`,
          `"Indeks [${s.currIndex}]"`,
          `"${s.currVal !== null ? s.currVal : ''}"`,
          `"${s.comparisonText || ''}"`,
          `"${s.decisionText || ''}"`,
          `"${s.remainingCount} data"`
        ];
        csvContent += row.join(',') + '\n';
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `trace_${state.currentAlgo}_search_target_${state.target}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function copyTraceTableToClipboard() {
    const steps = state.steps.filter((s) => s.stepNumber > 0);
    if (!steps.length) return;

    let text = `TABEL TRACE ${state.currentAlgo.toUpperCase()} SEARCH (Target: ${state.target})\n`;
    text += `Array: [${state.array.join(', ')}]\n\n`;

    if (state.currentAlgo === 'binary') {
      text += `Iterasi | Rentang | Rumus Mid | a[mid] | Perbandingan | Keputusan | Sisa\n`;
      text += `--------------------------------------------------------------------------------\n`;
      steps.forEach((s) => {
        text += `${s.stepNumber} | [${s.lo}..${s.hi}] | ${s.formulaText} | ${s.midVal !== null ? s.midVal : '-'} | ${s.comparisonText} | ${s.decisionText} | ${s.remainingCount}\n`;
      });
    } else {
      text += `Langkah | Indeks | Nilai a[i] | Perbandingan | Keputusan | Sisa\n`;
      text += `--------------------------------------------------------------------------------\n`;
      steps.forEach((s) => {
        text += `${s.stepNumber} | [${s.currIndex}] | ${s.currVal !== null ? s.currVal : '-'} | ${s.comparisonText} | ${s.decisionText} | ${s.remainingCount}\n`;
      });
    }

    navigator.clipboard.writeText(text).then(() => {
      const originalText = elBtnCopyTable.innerHTML;
      elBtnCopyTable.innerHTML = '<span>✓ Tersalin!</span>';
      setTimeout(() => {
        elBtnCopyTable.innerHTML = originalText;
      }, 1800);
    }).catch(() => {
      alert('Gagal menyalin tabel ke clipboard.');
    });
  }

  function exportDuelTableToCSV() {
    if (!state.duelSteps.length) return;
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Tahap,Linear Pemeriksaan,Status Linear,Binary Jangkauan & Mid,Status Binary,Catatan Komparasi\n';

    state.duelSteps.forEach((d) => {
      if (d.tick === 0) return;
      const lText = d.linStep.currIndex !== -1 ? `a[${d.linStep.currIndex}]=${d.linStep.currVal}` : 'Selesai';
      const bText = d.binStep.mid !== -1 ? `[${d.binStep.lo}..${d.binStep.hi}] mid=${d.binStep.midVal}` : 'Selesai';
      const row = [
        `"Tahap ${d.tick}"`,
        `"${lText}"`,
        `"${d.linStep.status}"`,
        `"${bText}"`,
        `"${d.binStep.status}"`,
        `"${d.note}"`
      ];
      csvContent += row.join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `komparasi_duel_linear_vs_binary_target_${state.target}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function copyDuelTableToClipboard() {
    if (!state.duelSteps.length) return;
    let text = `KOMPARASI DUEL: LINEAR SEARCH VS BINARY SEARCH (Target: ${state.target})\n`;
    text += `Array: [${state.array.join(', ')}]\n\n`;
    text += `Tahap | Linear Search | Status Lin | Binary Search | Status Bin | Catatan Komparasi\n`;
    text += `----------------------------------------------------------------------------------------------------\n`;

    state.duelSteps.forEach((d) => {
      if (d.tick === 0) return;
      const lText = d.linStep.currIndex !== -1 ? `a[${d.linStep.currIndex}]=${d.linStep.currVal}` : 'Selesai';
      const bText = d.binStep.mid !== -1 ? `[${d.binStep.lo}..${d.binStep.hi}] mid=${d.binStep.midVal}` : 'Selesai';
      text += `${d.tick} | ${lText} | ${d.linStep.status} | ${bText} | ${d.binStep.status} | ${d.note}\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      const originalText = elBtnCopyDuelTable.innerHTML;
      elBtnCopyDuelTable.innerHTML = '<span>✓ Tersalin!</span>';
      setTimeout(() => {
        elBtnCopyDuelTable.innerHTML = originalText;
      }, 1800);
    }).catch(() => {
      alert('Gagal menyalin tabel ke clipboard.');
    });
  }

  // --- EVENT LISTENERS ---
  elAlgoTabBinary.addEventListener('click', () => switchAlgorithm('binary'));
  elAlgoTabLinear.addEventListener('click', () => switchAlgorithm('linear'));
  elAlgoTabCompare.addEventListener('click', () => switchAlgorithm('compare'));

  elBtnSearch.addEventListener('click', () => {
    const val = parseInt(elTargetInput.value, 10);
    if (!isNaN(val)) setTargetValue(val);
  });

  elTargetInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = parseInt(elTargetInput.value, 10);
      if (!isNaN(val)) setTargetValue(val);
    }
  });

  elPresetSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    const currentGroup = state.currentAlgo === 'compare' ? 'compare' : state.currentAlgo;
    if (val === 'custom') {
      elCustomModal.classList.remove('hidden');
      elCustomArrayInput.focus();
    } else if (PRESETS[currentGroup] && PRESETS[currentGroup][val]) {
      setArrayData([...PRESETS[currentGroup][val]]);
    }
  });

  elBtnRandom.addEventListener('click', () => {
    const size = parseInt(elSizeSlider.value, 10) || 14;
    generateRandomArray(size);
  });

  elSizeSlider.addEventListener('input', (e) => {
    const newSize = parseInt(e.target.value, 10);
    elSizeDisplay.textContent = newSize;
    generateRandomArray(newSize);
  });

  // Single-View Playback
  elBtnPlay.addEventListener('click', togglePlayback);
  elBtnNext.addEventListener('click', () => {
    pausePlayback();
    stepNext();
  });
  elBtnPrev.addEventListener('click', stepPrev);
  elBtnFirst.addEventListener('click', () => jumpToStep(0));
  elBtnLast.addEventListener('click', () => jumpToStep(state.steps.length - 1));
  elBtnReset.addEventListener('click', resetPlayback);

  // Duel-View Playback
  elBtnDuelPlay.addEventListener('click', toggleDuelPlayback);
  elBtnDuelNext.addEventListener('click', () => {
    pauseDuelPlayback();
    stepDuelNext();
  });
  elBtnDuelPrev.addEventListener('click', stepDuelPrev);
  elBtnDuelFirst.addEventListener('click', () => jumpDuelStep(0));
  elBtnDuelLast.addEventListener('click', () => jumpDuelStep(state.duelSteps.length - 1));
  elBtnDuelReset.addEventListener('click', resetDuelPlayback);

  // Speeds
  elSpeedSelect.addEventListener('change', (e) => {
    state.speed = parseFloat(e.target.value) || 1.0;
    if (state.isPlaying) {
      pausePlayback();
      startPlayback();
    }
  });

  elDuelSpeedSelect.addEventListener('change', (e) => {
    state.speed = parseFloat(e.target.value) || 1.0;
    if (state.isDuelPlaying) {
      pauseDuelPlayback();
      startDuelPlayback();
    }
  });

  // Exports
  elBtnCopyTable.addEventListener('click', copyTraceTableToClipboard);
  elBtnExportCsv.addEventListener('click', exportTraceTableToCSV);
  elBtnCopyDuelTable.addEventListener('click', copyDuelTableToClipboard);
  elBtnExportDuelCsv.addEventListener('click', exportDuelTableToCSV);

  // Toggles
  elSoundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elSoundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    elSoundToggle.classList.toggle('muted', !state.soundEnabled);
  });

  elThemeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.body.className = `theme-${state.theme}`;
    elThemeIcon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  });

  elLangTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.lang-tab');
    if (!tab) return;
    elLangTabs.querySelectorAll('.lang-tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    state.currentLang = tab.dataset.lang;
    renderCodeBlock();
    const currentStep = state.steps[state.currentStepIndex];
    if (currentStep) highlightCodeLine(currentStep.activeCodeRole);
  });

  elBtnCloseModal.addEventListener('click', () => elCustomModal.classList.add('hidden'));
  elBtnCancelCustom.addEventListener('click', () => elCustomModal.classList.add('hidden'));

  elBtnApplyCustom.addEventListener('click', () => {
    const text = elCustomArrayInput.value.trim();
    if (!text) return;
    const parts = text.split(/[\s,]+/).map((s) => parseInt(s, 10)).filter((n) => !isNaN(n));
    if (parts.length < 3) {
      alert('Mohon masukkan minimal 3 angka valid.');
      return;
    }
    elCustomModal.classList.add('hidden');
    setArrayData(parts);
  });

  window.addEventListener('resize', () => {
    if (state.currentAlgo === 'compare') {
      renderDuelStep();
    } else {
      renderCurrentStep();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (state.currentAlgo === 'compare') {
        toggleDuelPlayback();
      } else {
        togglePlayback();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (state.currentAlgo === 'compare') {
        pauseDuelPlayback();
        stepDuelNext();
      } else {
        pausePlayback();
        stepNext();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (state.currentAlgo === 'compare') {
        pauseDuelPlayback();
        stepDuelPrev();
      } else {
        pausePlayback();
        stepPrev();
      }
    } else if (e.key === 'r' || e.key === 'R') {
      if (state.currentAlgo === 'compare') {
        resetDuelPlayback();
      } else {
        resetPlayback();
      }
    }
  });

  // --- INITIALIZATION ---
  updatePresetDropdown();
  updateVisualLegend();
  updateEducationCards();
  renderCodeBlock();
  reinitializeSearch();

})();
