const translations = {
    ar: {
        direction: 'rtl',
        langName: 'العربية',
        nav: { home: 'الرئيسية', lessons: 'الدروس', grammar: 'النحو', texts: 'النصوص' },
        hero: { title: 'تعلم اللغة العربية', subtitle: 'منصة تعليمية ذكية وشاملة للطلاب والمعلمين' },
        lesson: {
            title: 'الدرس الأول: التحية والتعارف', subtitle: 'تعلم كيف تلقي التحية وتعرف بنفسك', playAudio: 'استمع للدرس', presentation: 'وضع العرض',
            p1: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ.',
            p2: 'اسْمِي مُحَمَّدٌ، أَنَا مِنَ مِصْرَ. مَا اسْمُكَ؟'
        },
        gamification: { level: 'مستوى التقدم', points: 'نقطة', badges: 'الأوسمة المفتوحة', complete: 'أنهيت قراءة هذا الدرس!' },
        keyboard: { title: 'لوحة المفاتيح العربية الافتراضية', subtitle: 'تدرب على الكتابة باللغة العربية بوضوح', backspace: 'حذف', space: 'مسافة' },
        rootFinder: { title: 'باحث الجذور العربية', subtitle: 'استكشف أصل الكلمات واشتقاقاتها اللغوية', explore: 'استكشاف', notFound: 'عذراً، هذه الكلمة غير موجودة.', rootTitle: 'الجذر الثلاثي', relatedTitle: 'كلمات ذات صلة:' },
        tashkeel: { title: 'مصحح التشكيل الذكي', subtitle: 'أداة المعلم لضبط النصوص العربية بالحركات بدقة عالية', add: 'إضافة التشكيل الآلي', copy: 'نسخ النص المشكّل' },
        quiz: { title: 'مولد الاختبارات النحوية', subtitle: 'حول أي نص إلى اختبار تفاعلي في ثوانٍ', generate: 'توليد الاختبار الآن', questions: 'الأسئلة:', score: 'النتيجة:', new: 'إنشاء اختبار جديد' },
        footer: { copyright: '© 2026 منصة تعلم اللغة العربية. جميع الحقوق محفوظة.' }
    },
    en: {
        direction: 'ltr',
        langName: 'English',
        nav: { home: 'Home', lessons: 'Lessons', grammar: 'Grammar', texts: 'Texts' },
        hero: { title: 'Learn Arabic', subtitle: 'Smart and comprehensive platform for students and teachers' },
        lesson: {
            title: 'Lesson 1: Greetings', subtitle: 'Learn how to greet and introduce yourself', playAudio: 'Listen', presentation: 'Presentation',
            p1: 'Peace be upon you...',
            p2: 'My name is Muhammad...'
        },
        gamification: { level: 'Progress Level', points: 'Points', badges: 'Unlocked Badges', complete: 'I finished this lesson!' },
        keyboard: { title: 'Virtual Keyboard', subtitle: 'Practice typing clearly', backspace: 'Backspace', space: 'Space' },
        rootFinder: { title: 'Arabic Root Finder', subtitle: 'Explore word origins and derivations', explore: 'Explore', notFound: 'Sorry, word not found.', rootTitle: 'Trilateral Root', relatedTitle: 'Related Words:' },
        tashkeel: { title: 'Smart Tashkeel Tool', subtitle: 'Teacher tool for accurate text vocalization', add: 'Auto-Tashkeel', copy: 'Copy Text' },
        quiz: { title: 'Grammar Quiz Generator', subtitle: 'Turn any text into an interactive quiz', generate: 'Generate Quiz', questions: 'Questions:', score: 'Score:', new: 'New Quiz' },
        footer: { copyright: '© 2026 Arabic Learning Platform.' }
    },
    ru: {
        direction: 'ltr',
        langName: 'Русский',
        nav: { home: 'Главная', lessons: 'Уроки', grammar: 'Грамматика', texts: 'Тексты' },
        hero: { title: 'Изучайте арабский', subtitle: 'Умная платформа для студентов и учителей' },
        lesson: {
            title: 'Урок 1: Приветствие', subtitle: 'Узнайте, как здороваться и представляться', playAudio: 'Слушать', presentation: 'Презентация',
            p1: 'Мир вам...',
            p2: 'Меня зовут Мухаммад...'
        },
        gamification: { level: 'Уровень прогресса', points: 'Очков', badges: 'Открытые значки', complete: 'Я закончил урок!' },
        keyboard: { title: 'Клавиатура', subtitle: 'Практика набора текста', backspace: 'Удалить', space: 'Пробел' },
        rootFinder: { title: 'Поиск корней', subtitle: 'Изучайте происхождение слов', explore: 'Исследовать', notFound: 'Слово не найдено.', rootTitle: 'Корень', relatedTitle: 'Родственные слова:' },
        tashkeel: { title: 'Авто-огласовка', subtitle: 'Инструмент для точной расстановки огласовок', add: 'Огласовать', copy: 'Копировать' },
        quiz: { title: 'Генератор тестов', subtitle: 'Превратите текст в интерактивный тест', generate: 'Создать тест', questions: 'Вопросы:', score: 'Счет:', new: 'Новый тест' },
        footer: { copyright: '© 2026 Платформа изучения арабского.' }
    },
    uz: {
        direction: 'ltr',
        langName: 'O\'zbek',
        nav: { home: 'Bosh sahifa', lessons: 'Darslar', grammar: 'Grammatika', texts: 'Matnlar' },
        hero: { title: 'Arab tilini o\'rganing', subtitle: 'Talabalar va o\'qituvchilar uchun aqlli platforma' },
        lesson: {
            title: '1-dars: Salomlashish', subtitle: 'Salomlashish va o\'zini tanishtirishni o\'rganing', playAudio: 'Tinglash', presentation: 'Taqdimot',
            p1: 'Sizga tinchlik bo\'lsin...',
            p2: 'Mening ismim Muhammad...'
        },
        gamification: { level: 'Progress darajasi', points: 'Ball', badges: 'Ochiq nishonlar', complete: 'Darsni tugatdim!' },
        keyboard: { title: 'Klaviatura', subtitle: 'Yozishni mashq qiling', backspace: 'O\'chirish', space: 'Bo\'shliq' },
        rootFinder: { title: 'Ildiz izlovchi', subtitle: 'So\'zlar kelib chiqishini o\'rganing', explore: 'Izlash', notFound: 'So\'z topilmadi.', rootTitle: 'Uch harfli ildiz', relatedTitle: 'Bog\'liq so\'zlar:' },
        tashkeel: { title: 'Avto-tashkil', subtitle: 'Matnga harakatlar qo\'yish vositasi', add: 'Harakatlarni qo\'shish', copy: 'Nusxalash' },
        quiz: { title: 'Test generatori', subtitle: 'Har qanday matndan test yarating', generate: 'Testni yaratish', questions: 'Savollar:', score: 'Natija:', new: 'Yangi test' },
        footer: { copyright: '© 2026 Arab tili platformasi.' }
    }
};

