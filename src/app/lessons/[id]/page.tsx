'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import LessonBlock from '@/components/LessonBlock';

interface Vocabulary {
  id: number;
  arabic_word: string;
  pronunciation_cyrillic: string;
  pronunciation_latin: string;
  translation_ru: string;
  translation_en: string;
  has_difficult_sound: boolean;
}

interface LessonText {
  id: number;
  arabic_text: string;
  translation_ru: string;
  translation_en: string;
  grammar_note_ru: string | null;
  grammar_note_en: string | null;
}

interface LessonData {
  id: number;
  title_ar: string;
  title_ru: string;
  title_en: string;
  vocabularies: Vocabulary[];
  texts: LessonText[];
}

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Try to load language from local storage, default to ar
  const [lang, setLang] = useState<'ar' | 'ru' | 'en'>('ar');

  useEffect(() => {
    // Sync with Zustand storage if possible, or just local storage
    const stored = localStorage.getItem('arabic-edtech-storage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.state?.language) {
          setLang(parsed.state.language);
        }
      } catch (e) {}
    }

    const fetchLesson = async () => {
      try {
        // Vercel routes /api requests automatically to the Python backend
        const res = await fetch(`/api/lessons/${unwrappedParams.id}`);
        const data = await res.json();
        setLesson(data);
      } catch (error) {
        console.error("Failed to fetch lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [unwrappedParams.id]);

  const handleLangChange = (newLang: 'ar' | 'ru' | 'en') => {
    setLang(newLang);
    // Try to update Zustand store in local storage to keep it in sync
    const stored = localStorage.getItem('arabic-edtech-storage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        parsed.state.language = newLang;
        localStorage.setItem('arabic-edtech-storage', JSON.stringify(parsed));
      } catch (e) {}
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="animate-spin h-10 w-10 border-4 border-emerald-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!lesson) return <div className="text-center mt-20 font-cairo">Lesson not found!</div>;

  const isAr = lang === 'ar';
  const isRu = lang === 'ru';
  const dir = isAr ? 'rtl' : 'ltr';

  const pageTitle = isAr ? lesson.title_ar : (isRu ? lesson.title_ru : lesson.title_en);
  const backText = isAr ? 'رجوع →' : '← Back';
  const newWordsText = isAr ? 'الكلمات الجديدة' : (isRu ? 'Новые слова' : 'New Words');

  return (
    <main className="min-h-screen bg-[#FAF9F6] font-cairo pb-20" dir={dir}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="text-slate-500 hover:text-slate-800 font-bold">
            {backText}
          </button>
          
          <h1 className="text-xl font-bold text-slate-800">{pageTitle}</h1>
          
          <select 
            value={lang} 
            onChange={(e) => handleLangChange(e.target.value as 'ar' | 'ru' | 'en')}
            className="bg-slate-100 border-none rounded-full px-4 py-2 text-sm font-bold text-slate-700 outline-none cursor-pointer"
            dir={dir}
          >
            <option value="ar">العربية</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        
        <section>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            {newWordsText}
          </h2>
          <div className="flex flex-wrap gap-4">
            {lesson.vocabularies?.map((vocab) => (
              <div key={vocab.id} className={`px-5 py-3 rounded-2xl border ${vocab.has_difficult_sound ? 'bg-rose-50 border-rose-200' : 'bg-white border-slate-200'}`}>
                <span className="font-amiri text-2xl text-slate-800" dir="rtl">{vocab.arabic_word}</span>
                <div className="text-xs text-slate-500 mt-1">
                  {isAr ? vocab.arabic_word : (isRu ? vocab.pronunciation_cyrillic : vocab.pronunciation_latin)} • {isAr ? vocab.arabic_word : (isRu ? vocab.translation_ru : vocab.translation_en)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          {lesson.texts?.map((text) => {
            // For Arabic view, we might not need translation, but we can show the text itself or just keep it minimal
            const translation = isAr ? text.arabic_text : (isRu ? text.translation_ru : text.translation_en);
            const grammarNote = isAr ? null : (isRu ? text.grammar_note_ru : text.grammar_note_en);
            
            return (
              <LessonBlock 
                key={text.id}
                arabicText={text.arabic_text}
                translation={translation}
                grammarNote={grammarNote}
                currentLang={lang}
              />
            );
          })}
        </section>
        
      </div>
    </main>
  );
}
