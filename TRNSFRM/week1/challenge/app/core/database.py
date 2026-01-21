from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,DeclarativeBase
from app.core.config import setting

DATABASE_URL=( f"{setting.DIALECT}+{setting.DRIVER}://"
    f"{setting.DB_USERNAME}:{setting.DB_PASSWORD}@"
    f"{setting.DB_HOST}:{setting.DB_PORT}/{setting.DB_NAME}")

engine=create_engine(DATABASE_URL,pool_pre_ping=True)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)
db=SessionLocal()

class Base(DeclarativeBase):
   pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
