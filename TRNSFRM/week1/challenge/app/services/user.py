from app.models.user import User
from app.core.logging import logger

def create_user(name:str, email:str,db):
    try:
       user1=User(name=name,email=email)
       db.add(user1)
       db.commit()
       return {"msg":"User created"}
    except Exception as e:
        logger.exception("Error Occurred",{e})
        raise

def fetch_user_by_id(user_id,db):
     try:
          user=db.query(User).filter(User.id==user_id).first()
          return user
     except Exception as e:
        logger.exception("Error Occurred",{e})
        raise

def fetch_all_users(db):
     try:
          all_user=db.query(User).all()
          return {"response":all_user,"msg":"Fetched all user"}
     except Exception as e:
        logger.exception("Error Occurred",{e})
        raise