from core.database import Base
from sqlalchemy import Column,Integer,String

class User(Base):
    __tablename__="user"
    
    id= Column(Integer,primary_key=True)
    name=Column(String,nullable=False)
    email=Column(String,unique=True)