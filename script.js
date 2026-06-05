const translations = {
    ar: {
        direction: 'rtl',
        langName: 'العربية',
        nav: { home: 'الرئيسية', lessons: 'الدروس', grammar: 'النحو', texts: 'النصوص' },
        hero: { title: 'تعلم اللغة العربية', subtitle: 'منصة تعليمية ذكية وشاملة للطلاب والمعلمين' },
        lesson: {
            title: 'الدرس الأول: التحية والتعارف', subtitle: 'محادثة بسيطة بين شخصين', playAudio: 'استمع للدرس', presentation: 'وضع العرض',
            prev: 'الدرس السابق', next: 'الدرس التالي'
        },
        gamification: { level: 'مستوى التقدم', points: 'نقطة', badges: 'الأوسمة المفتوحة', complete: 'أنهيت قراءة هذا الدرس!' },
        keyboard: { title: 'لوحة المفاتيح العربية الافتراضية', subtitle: 'تدرب على الكتابة بوضوح', backspace: 'حذف', space: 'مسافة' },
        rootFinder: { title: 'باحث الجذور العربية', subtitle: 'استكشف أصل الكلمات واشتقاقاتها', explore: 'استكشاف', notFound: 'عذراً، هذه الكلمة غير موجودة.', rootTitle: 'الجذر الثلاثي', relatedTitle: 'كلمات ذات صلة:' },
        tashkeel: { title: 'مصحح التشكيل الذكي', subtitle: 'ضبط النصوص العربية بالحركات بدقة عالية', add: 'إضافة التشكيل الآلي', copy: 'نسخ النص المشكّل' },
        quiz: { title: 'مولد الاختبارات النحوية', subtitle: 'حول النص إلى اختبار تفاعلي', generate: 'توليد الاختبار الآن', questions: 'الأسئلة:', score: 'النتيجة:', new: 'إنشاء اختبار جديد' },
        dictionary: { title: 'القاموس الذكي', subtitle: 'ابحث عن أي كلمة عربية لمعرفة معناها وإعرابها' },
        footer: { copyright: '© 2026 منصة تعلم اللغة العربية. جميع الحقوق محفوظة.' }
    },
    en: {
        direction: 'ltr',
        langName: 'English',
        nav: { home: 'Home', lessons: 'Lessons', grammar: 'Grammar', texts: 'Texts' },
        hero: { title: 'Learn Arabic', subtitle: 'Smart and comprehensive platform for students and teachers' },
        lesson: { title: 'Lesson', subtitle: 'Interactive learning', playAudio: 'Listen', presentation: 'Presentation', prev: 'Previous', next: 'Next' },
        gamification: { level: 'Progress Level', points: 'Points', badges: 'Unlocked Badges', complete: 'I finished this lesson!' },
        keyboard: { title: 'Virtual Keyboard', subtitle: 'Practice typing clearly', backspace: 'Backspace', space: 'Space' },
        rootFinder: { title: 'Arabic Root Finder', subtitle: 'Explore word origins', explore: 'Explore', notFound: 'Word not found.', rootTitle: 'Root', relatedTitle: 'Related Words:' },
        tashkeel: { title: 'Smart Tashkeel Tool', subtitle: 'Accurate text vocalization', add: 'Auto-Tashkeel', copy: 'Copy Text' },
        quiz: { title: 'Quiz Generator', subtitle: 'Turn text into a quiz', generate: 'Generate Quiz', questions: 'Questions:', score: 'Score:', new: 'New Quiz' },
        dictionary: { title: 'Smart Dictionary', subtitle: 'Search any Arabic word for meaning' },
        footer: { copyright: '© 2026 Arabic Learning Platform.' }
    }
};

