# OBJECT RELATION MODEL #

# it was made to improve efficiency of how sql is used in python

# dialect+driver://username:password@host:port/database

from sqlalchemy import create_engine,Column,Integer,String
from sqlalchemy.orm import declarative_base,sessionmaker
from urllib.parse import quote
import yaml
with open("config.yaml",'r') as conf:
    con=yaml.safe_load(conf)
    print(con['hostname'])
raw_password = con['password']  # Raw password
encoded_password = quote(raw_password) ## this function safely encode specail characters so they can be used as normal characters
db_cred=f"{con['dialect']}+{con['driver']}://{con['username']}:{encoded_password}@{con['hostname']}:{con['port']}/{con['db']}"

try:
    db_connection=create_engine(db_cred)
    print("Connected to DB")
    # create a table
    Base=declarative_base()
## Table Creation
    class Theatres(Base):
        __tablename__="Theatres"
        tid= Column(Integer,primary_key=True)
        t_name= Column(String)
        location= Column(String)
    Base.metadata.create_all(db_connection)
## insert
    Session=sessionmaker(bind=db_connection)
    session=Session()
    # th2=Theatres(tid=2,t_name='MovieMax',location='Goregaon')
    # th3=Theatres(tid=3,t_name='Cinepolis_West',location='Andheri West')
    # session.add_all([th2,th3])
    # session.commit()
## fetch
    fetch_info=session.query(Theatres).all()
    for it in fetch_info:
        print(f'id = {it.tid} name = {it.t_name} location = {it.location}')
except Exception as error:
    print(error)