'use client';

interface LessonBlockProps {
  arabicText: string;
  translation: string;
  grammarNote?: string | null;
  currentLang: 'en' | 'ru' | 'ar';
}

export default function LessonBlock({ arabicText, translation, grammarNote, currentLang }: LessonBlockProps) {
  const isLtr = currentLang === 'en' || currentLang === 'ru';

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(arabicText);
      utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia) for clear pronunciation
      utterance.rate = 0.8; // Slightly slower for learners
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support text-to-speech.");
    }
  };

  return (
    <article className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex flex-col gap-8">
        
        <div className="flex justify-between items-start flex-row-reverse gap-4">
          <div 
            className="font-amiri text-4xl md:text-5xl text-slate-800 text-right leading-[2.8] w-full"
            dir="rtl"
          >
            {arabicText}
          </div>
          
          <button 
            onClick={playAudio}
            className="mt-4 flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            title="Listen to pronunciation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
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
