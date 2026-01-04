from core.database import db
from models.user import User
from core.logging import logger

def create_user(name:str, email:str):
    try:
       user1=User(name=name,email=email)
       db.add(user1)
       db.commit()
       db.close()
       return {"User created"}
    except Exception as e:
        logger.exception("Error Occurred",{e})
        raise

def fetch_user_by_id(user_id):
     try:
          user=db.query(User).filter(User.id==user_id).first()
          db.close()
          return user
     except Exception as e:
        logger.exception("Error Occurred",{e})
        raise

def fetch_all_users():
     try:
          all_user=db.query(User).all()
          print(all_user)
          db.close()
          return all_user
     except Exception as e:
        logger.exception("Error Occurred",{e})
        raise