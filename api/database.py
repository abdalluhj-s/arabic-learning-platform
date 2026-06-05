from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Securely get the database URL from environment variables.
# If on Vercel and DATABASE_URL is set, it uses Supabase (PostgreSQL).
# Otherwise, it falls back to local SQLite.
DATABASE_URL = os.environ.get("DATABASE_URL")

if DATABASE_URL:
    # Supabase uses PostgreSQL
    # SQLAlchemy 1.4+ requires 'postgresql://' instead of 'postgres://'
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    engine = create_engine(DATABASE_URL)
else:
    # Fallback to local SQLite for local testing if no URL is provided
    db_path = "/tmp/arabic_edtech.db" if os.environ.get("VERCEL") else "./arabic_edtech.db"
    SQLALCHEMY_DATABASE_URL = f"sqlite:///{db_path}"
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
