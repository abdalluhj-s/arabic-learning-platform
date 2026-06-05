from pydantic import BaseModel, ConfigDict
from typing import List, Optional

# ==========================================
# Vocabulary Schemas
# ==========================================
class VocabularyBase(BaseModel):
    arabic_word: str
    pronunciation_cyrillic: str
    pronunciation_latin: str
    translation_ru: str
    translation_en: str
    has_difficult_sound: bool = False
    difficult_letters: Optional[str] = None
    audio_url: Optional[str] = None

class VocabularyResponse(VocabularyBase):
    id: int
    lesson_id: int
    
    model_config = ConfigDict(from_attributes=True)


# ==========================================
# Lesson Text Schemas
# ==========================================
class LessonTextBase(BaseModel):
    order_index: int
    arabic_text: str
    translation_ru: str
    translation_en: str
    grammar_note_ru: Optional[str] = None
    grammar_note_en: Optional[str] = None

class LessonTextResponse(LessonTextBase):
    id: int
    lesson_id: int

    model_config = ConfigDict(from_attributes=True)


# ==========================================
# Lesson Schemas
# ==========================================
class LessonBase(BaseModel):
    order: int
    title_ar: str
    title_ru: str
    title_en: str

class LessonResponse(LessonBase):
    id: int
    level_id: int
    vocabularies: List[VocabularyResponse] = []
    texts: List[LessonTextResponse] = []

    model_config = ConfigDict(from_attributes=True)