let currentLang = localStorage.getItem('language') || 'ar';
let currentLessonIdx = 0;

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const pointsDisplay = document.getElementById('pointsDisplay');
const badgeContainer = document.getElementById('badgeContainer');
const completeBtn = document.getElementById('completeBtn');
const tooltip = document.getElementById('dictionaryTooltip');
const tooltipContent = document.getElementById('tooltipContent');
const keyboardGrid = document.getElementById('keyboardGrid');
const keyboardInput = document.getElementById('keyboardInput');
const startPresentationBtn = document.getElementById('startPresentationBtn');
const exitPresentationBtn = document.getElementById('exitPresentationBtn');
const dictSearchInput = document.getElementById('dictionarySearchInput');
const dictResultArea = document.getElementById('dictionaryResultArea');

const BADGES = [
    { id: 'beginner', name: '🌱 المبتدئ', threshold: 10 },
    { id: 'reader', name: '📖 القارئ', threshold: 30 },
    { id: 'hero', name: '🔥 البطل', threshold: 50 },
    { id: 'master', name: '👑 الأستاذ', threshold: 100 }
];

let gameState = {
    points: parseInt(localStorage.getItem('student_points')) || 0,
    badges: JSON.parse(localStorage.getItem('student_badges')) || []
};

// --- Core Initialization ---

function initPdfViewer() {
    const togglePdfBtn = document.getElementById('togglePdfBtn');
    const closePdfBtn = document.getElementById('closePdfBtn');
    const pdfSection = document.getElementById('pdfSection');

    if (togglePdfBtn && pdfSection) {
        togglePdfBtn.onclick = () => {
            pdfSection.classList.toggle('hidden');
            if (!pdfSection.classList.contains('hidden')) {
                pdfSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }

    if (closePdfBtn && pdfSection) {
        closePdfBtn.onclick = () => {
            pdfSection.classList.add('hidden');
        };
    }
}

async function fetchSupabaseData() {
    // Priority: use local lessonsData if Supabase fails or is empty
    if (typeof lessonsData !== 'undefined' && lessonsData.length > 0) {
        window.lessonsData = lessonsData;
    }

    // Attempt to fetch from Supabase if configured
    try {
        const { data: lessons, error } = await _supabase.from('lessons').select('*').order('id', { ascending: true });
        if (!error && lessons && lessons.length > 0) {
            window.lessonsData = lessons.map(l => ({
                id: l.id,
                title: l.title_ar,
                subtitle: l.subtitle_ar || '',
                text_ar: l.text_ar,
                text_en: l.text_en,
                text_ru: l.text_ru,
                text_uz: l.text_uz,
                audio_url: l.audio_url,
                quiz: []
            }));
        }
    } catch (e) {
        console.log("Supabase fetch skipped or failed, using local data.");
    }
}

async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    const dir = (translations[lang] || translations['en']).direction;
    document.documentElement.setAttribute('dir', dir);
    if (currentLangSpan) currentLangSpan.textContent = (translations[lang] || translations['en']).langName;
    updateTranslations();
    if (window.lessonsData) loadLesson(currentLessonIdx);
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = translations[currentLang] || translations['en'];
        keys.forEach(k => val = val ? val[k] : null);
        if (val) el.textContent = val;
    });
}

// --- Lesson Logic ---

function loadLesson(idx) {
    if (!window.lessonsData || window.lessonsData.length === 0) return;
    const lesson = window.lessonsData[idx];
    if (!lesson) return;
    
    currentLessonIdx = idx;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonSubtitle').textContent = lesson.subtitle || (translations[currentLang] || translations['en']).lesson.subtitle;
    document.getElementById('currentLessonNum').textContent = idx + 1;
    
    // Update total count if needed
    const totalCountEl = document.querySelector('.lesson-nav-controls .text-gray-400');
    if (totalCountEl) {
        totalCountEl.innerHTML = `<span id="currentLessonNum">${idx + 1}</span> / ${window.lessonsData.length}`;
    }
    
    const content = document.getElementById('lessonContent');
    content.innerHTML = `
        <div class="lesson-item border-b border-gray-50 pb-8 last:border-0 fade-in">
            <p class="arabic-text text-4xl sm:text-5xl text-gray-800 mb-6 leading-[2.2] text-right" dir="rtl">
                ${wrapWords(lesson.text_ar)}
            </p>
            <p class="text-lg sm:text-xl text-gray-400 font-medium italic">
                ${lesson[`text_${currentLang}`] || lesson.text_en}
            </p>
        </div>
    `;

    document.getElementById('prevLessonBtn').disabled = (idx === 0);
    document.getElementById('nextLessonBtn').disabled = (idx === window.lessonsData.length - 1);
    
    initDictionary();
}