let currentLang = localStorage.getItem('language') || 'ar';

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Gamification
const pointsDisplay = document.getElementById('pointsDisplay');
const badgeContainer = document.getElementById('badgeContainer');
const completeBtn = document.getElementById('completeBtn');

// Dictionary
const tooltip = document.getElementById('dictionaryTooltip');
const tooltipContent = document.getElementById('tooltipContent');

// Keyboard
const keyboardGrid = document.getElementById('keyboardGrid');
const keyboardInput = document.getElementById('keyboardInput');

// Presentation Mode
const startPresentationBtn = document.getElementById('startPresentationBtn');
const exitPresentationBtn = document.getElementById('exitPresentationBtn');

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

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', translations[lang].direction);
    if (currentLangSpan) currentLangSpan.textContent = translations[lang].langName;
    updateTranslations();
    hideTooltip();
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = translations[currentLang];
        keys.forEach(k => val = val ? val[k] : null);
        if (val) el.textContent = val;
    });
}

// --- Gamification Logic ---

function updateGamification() {
    if (pointsDisplay) pointsDisplay.textContent = gameState.points;
    if (badgeContainer) {
        badgeContainer.innerHTML = '';
        let unlockedCount = 0;
        BADGES.forEach(badge => {
            if (gameState.points >= badge.threshold) {
                const badgeEl = document.createElement('div');
                badgeEl.className = 'bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full text-xs font-bold badge-pop';
                badgeEl.textContent = badge.name;
                badgeContainer.appendChild(badgeEl);
                unlockedCount++;
            }
        });
        if (unlockedCount === 0) {
            badgeContainer.innerHTML = '<p id="noBadges" class="text-gray-300 text-sm italic px-2">لم تفتح أي أوسمة بعد...</p>';
        }
    }
}

if (completeBtn) {
    completeBtn.addEventListener('click', () => {
        gameState.points += 10;
        localStorage.setItem('student_points', gameState.points);
        updateGamification();
        completeBtn.classList.add('scale-95', 'opacity-50');
        completeBtn.disabled = true;
        setTimeout(() => {
            completeBtn.classList.remove('scale-95', 'opacity-50');
            completeBtn.disabled = false;
        }, 1000);
    });
}

// --- Dictionary Logic ---

function initDictionary() {
    document.querySelectorAll('.arabic-word').forEach(word => {
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            const translation = word.getAttribute(`data-${currentLang}`) || word.getAttribute('data-en');
            showTooltip(word, translation);
        });
    });
}

