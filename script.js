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
        features: {
            interactive: 'دروس تفاعلية',
            interactiveDesc: 'دروس تفاعلية مع تمارين',
            native: 'معلمين ناطقين بالعربية',
            nativeDesc: 'تعلم من معلمين ناطقين بالعربية',
            flexible: 'تعلم بمرونة',
            flexibleDesc: 'تعلم بالسرعة التي تناسبك',
            certificate: 'شهادات معتمدة',
            certificateDesc: 'احصل على شهادات معتمدة'
        },
        footer: {
            copyright: '© 2026 منصة تعلم اللغة العربية. جميع الحقوق محفوظة.'
        }
    },
    en: {
        direction: 'ltr',
        langName: 'English',
        nav: {
            home: 'Home',
            lessons: 'Lessons',
            grammar: 'Grammar',
            texts: 'Texts'
        },
        hero: {
            title: 'Learn Arabic',
            subtitle: 'A multilingual educational platform for learning Arabic for non-native speakers'
        },
        lesson: {
            title: 'Lesson 1: Greeting and Introduction',
            subtitle: 'A simple conversation between two people',
            playAudio: 'Listen to Lesson',
            p1: 'Peace be upon you, and the mercy of Allah and His blessings.',
            p2: 'My name is Muhammad, I am from Egypt. What is your name?',
            p3: 'Welcome, Muhammad. I am Khalid, I am from Saudi Arabia.'
        },
        features: {
            interactive: 'Interactive Lessons',
            interactiveDesc: 'Interactive lessons with exercises',
            native: 'Native Arabic Teachers',
            nativeDesc: 'Learn from native Arabic speakers',
            flexible: 'Flexible Learning',
            flexibleDesc: 'Learn at your own pace',
            certificate: 'Accredited Certificates',
            certificateDesc: 'Get accredited certificates'
        },
        footer: {
            copyright: '© 2026 Arabic Learning Platform. All rights reserved.'
        }
    },
    ru: {
        direction: 'ltr',
        langName: 'Русский',
        nav: {
            home: 'Главная',
            lessons: 'Уроки',
            grammar: 'Грамматика',
            texts: 'Тексты'
        },
        hero: {
            title: 'Изучайте арабский язык',
            subtitle: 'Многоязычная образовательная платформа для изучения арабского языка для не носителей'
        },
        lesson: {
            title: 'Урок 1: Приветствие и знакомство',
            subtitle: 'Простой разговор بين شخصين',
            playAudio: 'Слушать урок',
            p1: 'Мир вам, милость Аллаха и Его благословение.',
            p2: 'Меня зовут Мухаммад, я из Египта. Как тебя зовут?',
            p3: 'Добро пожаловать, Мухаммад. Я Халид, я из Саудовской Аравии.'
        },
        features: {
            interactive: 'Интерактивные уроки',
            interactiveDesc: 'Интеرافктивные уроки с упражнениями',
            native: 'Носители арабского языка',
            nativeDesc: 'Учитесь у носителей арабского языка',
            flexible: 'Гибкое обучение',
            flexibleDesc: 'Учитесь в своем собственном темпе',
            certificate: 'Аккредитованные сертификаты',
            certificateDesc: 'Получите аккредитованные сертификаты'
        },
        footer: {
            copyright: '© 2026 Платформа изучения арабского языка. Все права защищены.'
        }
    },
    uz: {
        direction: 'ltr',
        langName: 'O\'zbek',
        nav: {
            home: 'Bosh sahifa',
            lessons: 'Darslar',
            grammar: 'Grammatika',
            texts: 'Matnlar'
        },
        hero: {
            title: 'Arab tilini o\'rganing',
            subtitle: 'Arab tilini o\'rganish uchun ko\'p tilli ta\'lim platformasi'
        },
        lesson: {
            title: '1-dars: Salomlashish va tanishish',
            subtitle: 'Ikki kishi o\'rtasidagi oddiy suhbat',
            playAudio: 'Darsni tinglang',
            p1: 'Sizga tinchlik, Allohning rahmati va barakasi bo\'lsin.',
            p2: 'Mening ismim Muhammad, men Misrdanman. Ismingiz nima?',
            p3: 'Xush kelibsiz, Muhammad. Men Xolidman, men Saudiya Arabistonidanman.'
        },
        features: {
            interactive: 'Interaktiv darslar',
            interactiveDesc: 'Mashqlar bilan interaktiv darslar',
            native: 'Arab tilida so\'zlovchi o\'qituvchilar',
            nativeDesc: 'Arab tilida so\'zlovchi o\'qituvchilardan o\'rganing',
            flexible: 'Moslashuvchan o\'rganish',
            flexibleDesc: 'O\'z tezligingizda o\'rganing',
            certificate: 'Tasdiqlangan sertifikatlar',
            certificateDesc: 'Tasdiqlangan sertifikatlar oling'
        },
        footer: {
            copyright: '© 2026 Arab tili o\'rganish platformasi. Barcha huquqlar himoyalangan.'
        }
    }
};

// Default language
let currentLang = localStorage.getItem('language') || 'ar';

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Language Dropdown Toggle
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });
}

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
    }
    if (mobileMenu && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Change language
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.add('hidden');
    });
});

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML direction and lang attribute
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', translations[lang].direction);
    
    // Update current language button
    if (currentLangSpan) currentLangSpan.textContent = translations[lang].langName;
    
    // Update all translatable elements
    updateTranslations();
    
    // Update active state in dropdown and alignment
    const isRtl = translations[lang].direction === 'rtl';
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('bg-gray-100', 'font-bold');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('bg-gray-100', 'font-bold');
        }
        // Update alignment based on direction
        if (isRtl) {
            option.classList.remove('text-left');
            option.classList.add('text-right');
        } else {
            option.classList.remove('text-right');
            option.classList.add('text-left');
        }
    });
}

// Update translations function
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLang];
        
        keys.forEach(k => {
            if (value) value = value[k];
        });
        
        if (value) {
            // For lesson paragraphs, we don't want to overwrite the Arabic text if it's the Arabic language
            // but the current implementation of index.html has hardcoded Arabic and data-i18n for translations.
            // So if currentLang is 'ar', we might want to hide the translation or show it in Arabic too.
            // The user asked for "translation in the currently selected language directly underneath each Arabic paragraph".
            // If the selected language is Arabic, showing the same text twice might be redundant, but let's follow the logic.
            element.textContent = value;
        }
    });
}

// Initialize on page load
function init() {
    setLanguage(currentLang);
}

// Run initialization
init();
