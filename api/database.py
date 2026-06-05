from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Vercel Serverless functions have a read-only filesystem EXCEPT for /tmp.
# We must store the SQLite database in /tmp if we want it to work (though it will reset on cold boots).
# For a production app later, replace this with a PostgreSQL URL (e.g., Supabase DB).
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