function showTooltip(el, text) {
    if (!tooltip) return;
    tooltipContent.textContent = text;
    tooltip.classList.remove('hidden');
    const rect = el.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    
    tooltip.style.left = `${rect.left + scrollX + rect.width/2 - tooltip.offsetWidth/2}px`;
    tooltip.style.top = `${rect.top + scrollY - tooltip.offsetHeight - 12}px`;
    tooltip.style.opacity = '1';
}

function hideTooltip() {
    if (tooltip) {
        tooltip.classList.add('hidden');
        tooltip.style.opacity = '0';
    }
}

// --- Virtual Keyboard ---

const ARABIC_CHARS = ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'];

function initKeyboard() {
    if (!keyboardGrid) return;
    keyboardGrid.innerHTML = '';
    ARABIC_CHARS.forEach(char => {
        const btn = document.createElement('button');
        btn.textContent = char;
        btn.className = 'arabic-text bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-2xl p-3 sm:p-4 rounded-xl shadow-sm transition-all active:scale-90';
        btn.onclick = () => { if (keyboardInput) { keyboardInput.value += char; keyboardInput.focus(); } };
        keyboardGrid.appendChild(btn);
    });
    const ks = document.getElementById('keySpace');
    if (ks) ks.onclick = () => { if (keyboardInput) { keyboardInput.value += ' '; keyboardInput.focus(); } };
    const kb = document.getElementById('keyBackspace');
    if (kb) kb.onclick = () => { if (keyboardInput) { keyboardInput.value = keyboardInput.value.slice(0, -1); keyboardInput.focus(); } };
}

// --- Root Finder ---

const rootDb = {
    'مدرسة': { root: 'درس', related: ['مُدَرِّس', 'دِرَاسَة', 'يَدْرُس', 'دَارِس', 'دَرْس'] },
    'مكتوب': { root: 'كتب', related: ['كِتَاب', 'كَاتِب', 'مَكْتَبَة', 'يَكْتُب', 'كِتَابَة'] },
    'استغفار': { root: 'غفر', related: ['غَفُور', 'غَفَّار', 'يَغْفِر', 'مَغْفِرَة', 'غُفْرَان'] },
    'محمود': { root: 'حمد', related: ['حَامِد', 'حَمِيد', 'يَحْمَد', 'أَحْمَد', 'الْحَمْد'] },
    'مفتاح': { root: 'فتح', related: ['يَفْتَح', 'فَاتِح', 'مَفْتُوح', 'فَتْحَة', 'انْفِتَاح'] }
};

function initRootFinder() {
    const input = document.getElementById('rootSearchInput');
    const btn = document.getElementById('exploreBtn');
    const resultArea = document.getElementById('rootResultArea');
    const alert = document.getElementById('notFoundAlert');
    const rootBadge = document.getElementById('rootBadge');
    const relatedContainer = document.getElementById('relatedWordsContainer');

    if (!btn) return;

    btn.onclick = () => {
        const word = input.value.trim();
        const data = rootDb[word];
        if (data) {
            alert.classList.add('hidden');
            resultArea.classList.remove('hidden');
            rootBadge.textContent = data.root;
            relatedContainer.innerHTML = '';
            data.related.forEach(w => {
                const span = document.createElement('span');
                span.className = 'arabic-text bg-white border border-gray-100 text-gray-700 px-4 py-2 rounded-xl text-lg font-medium shadow-sm hover:text-emerald-600 transition-all';
                span.textContent = w;
                relatedContainer.appendChild(span);
            });
        } else {
            resultArea.classList.add('hidden');
            alert.classList.remove('hidden');
        }
    };
}

// --- Advanced Auto-Tashkeel ---

const LINGUISTIC_DB = {
    "في": "فِي", "من": "مِنْ", "على": "عَلَى", "إلى": "إِلَى", "عن": "عَنْ", "مع": "مَعَ", "بين": "بَيْنَ",
    "يا": "يَا", "هو": "هُوَ", "هي": "هِيَ", "أنا": "أَنَا", "نحن": "نَحْنُ", "هم": "هُمْ",
    "كتب": "كَتَبَ", "ذهب": "ذَهَبَ", "قرا": "قَرَأَ", "درس": "دَرَسَ", "فهم": "فَهِمَ",
    "مصر": "مِصْرَ", "السعودية": "السُّعُودِيَّةِ", "الطالب": "الطَّالِبُ", "الدرس": "الدَّرْسَ", "الله": "اللهِ",
    "محمد": "مُحَمَّدٌ", "خالد": "خَالِدٌ", "السلام": "السَّلَامُ", "عليكم": "عَلَيْكُمْ"
};

function smartTashkeel(text) {
    return text.split(/\s+/).map(word => {
        if (LINGUISTIC_DB[word]) return LINGUISTIC_DB[word];
        let res = word;
        if (res.startsWith("ال")) res = "الْ" + res.substring(2);
        if (res.endsWith("ة")) res = res.slice(0, -1) + "َةُ";
        if (res.length === 3) return res[0] + "َ" + res[1] + "َ" + res[2] + "َ";
        return res;
    }).join(' ');
}

