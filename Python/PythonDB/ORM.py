# OBJECT RELATION MODEL #

# it was made to improve efficiency of how sql is used in python

# dialect+driver://username:password@host:port/database

from sqlalchemy import create_engine,Column,Integer,String
from sqlalchemy.orm import declarative_base
from urllib.parse import quote

raw_password = "Paarth@12"  # Raw password
encoded_password = quote(raw_password)
db_cred=f"postgresql+psycopg2://postgres:{encoded_password}@localhost:5433/postgres"

try:
    engine=create_engine(db_cred)
    print("Connected to DB")

# create a table
    Base=declarative_base()
    class Theatres(Base):
        __tablename__="Theatres"
        tid= Column(Integer,primary_key=True)
        t_name= Column(String)
        location= Column(String)
    Base.metadata.create_all(engine)

except Exception as error:
    print(error)