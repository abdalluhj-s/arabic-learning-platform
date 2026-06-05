from database import SessionLocal, engine
import models

# Create tables if they don't exist
models.Base.metadata.create_all(bind=engine)

def seed_data():
    db = SessionLocal()
    
    # Check if data already exists
    if db.query(models.Level).first():
        print("Database is already seeded!")
        db.close()
        return

    print("Seeding initial data for Russian speakers...")

    # 1. Create Level
    level1 = models.Level(
        level_number=1,
        title_ar="المستوى الأول: المبتدئ",
        title_ru="Уровень 1: Начинающий",
        title_en="Level 1: Beginner"
    )
    db.add(level1)
    db.commit()
    db.refresh(level1)

    # 2. Create Lesson
    lesson1 = models.Lesson(
        level_id=level1.id,
        order=1,
        title_ar="الدرس الأول: التَّعَارُفُ وَالتَّحِيَّةُ",
        title_ru="Урок 1: Знакомство и приветствие",
        title_en="Lesson 1: Introduction and Greetings"
    )
    db.add(lesson1)
    db.commit()
    db.refresh(lesson1)

    # 3. Add Vocabulary
    vocabularies = [
        models.Vocabulary(
            lesson_id=lesson1.id,
            arabic_word="طَبِيبٌ",
            pronunciation_cyrillic="таби́б",
            pronunciation_latin="ṭabīb",
            translation_ru="врач",
            translation_en="doctor",
            has_difficult_sound=True,
            difficult_letters="ط",
            audio_url="/audio/tabib.mp3"
        ),
        models.Vocabulary(
            lesson_id=lesson1.id,
            arabic_word="مُعَلِّمٌ",
            pronunciation_cyrillic="му‘аллим",
            pronunciation_latin="mu‘allim",
            translation_ru="учитель",
            translation_en="teacher",
            has_difficult_sound=True,
            difficult_letters="ع",
            audio_url="/audio/muallim.mp3"
        ),
        models.Vocabulary(
            lesson_id=lesson1.id,
            arabic_word="نَشِيطٌ",
            pronunciation_cyrillic="наши́т",
            pronunciation_latin="našīṭ",
            translation_ru="активный",
            translation_en="active",
            has_difficult_sound=True,
            difficult_letters="ط",
            audio_url="/audio/nashit.mp3"
        )
    ]
    db.add_all(vocabularies)

    # 4. Add Lesson Texts (Block Rows)
    texts = [
        models.LessonText(
            lesson_id=lesson1.id,
            order_index=1,
            arabic_text="السَّلَامُ عَلَيْكُمْ. اسْمِي مَحْمُودٌ.",
            translation_ru="Мир вам. Меня зовут Махмуд.",
            translation_en="Peace be upon you. My name is Mahmoud.",
            grammar_note_ru="«Ас-саляму алейкум» — стандартное исламское приветствие.",
            grammar_note_en="Standard Islamic greeting."
        ),
        models.LessonText(
            lesson_id=lesson1.id,
            order_index=2,
            arabic_text="أَنَا مُعَلِّمٌ نَشِيطٌ. أَعِيشُ فِي مَدِينَةِ الْقَاهِرَةِ.",
            translation_ru="Я активный учитель. Я живу в городе Каир.",
            translation_en="I am an active teacher. I live in the city of Cairo.",
            grammar_note_ru="В арабском языке прилагательное (активный) ставится после существительного (учитель).",
            grammar_note_en="In Arabic, the adjective follows the noun."
        ),
        models.LessonText(
            lesson_id=lesson1.id,
            order_index=3,
            arabic_text="هَذِهِ زَوْجَتِي، اسْمُهَا مَرْيَمُ، هِيَ طَبِيبَةٌ مَاهِرَةٌ.",
            translation_ru="Это моя жена, ее зовут Марьям, она опытный врач.",
            translation_en="This is my wife, her name is Maryam, she is a skilled doctor.",
            grammar_note_ru="Обратите внимание на женский род: طَبِيبَة (врач-женщина) оканчивается на «та марбута» (ة).",
            grammar_note_en="Notice the feminine marker 'Ta Marbuta' (ة) in طَبِيبَة."
        )
    ]
    db.add_all(texts)
    
    db.commit()
    print("Successfully seeded the database with Lesson 1!")
    db.close()

if __name__ == "__main__":
    seed_data()
