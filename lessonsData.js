const lessonsData = [
    {
        id: 1,
        title: "الْمُعْجِزَةُ الْخَالِدَةُ",
        subtitle: "الْقُرْآنُ الْكَرِيمُ مُعْجِزَةُ الإِسْلَامِ",
        text_ar: "الْقُرْآنُ مُعْجِزَةُ الرَّسُولِ ﷺ، أَنْزَلَهُ اللَّهُ سُبْحَانَهُ وَتَعَالَى عَلَيْهِ مُنَجَّمًا حَسَبَ الْحَوَادِثِ. وَالْحِكْمَةُ مِنْ ذَلِكَ تَثْبِيتُ قَلْبِ الرَّسُولِ ﷺ وَقُلُوبِ الْمُسْلِمِينَ، وَلِيَكُونَ حِفْظُهُ سَهْلًا عَلَيْهِمْ. كَانَتْ لِلرَّسُولِ ﷺ مُعْجِزَاتٌ أُخْرَى، وَمِنْهَا: انْشِقَاقُ الْقَمَرِ، وَخُرُوجُ الْمَاءِ مِنْ بَيْنِ أَصَابِعِهِ. أَمَّا مُعْجِزَةُ الرَّسُولِ ﷺ الْخَالِدَةُ فَهِيَ الْقُرْآنُ الْكَرِيمُ، وَهِيَ بَاقِيَةٌ إِلَى يَوْمِ الْقِيَامَةِ.",
        text_en: "The Quran is the miracle of the Prophet (PBUH). Allah revealed it to him gradually according to events. The wisdom behind this was to strengthen the heart of the Prophet and the hearts of Muslims, and to make its memorization easy for them. The Prophet (PBUH) had other miracles, including the splitting of the moon and water coming out from between his fingers. As for the eternal miracle of the Prophet (PBUH), it is the Holy Quran, and it remains until the Day of Resurrection.",
        text_ru: "Коран — это чудо Пророка (мир ему). Аллах ниспослал его ему постепенно, сообразно событиям. Мудрость этого заключалась в том, чтобы укрепить сердце Пророка и сердца мусульман, а также облегчить им его заучивание. У Пророка (мир ему) были и другие чудеса, в том числе раскалывание луны и выход воды из-под его пальцев. Что касается вечного чуда Пророка (мир ему), то это Священный Коран, и он пребудет до Дня Воскресения.",
        text_uz: "Qur'on Payg'ambarimiz (s.a.v.) ning mo'jizasidir. Alloh uni voqealarga ko'ra bo'lib-bo'lib nozil qilgan. Buning hikmati Payg'ambarimizning va musulmonlarning qalbini mustahkamlash hamda uni yodlashni osonlashtirish edi. Payg'ambarimiz (s.a.v.) ning boshqa mo'jizalari ham bo'lgan, jumladan oyning bo'linishi va barmoqlari orasidan suv chiqishi. Payg'ambarimiz (s.a.v.) ning boqiY mo'jizasi esa Qur'oni Karimdir va u Qiyomat kunigacha qoladi.",
        grammar_tip: {
            en: "Passive Voice (Al-Fi'l Al-Mabni lil-Majhul) is used when the doer is unknown or not mentioned, e.g., (أُنْزِلَ - was revealed).",
            ru: "Страдательный залог (Аль-Фи'ль Аль-Мабни лиль-Маджхуль) используется, когда действующее лицо неизвестно или не упоминается.",
            uz: "Majhul nisbat (Al-Fi'l Al-Mabni lil-Majhul) ish-harakatning bajaruvchisi noma'lum bo'lganda ishlatiladi."
        },
        quiz: [
            { q: "لِمَاذَا نَزَلَ الْقُرْآنُ مُنَجَّمًا؟", options: ["لِلتَّجْرِبَةِ", "لِتَثْبِيتِ الْقُلُوبِ", "لِصُعُوبَةِ الْحِفْظِ", "لَا سَبَبَ"], correct: 1 },
            { q: "مَا هِيَ الْمُعْجِزَةُ الْخَالِدَةُ؟", options: ["انْشِقَاقُ الْقَمَرِ", "خُرُوجُ الْمَاءِ", "الْقُرْآنُ الْكَرِيمُ", "الْعَصَا"], correct: 2 },
            { q: "مَنْ هُوَ الرُّوحُ الأَمِينُ؟", options: ["مُحَمَّدٌ ﷺ", "جِبْرِيلُ عَلَيْهِ السَّلَامُ", "مُوسَى عَلَيْهِ السَّلَامُ", "إِسْرَافِيلُ"], correct: 1 }
        ]
    },
    {
        id: 2,
        title: "الإِسْلَامُ وَالطِّبُّ",
        subtitle: "عِنَايَةُ الإِسْلَامِ بِالصِّحَّةِ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 3,
        title: "الإِسْلَامُ وَالْعُلُومُ",
        subtitle: "دَوْرُ الْعُلَمَاءِ الْمُسْلِمِينَ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 4,
        title: "الإِسْلَامُ وَالْمُجْتَمَعُ",
        subtitle: "الْعَلَاقَاتُ الاجْتِمَاعِيَّةُ فِي الإِسْلَامِ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 5,
        title: "الشَّبَابُ",
        subtitle: "أَهَمِّيَّةُ الشَّبَابِ فِي بِنَاءِ الأُمَّةِ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 6,
        title: "الأَمْنُ",
        subtitle: "نِعْمَةُ الأَمْنِ وَالأَمَانِ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 7,
        title: "التَّلَوُّثُ",
        subtitle: "حِمَايَةُ الْبِيئَةِ مِنَ التَّلَوُّثِ",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    },
    {
        id: 8,
        title: "الطَّاقَةُ",
        subtitle: "مَصَادِرُ الطَّاقَةِ وَمُسْتَقْبَلُهَا",
        text_ar: "جَارِي الْبَحْثُ عَنِ النَّصِّ...",
        text_en: "Searching for text...",
        text_ru: "Поиск текста...",
        text_uz: "Matn qidirilmoqda...",
        grammar_tip: { en: "", ru: "", uz: "" },
        quiz: []
    }
];
