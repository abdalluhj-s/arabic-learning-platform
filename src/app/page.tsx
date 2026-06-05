'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';

interface LessonOverview {
  id: number;
  order: number;
  title_ar: string;
  title_ru: string;
  title_en: string;
}

export default function Dashboard() {
  const { language, setLanguage, points, level, completedLessons } = useUserStore();
  const [lessons, setLessons] = useState<LessonOverview[]>([]);
  const [loading, setLoading] = useState(true);
  
  // To avoid hydration mismatch with Zustand persist
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchLessons = async () => {
      try {
        const res = await fetch('/api/lessons');
        const data = await res.json();
        if (Array.isArray(data)) {
          setLessons(data);
        }
      } catch (error) {
        console.error("Failed to fetch lessons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLessons();
  }, []);

  if (!mounted) return null;

  const isAr = language === 'ar';
  const isRu = language === 'ru';
  const dir = isAr ? 'rtl' : 'ltr';

  const t = {
    title: isAr ? 'المسار العربي' : (isRu ? 'Арабский Путь' : 'Arabic Path'),
    progress: isAr ? 'مستوى تقدمك' : (isRu ? 'Ваш прогресс' : 'Your Progress'),
    level: isAr ? 'المستوى' : (isRu ? 'Уровень' : 'Level'),
    points: isAr ? 'النقاط' : (isRu ? 'Очки' : 'Points'),
    completed: isAr ? 'الدروس المنجزة' : (isRu ? 'Пройдено уроков' : 'Completed Lessons'),
    curriculum: isAr ? 'المنهج الدراسي' : (isRu ? 'Учебная программа' : 'Curriculum'),
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] font-cairo" dir={dir}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl font-amiri pb-1">ع</div>
            <h1 className="text-xl font-bold text-slate-800">
              {t.title}
            </h1>
          </div>
          
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as 'ar' | 'ru' | 'en')}
            className="bg-slate-100 border-none rounded-full px-4 py-2 text-sm font-bold text-slate-700 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
            dir={dir}
          >
            <option value="ar">العربية</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* User Stats Card */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-emerald-100 font-bold tracking-widest text-sm uppercase mb-6">
            {t.progress}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
            <div>
              <p className="text-emerald-100 text-sm mb-1">{t.level}</p>
              <p className="text-4xl font-bold">{level}</p>
            </div>
            <div>
              <p className="text-emerald-100 text-sm mb-1">{t.points}</p>
              <p className="text-4xl font-bold">{points}</p>
            </div>
            <div className="hidden md:block">
              <p className="text-emerald-100 text-sm mb-1">{t.completed}</p>
              <p className="text-4xl font-bold">{completedLessons.length}</p>
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {t.curriculum}
          </h2>

          {loading ? (
            <div className="flex justify-center py-20 text-emerald-600">
              <div className="animate-spin h-8 w-8 border-4 border-current border-t-transparent rounded-full"></div>
            </div>
          ) : lessons.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 font-bold">
                {isAr ? 'جاري تهيئة الدروس... يرجى تحديث الصفحة بعد قليل.' : 'Initializing lessons... Please refresh in a moment.'}
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <Link 
                    href={`/lessons/${lesson.id}`} 
                    key={lesson.id}
                    className={`group flex items-center p-6 rounded-2xl border transition-all ${
                      isCompleted 
                        ? 'bg-emerald-50 border-emerald-100 hover:border-emerald-300' 
                        : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isAr ? 'ml-6' : 'mr-6'} flex-shrink-0 transition-colors ${
                      isCompleted ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                    }`}>
                      {lesson.order}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-slate-800 mb-1">
                        {isAr ? lesson.title_ar : (isRu ? lesson.title_ru : lesson.title_en)}
                      </h3>
                      {!isAr && (
                        <p className="font-amiri text-xl text-slate-500" dir="rtl">
                          {lesson.title_ar}
                        </p>
                      )}
                    </div>

                    <div className={`${isAr ? 'mr-4' : 'ml-4'} text-slate-300 group-hover:text-emerald-500 transition-colors`}>
                      {isCompleted ? (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
