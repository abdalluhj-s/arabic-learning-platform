from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Text
from sqlalchemy.orm import relationship
from database import Base

class Level(Base):
    __tablename__ = "levels"
    
    id = Column(Integer, primary_key=True, index=True)
    level_number = Column(Integer, unique=True)  # 1, 2, 3, 4, 5
    title_ar = Column(String)
    title_ru = Column(String)
    title_en = Column(String)
    
    lessons = relationship("Lesson", back_populates="level")

class Lesson(Base):
    __tablename__ = "lessons"
    
    id = Column(Integer, primary_key=True, index=True)
    level_id = Column(Integer, ForeignKey("levels.id"))
    order = Column(Integer)
    title_ar = Column(String)
    title_ru = Column(String)
    title_en = Column(String)
    
    level = relationship("Level", back_populates="lessons")
    vocabularies = relationship("Vocabulary", back_populates="lesson")
    texts = relationship("LessonText", back_populates="lesson")

class Vocabulary(Base):
    __tablename__ = "vocabularies"
    
    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    
    arabic_word = Column(String, index=True)       # Fully vowelized word
    pronunciation_cyrillic = Column(String)        # e.g., таби́б
    pronunciation_latin = Column(String)           # e.g., ṭabīb
    
    translation_ru = Column(String)
    translation_en = Column(String)
    
    has_difficult_sound = Column(Boolean, default=False)
    difficult_letters = Column(String, nullable=True) # e.g., "ط, ب"
    audio_url = Column(String, nullable=True)
    
    lesson = relationship("Lesson", back_populates="vocabularies")

class LessonText(Base):
    __tablename__ = "lesson_texts"
    
    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    order_index = Column(Integer)
    
    arabic_text = Column(Text)
    translation_ru = Column(Text)
    translation_en = Column(Text)
    
    grammar_note_ru = Column(Text, nullable=True)
    grammar_note_en = Column(Text, nullable=True)
    
    lesson = relationship("Lesson", back_populates="texts")

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    native_language = Column(String, default="ru")
    current_level = Column(Integer, default=1)
    points = Column(Integer, default=0)

class UserProgress(Base):
    __tablename__ = "user_progress"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    is_completed = Column(Boolean, default=False)
    score = Column(Integer, default=0)
