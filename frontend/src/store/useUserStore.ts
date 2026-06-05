import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  language: 'ru' | 'en';
  level: number;
  points: number;
  completedLessons: number[];
  
  setLanguage: (lang: 'ru' | 'en') => void;
  addPoints: (amount: number) => void;
  markLessonComplete: (lessonId: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      language: 'ru', 
      level: 1,
      points: 0,
      completedLessons: [],

      setLanguage: (lang) => set({ language: lang }),
      addPoints: (amount) => set((state) => ({ points: state.points + amount })),
      markLessonComplete: (lessonId) => set((state) => ({
        completedLessons: state.completedLessons.includes(lessonId) 
          ? state.completedLessons 
          : [...state.completedLessons, lessonId]
      })),
    }),
    {
      name: 'arabic-edtech-storage',
    }
  )
);
