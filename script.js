const translations = {
    ar: {
        direction: 'rtl',
        langName: 'العربية',
        nav: {
            home: 'الرئيسية',
            lessons: 'الدروس',
            grammar: 'النحو',
            texts: 'النصوص'
        },
        hero: {
            title: 'تعلم اللغة العربية',
            subtitle: 'منصة تعليمية متعددة اللغات لتعلم اللغة العربية لغير الناطقين بها'
        },
        lesson: {
            title: 'الدرس الأول: التحية والتعارف',
            subtitle: 'محادثة بسيطة بين شخصين',
            playAudio: 'استمع للدرس',
            p1: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ.',
            p2: 'اسْمِي مُحَمَّدٌ، أَنَا مِنَ مِصْرَ. مَا اسْمُكَ؟',
            p3: 'أَهْلًا بِكَ يَا مُحَمَّدُ. أَنَا خَالِدٌ، أَنَا مِنَ السُّعُودِيَّةِ.'
        },
        gamification: {
            level: 'مستوى التقدم',
            points: 'نقطة',
            badges: 'الأوسمة المفتوحة',
            complete: 'أنهيت قراءة هذا الدرس!'
        },
        keyboard: {
            title: 'لوحة المفاتيح العربية الافتراضية',
            subtitle: 'تدرب على الكتابة باللغة العربية',
            backspace: 'حذف',
            space: 'مسافة'
        },
        rootFinder: {
            title: 'باحث الجذور العربية',
            subtitle: 'استكشف أصل الكلمات واشتقاقاتها',
            explore: 'استكشاف',
            notFound: 'عذراً، هذه الكلمة غير موجودة في قاعدة بياناتنا.',
            rootTitle: 'الجذر الثلاثي',
            relatedTitle: 'كلمات ذات صلة:'
        },
        footer: {
            copyright: '© 2026 منصة تعلم اللغة العربية. جميع الحقوق محفوظة.'
        }
    },
    en: {
        direction: 'ltr',
        langName: 'English',
        nav: { home: 'Home', lessons: 'Lessons', grammar: 'Grammar', texts: 'Texts' },
        hero: { title: 'Learn Arabic', subtitle: 'A multilingual educational platform' },
        lesson: {
            title: 'Lesson 1: Greeting',
            subtitle: 'Simple conversation',
            playAudio: 'Listen',
            p1: 'Peace be upon you...',
            p2: 'My name is Muhammad...'
        },
        gamification: {
            level: 'Progress Level',
            points: 'Points',
            badges: 'Unlocked Badges',
            complete: 'I finished this lesson!'
        },
        keyboard: { title: 'Virtual Keyboard', subtitle: 'Practice typing', backspace: 'Backspace', space: 'Space' },
        rootFinder: {
            title: 'Arabic Root Finder',
            subtitle: 'Explore word origins',
            explore: 'Explore',
            notFound: 'Sorry, this word is not in our database.',
            rootTitle: 'Trilateral Root',
            relatedTitle: 'Related Words:'
        },
        footer: { copyright: '© 2026 Arabic Learning Platform.' }
    },
    ru: {
        direction: 'ltr',
        langName: 'Русский',
        nav: { home: 'Главная', lessons: 'Уроки', grammar: 'Грамматика', texts: 'Тексты' },
        hero: { title: 'Изучайте арабский', subtitle: 'Многоязычная платформа' },
        lesson: {
            title: 'Урок 1: Приветствие',
            subtitle: 'Простой разговор',
            playAudio: 'Слушать',
            p1: 'Мир вам...',
            p2: 'Меня зовут Мухаммад...'
        },
        gamification: {
            level: 'Уровень прогресса',
            points: 'Очков',
            badges: 'Открытые значки',
            complete: 'Я закончил этот урок!'
        },
        keyboard: { title: 'Клавиатура', subtitle: 'Практика набора', backspace: 'Удалить', space: 'Пробел' },
        rootFinder: {
            title: 'Поиск корней',
            subtitle: 'Изучайте происхождение слов',
            explore: 'Исследовать',
            notFound: 'Извините, этого слова нет в нашей базе.',
            rootTitle: 'Трёхбуквенный корень',
            relatedTitle: 'Родственные слова:'
        },
        footer: { copyright: '© 2026 Платформа изучения арабского.' }
    },
    uz: {
        direction: 'ltr',
        langName: 'O\'zbek',
        nav: { home: 'Bosh sahifa', lessons: 'Darslar', grammar: 'Grammatika', texts: 'Matnlar' },
        hero: { title: 'Arab tilini o\'rganing', subtitle: 'Ko\'p tilli platforma' },
        lesson: {
            title: '1-dars: Salomlashish',
            subtitle: 'Oddiy suhbat',
            playAudio: 'Tinglash',
            p1: 'Sizga tinchlik...',
            p2: 'Mening ismim Muhammad...'
        },
        gamification: {
            level: 'Progress darajasi',
            points: 'Ball',
            badges: 'Ochiq nishonlar',
            complete: 'Darsni tugatdim!'
        },
        keyboard: { title: 'Klaviatura', subtitle: 'Yozish mashqi', backspace: 'O\'chirish', space: 'Bo\'shliq' },
        rootFinder: {
            title: 'Ildiz izlovchi',
            subtitle: 'So\'zlar kelib chiqishini o\'rganing',
            explore: 'Izlash',
            notFound: 'Kechirasiz, bu so\'z bizning bazamizda yo\'q.',
            rootTitle: 'Uch harfli ildiz',
            relatedTitle: 'Bog\'liq so\'zlar:'
        },
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

// Gamification Elements
const pointsDisplay = document.getElementById('pointsDisplay');
const badgeContainer = document.getElementById('badgeContainer');
const completeBtn = document.getElementById('completeBtn');

// Dictionary Elements
const tooltip = document.getElementById('dictionaryTooltip');
const tooltipContent = document.getElementById('tooltipContent');

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

// --- Core Logic ---

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', translations[lang].direction);
    if (currentLangSpan) currentLangSpan.textContent = translations[lang].langName;
    updateTranslations();
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
        if (badgeContainer.children.length === 0) {
            badgeContainer.innerHTML = '<p class="text-gray-300 text-sm italic px-2">لم تفتح أي أوسمة بعد...</p>';
        }
    }
}

if (completeBtn) {
    completeBtn.addEventListener('click', () => {
        gameState.points += 10;
        localStorage.setItem('student_points', gameState.points);
        updateGamification();
        completeBtn.classList.add('scale-95');
        setTimeout(() => completeBtn.classList.remove('scale-95'), 100);
    });
}

// --- Dictionary ---

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
    tooltip.style.left = `${rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
    tooltip.style.opacity = '1';
}

function hideTooltip() {
    if (tooltip) {
        tooltip.classList.add('hidden');
        tooltip.style.opacity = '0';
    }
}

// --- Keyboard ---
const arabicChars = ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'];
const keyboardGrid = document.getElementById('keyboardGrid');
const keyboardInput = document.getElementById('keyboardInput');

function initKeyboard() {
    if (!keyboardGrid) return;
    arabicChars.forEach(char => {
        const btn = document.createElement('button');
        btn.textContent = char;
        btn.className = 'arabic-text bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-2xl p-3 rounded-xl shadow-sm transition-all active:scale-95';
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

// --- Init ---
function init() {
    setLanguage(currentLang);
    updateGamification();
    initDictionary();
    initKeyboard();
    initRootFinder();
}
init();
