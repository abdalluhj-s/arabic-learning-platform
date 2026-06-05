from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from typing import List

import models, schemas
from database import engine, get_db, SessionLocal

app = FastAPI(
    title="Arabic EdTech Platform API",
    description="API for teaching Arabic to Russian speakers",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def seed_initial_data():
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Check if already seeded
        if db.query(models.Level).first():
            return
            
        print("Seeding database...")
        level1 = models.Level(level_number=1, title_ar="المستوى الأول: المبتدئ", title_ru="Уровень 1: Начинающий", title_en="Level 1: Beginner")
        db.add(level1)
        db.commit()
        db.refresh(level1)

        lesson1 = models.Lesson(level_id=level1.id, order=1, title_ar="الدرس الأول: التَّعَارُفُ وَالتَّحِيَّةُ", title_ru="Урок 1: Знакомство и приветствие", title_en="Lesson 1: Introduction and Greetings")
        db.add(lesson1)
        db.commit()
        db.refresh(lesson1)

        vocabularies = [
            models.Vocabulary(lesson_id=lesson1.id, arabic_word="طَبِيبٌ", pronunciation_cyrillic="таби́б", pronunciation_latin="ṭabīb", translation_ru="врач", translation_en="doctor", has_difficult_sound=True, difficult_letters="ط", audio_url="/audio/tabib.mp3"),
            models.Vocabulary(lesson_id=lesson1.id, arabic_word="مُعَلِّمٌ", pronunciation_cyrillic="му‘аллим", pronunciation_latin="mu‘allim", translation_ru="учитель", translation_en="teacher", has_difficult_sound=True, difficult_letters="ع", audio_url="/audio/muallim.mp3"),
            models.Vocabulary(lesson_id=lesson1.id, arabic_word="نَشِيطٌ", pronunciation_cyrillic="наши́т", pronunciation_latin="našīṭ", translation_ru="активный", translation_en="active", has_difficult_sound=True, difficult_letters="ط", audio_url="/audio/nashit.mp3")
        ]
        db.add_all(vocabularies)

        texts = [
            models.LessonText(lesson_id=lesson1.id, order_index=1, arabic_text="السَّلَامُ عَلَيْكُمْ. اسْمِي مَحْمُودٌ.", translation_ru="Мир вам. Меня зовут Махмуд.", translation_en="Peace be upon you. My name is Mahmoud.", grammar_note_ru="«Ас-саляму алейкум» — стандартное исламское приветствие.", grammar_note_en="Standard Islamic greeting."),
            models.LessonText(lesson_id=lesson1.id, order_index=2, arabic_text="أَنَا مُعَلِّمٌ نَشِيطٌ. أَعِيشُ فِي مَدِينَةِ الْقَاهِرَةِ.", translation_ru="Я активный учитель. Я живу в городе Каир.", translation_en="I am an active teacher. I live in the city of Cairo.", grammar_note_ru="В арабском языке прилагательное (активный) ставится после существительного (учитель).", grammar_note_en="In Arabic, the adjective follows the noun."),
            models.LessonText(lesson_id=lesson1.id, order_index=3, arabic_text="هَذِهِ زَوْجَتِي، اسْمُهَا مَرْيَمُ، هِيَ طَبِيبَةٌ مَاهِرَةٌ.", translation_ru="Это моя жена, ее зовут Марьям, она опытный врач.", translation_en="This is my wife, her name is Maryam, she is a skilled doctor.", grammar_note_ru="Обратите внимание на женский род: طَبِيبَة (врач-женщина) оканчивается на «та марбута» (ة).", grammar_note_en="Notice the feminine marker 'Ta Marbuta' (ة) in طَبِيبَة.")
        ]
        db.add_all(texts)
        db.commit()
    finally:
        db.close()

@app.on_event("startup")
def startup_event():
    seed_initial_data()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Arabic EdTech Platform API"}

@app.get("/api/lessons", response_model=List[schemas.LessonBase])
def get_all_lessons(db: Session = Depends(get_db)):
    """
    Get a list of all available lessons for the dashboard.
    """
    lessons = db.query(models.Lesson).order_by(models.Lesson.order).all()
    return lessons

@app.get("/api/lessons/{lesson_id}", response_model=schemas.LessonResponse)
def get_lesson_detail(lesson_id: int, db: Session = Depends(get_db)):
    lesson = db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found / Урок не найден")
    lesson.texts = sorted(lesson.texts, key=lambda x: x.order_index)
    return lesson

@app.get("/api/lessons/{lesson_id}/difficult-sounds", response_model=List[schemas.VocabularyResponse])
def get_difficult_sounds(lesson_id: int, db: Session = Depends(get_db)):
    difficult_words = db.query(models.Vocabulary).filter(
        models.Vocabulary.lesson_id == lesson_id,
        models.Vocabulary.has_difficult_sound == True
    ).all()
    return difficult_words