function initTashkeelTool() {
    const textarea = document.getElementById('rawTashkeelText');
    const addBtn = document.getElementById('addTashkeelBtn');
    const copyBtn = document.getElementById('copyTashkeelBtn');
    const loading = document.getElementById('tashkeelLoading');
    const status = document.getElementById('copyStatus');

    if (!addBtn) return;

    addBtn.onclick = () => {
        const input = textarea.value.trim();
        if (!input) return;
        loading.classList.remove('hidden');
        setTimeout(() => {
            loading.classList.add('hidden');
            textarea.value = smartTashkeel(input);
        }, 1200);
    };

    copyBtn.onclick = () => {
        textarea.select();
        document.execCommand('copy');
        status.classList.remove('hidden');
        setTimeout(() => status.classList.add('hidden'), 2000);
    };
}

// --- Quiz Generator Logic ---

const GRAMMAR_MOCK = [
    { q: "ما هو الموقع الإعرابي للكلمة الأولى في الجملة؟", options: ["فاعل", "فعل ماضٍ", "مبتدأ", "اسم مجرور"], correct: 1 },
    { q: "حدد نوع الكلمة التي تبدأ بـ 'ال' في النص:", options: ["فعل", "اسم", "حرف", "ضمير"], correct: 1 }
];

function initQuizGenerator() {
    const input = document.getElementById('quizInput');
    const genBtn = document.getElementById('generateQuizBtn');
    const displayArea = document.getElementById('quizDisplayArea');
    const setupArea = document.getElementById('quizSetupArea');
    const container = document.getElementById('questionsContainer');
    const resetBtn = document.getElementById('resetQuizBtn');

    if (!genBtn) return;

    genBtn.onclick = () => {
        if (!input.value.trim()) return;
        document.getElementById('currentScore').textContent = "0";
        document.getElementById('totalQuestions').textContent = GRAMMAR_MOCK.length;
        container.innerHTML = '';
        setupArea.classList.add('hidden');
        displayArea.classList.remove('hidden');
        GRAMMAR_MOCK.forEach((item, idx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'fade-in';
            qDiv.innerHTML = `
                <p class="text-lg font-bold text-gray-700 flex items-start gap-3 mb-4">
                    <span class="bg-orange-500 text-white w-6 h-6 rounded flex items-center justify-center text-xs mt-1">${idx + 1}</span>
                    ${item.q}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${item.options.map((opt, oIdx) => `
                        <button onclick="handleQuizAnswer(this, ${idx}, ${oIdx})" class="text-right p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-orange-50 transition-all font-medium text-gray-600 outline-none">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            `;
            container.appendChild(qDiv);
        });
    };

    resetBtn.onclick = () => {
        displayArea.classList.add('hidden');
        setupArea.classList.remove('hidden');
    };
}

window.handleQuizAnswer = (btn, qIdx, oIdx) => {
    const parent = btn.closest('.grid');
    const buttons = parent.querySelectorAll('button');
    const correct = GRAMMAR_MOCK[qIdx].correct;
    buttons.forEach(b => b.disabled = true);
    if (oIdx === correct) {
        btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        const s = document.getElementById('currentScore');
        s.textContent = parseInt(s.textContent) + 1;
    } else {
        btn.classList.add('bg-red-500', 'text-white', 'border-red-600');
        buttons[correct].classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-200', 'font-bold');
    }
};

// --- Presentation Mode Logic ---

function initPresentationMode() {
    if (!startPresentationBtn) return;
    startPresentationBtn.onclick = () => {
        document.body.classList.add('presentation-active');
        hideTooltip();
    };
    exitPresentationBtn.onclick = () => {
        document.body.classList.remove('presentation-active');
    };
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') document.body.classList.remove('presentation-active');
    });
}

// --- Event Listeners ---
if (langBtn) langBtn.onclick = (e) => { e.stopPropagation(); langDropdown.classList.toggle('hidden'); };
if (mobileMenuBtn) mobileMenuBtn.onclick = (e) => { e.stopPropagation(); mobileMenu.classList.toggle('hidden'); };
document.addEventListener('click', () => {
    if (langDropdown) langDropdown.classList.add('hidden');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    hideTooltip();
});
document.querySelectorAll('.lang-option').forEach(opt => {
    opt.onclick = () => setLanguage(opt.getAttribute('data-lang'));
});

// --- Initialization ---
function init() {
    setLanguage(currentLang);
    updateGamification();
    initDictionary();
    initKeyboard();
    initRootFinder();
    initTashkeelTool();
    initQuizGenerator();
    initPresentationMode();
}
window.onload = init;
