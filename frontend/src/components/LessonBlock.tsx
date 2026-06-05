'use client';

interface LessonBlockProps {
  arabicText: string;
  translation: string;
  grammarNote?: string | null;
  currentLang: 'en' | 'ru' | 'ar';
}

export default function LessonBlock({ arabicText, translation, grammarNote, currentLang }: LessonBlockProps) {
  const isLtr = currentLang === 'en' || currentLang === 'ru';

  return (
    <article className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-8">
        <div 
          className="font-amiri text-4xl md:text-5xl text-slate-800 text-right leading-[2.8] w-full"
          dir="rtl"
        >
          {arabicText}
        </div>
        
        <div className="w-16 h-1 bg-emerald-200 rounded-full"></div>

        <div 
          className="font-cairo text-lg md:text-xl text-slate-500 leading-relaxed"
          dir={isLtr ? "ltr" : "rtl"}
          style={{ textAlign: isLtr ? 'left' : 'right' }}
        >
          {translation}
        </div>

        {grammarNote && (
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-sm">
            <strong className="block mb-1">💡 Note / Примечание:</strong>
            {grammarNote}
          </div>
        )}
      </div>
    </article>
  );
}
