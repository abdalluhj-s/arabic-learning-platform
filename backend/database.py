from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# For development, we can use SQLite if PostgreSQL is not yet configured.
# In production, replace with: postgresql://user:password@host:port/dbname
SQLALCHEMY_DATABASE_URL = "sqlite:///./arabic_edtech.db"
# SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./arabic_edtech.db")

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} # check_same_thread is needed only for SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