function wrapWords(text) {
    return text.split(/\s+/).map(word => {
        const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        const dictEntry = dictionaryData[clean] || null;
        if (dictEntry) {
            return `<span class="arabic-word" data-en="${dictEntry.en}" data-ru="${dictEntry.ru}" data-uz="${dictEntry.uz}">${word}</span>`;
        }
        return `<span>${word}</span>`;
    }).join(' ');
}

// --- Dictionary Logic ---

function initDictionary() {
    document.querySelectorAll('.arabic-word').forEach(word => {
        word.onclick = (e) => {
            e.stopPropagation();
            const translation = word.getAttribute(`data-${currentLang}`) || word.getAttribute('data-en');
            showTooltip(word, translation);
        };
    });
}

function showTooltip(el, text) {
    if (!tooltip) return;
    tooltipContent.textContent = text;
    tooltip.classList.remove('hidden');
    const rect = el.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 12}px`;
    tooltip.style.opacity = '1';
}

function hideTooltip() {
    if (tooltip) { tooltip.classList.add('hidden'); tooltip.style.opacity = '0'; }
}

// --- Dictionary Search ---

function initDictionarySearch() {
    if (!dictSearchInput) return;
    dictSearchInput.oninput = () => {
        const val = dictSearchInput.value.trim();
        const entry = dictionaryData[val];
        if (entry) {
            dictResultArea.classList.remove('hidden');
            document.getElementById('resultWord').textContent = val;
            document.getElementById('resultPos').textContent = entry.pos;
            document.getElementById('transEn').textContent = entry.en;
            document.getElementById('transRu').textContent = entry.ru;
            document.getElementById('transUz').textContent = entry.uz;
        } else {
            dictResultArea.classList.add('hidden');
        }
    };
}

// --- Virtual Keyboard ---

const ARABIC_CHARS = ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'];

function initKeyboard() {
    if (!keyboardGrid) return;
    keyboardGrid.innerHTML = '';
    ARABIC_CHARS.forEach(char => {
        const btn = document.createElement('button');
        btn.textContent = char;
        btn.className = 'arabic-text bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-2xl p-3 rounded-xl shadow-sm transition-all active:scale-90';
        btn.onclick = () => { if (keyboardInput) { keyboardInput.value += char; keyboardInput.focus(); } };
        keyboardGrid.appendChild(btn);
    });
    document.getElementById('keySpace').onclick = () => { if (keyboardInput) keyboardInput.value += ' '; };
    document.getElementById('keyBackspace').onclick = () => { if (keyboardInput) keyboardInput.value = keyboardInput.value.slice(0, -1); };
}

// --- Gamification ---

function updateGamification() {
    if (pointsDisplay) pointsDisplay.textContent = gameState.points;
    if (badgeContainer) {
        badgeContainer.innerHTML = '';
        BADGES.forEach(badge => {
            if (gameState.points >= badge.threshold) {
                const badgeEl = document.createElement('div');
                badgeEl.className = 'bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full text-xs font-bold badge-pop';
                badgeEl.textContent = badge.name;
                badgeContainer.appendChild(badgeEl);
            }
        });
    }
}

if (completeBtn) {
    completeBtn.onclick = () => {
        gameState.points += 10;
        localStorage.setItem('student_points', gameState.points);
        updateGamification();
    };
}

// --- Presentation Mode ---

function initPresentationMode() {
    if (!startPresentationBtn) return;
    startPresentationBtn.onclick = () => document.body.classList.add('presentation-active');
    exitPresentationBtn.onclick = () => document.body.classList.remove('presentation-active');
}

// --- Quiz Generator Module (Senior Implementation) ---

function initQuizGenerator() {
    const genBtn = document.getElementById('generateQuizBtn');
    const setupArea = document.getElementById('quizSetupArea');
    const displayArea = document.getElementById('quizDisplayArea');
    const container = document.getElementById('questionsContainer');
    const scoreVal = document.getElementById('currentScore');
    const totalVal = document.getElementById('totalQuestions');
    const resetBtn = document.getElementById('resetQuizBtn');

    if (!genBtn) return;

    genBtn.addEventListener('click', () => {
        // 1. Fetch current lesson's quiz data
        const quiz = window.lessonsData[currentLessonIdx].quiz;
        if (!quiz || quiz.length === 0) {
            alert("No quiz data available for this lesson.");
            return;
        }

        // 2. UI Reset & Prep
        let score = 0;
        scoreVal.textContent = "0";
        totalVal.textContent = quiz.length;
        container.innerHTML = '';
        
        setupArea.classList.add('hidden');
        displayArea.classList.remove('hidden');

        // 3. Dynamic Rendering
        quiz.forEach((item, qIdx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'p-6 bg-slate-50 rounded-3xl border border-slate-100 fade-in';
            
            qDiv.innerHTML = `
                <p class="arabic-text text-2xl font-bold text-slate-800 mb-6 flex items-start gap-4">
                    <span class="bg-orange-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-1">${qIdx + 1}</span>
                    ${item.q}
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${item.options.map((opt, oIdx) => `
                        <button 
                            onclick="handleQuizChoice(this, ${qIdx}, ${oIdx})" 
                            class="text-right p-5 rounded-2xl border-2 border-white bg-white hover:border-orange-200 transition-all font-medium text-slate-600 outline-none shadow-sm"
                        >
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            `;
            container.appendChild(qDiv);
        });

        // Global choice handler bound to window for inline onclick
        window.handleQuizChoice = (btn, qIndex, choiceIndex) => {
            const currentQuiz = window.lessonsData[currentLessonIdx].quiz;
            const correctIndex = currentQuiz[qIndex].correct;
            const parent = btn.closest('.grid');
            const buttons = parent.querySelectorAll('button');

            // Disable all options for this question
            buttons.forEach(b => b.disabled = true);

            if (choiceIndex === correctIndex) {
                // Correct Choice
                btn.classList.add('bg-green-100', 'border-green-500', 'text-green-700');
                score++;
                scoreVal.textContent = score;
            } else {
                // Incorrect Choice
                btn.classList.add('bg-red-100', 'border-red-500', 'text-red-700');
                // Highlight actual correct answer
                buttons[correctIndex].classList.add('bg-green-100', 'border-green-500', 'text-green-700');
            }
        };
    });

    if (resetBtn) {
        resetBtn.onclick = () => {
            displayArea.classList.add('hidden');
            setupArea.classList.remove('hidden');
        };
    }
}

// --- Initialization ---

async function init() {
    await fetchSupabaseData();
    await setLanguage(currentLang);
    updateGamification();
    initKeyboard();
    initDictionarySearch();
    initPresentationMode();
    initQuizGenerator();
    initPdfViewer();
    
    document.getElementById('prevLessonBtn').onclick = () => loadLesson(currentLessonIdx - 1);
    document.getElementById('nextLessonBtn').onclick = () => loadLesson(currentLessonIdx + 1);
}

if (langBtn) langBtn.onclick = (e) => { e.stopPropagation(); langDropdown.classList.toggle('hidden'); };
document.addEventListener('click', () => { if(langDropdown) langDropdown.classList.add('hidden'); hideTooltip(); });
document.querySelectorAll('.lang-option').forEach(opt => opt.onclick = () => setLanguage(opt.getAttribute('data-lang')));

window.onload = init;
