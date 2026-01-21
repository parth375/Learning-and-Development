from app.models.user import User
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate
from app.core.logging import logger

def create_user(user_in:UserCreate,db:Session) ->User:
    try:
       user=User(name=user_in.name,email=user_in.email)
       db.add(user)
       db.commit()
       db.refresh(user)
       return {"msg":"User created"}
    except Exception as e:
        logger.exception("Error creating user")
        raise

def get_user_by_id(user_id:int,db:Session) -> User:
     try:
          user=db.query(User).filter(User.id==user_id).first()
          return user
     except Exception as e:
        logger.exception("Error fetching user by id")
        raise

def get_all_users(db:Session) ->list[User]:
     try:
          all_user=db.query(User).all()
          return {"response":all_user,"msg":"Fetched all user"}
     except Exception as e:
        logger.exception("Error fetching users")
        raise