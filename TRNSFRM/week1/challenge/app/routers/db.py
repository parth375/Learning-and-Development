from core.database import db

def db_connect():
    try:
       yield db
    finally:
        db.close()
        