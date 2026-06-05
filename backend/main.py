from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from typing import List

import models, schemas
from database import engine, get_db

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Arabic EdTech Platform API",
    description="API for teaching Arabic to Russian speakers",
    version="1.0.0"
)

# CORS configuration for Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Arabic EdTech Platform API"}

@app.get("/api/lessons/{lesson_id}", response_model=schemas.LessonResponse)
def get_lesson_detail(lesson_id: int, db: Session = Depends(get_db)):
    """
    Get full lesson details including vocabulary and texts (Block Rows).
    """
    lesson = db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()
    
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found / Урок не найден")
    
    # Sort texts by order_index
    lesson.texts = sorted(lesson.texts, key=lambda x: x.order_index)
    
    return lesson

@app.get("/api/lessons/{lesson_id}/difficult-sounds", response_model=List[schemas.VocabularyResponse])
def get_difficult_sounds(lesson_id: int, db: Session = Depends(get_db)):
    """
    Get words with difficult sounds (ع, ح, ط, ق, ض) for specific pronunciation training.
    """
    difficult_words = db.query(models.Vocabulary).filter(
        models.Vocabulary.lesson_id == lesson_id,
        models.Vocabulary.has_difficult_sound == True
    ).all()
    
    return difficult_words
