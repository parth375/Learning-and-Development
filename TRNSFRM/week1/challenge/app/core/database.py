from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,DeclarativeBase
import yaml
from urllib.parse import quote

with open('app/core/env.yaml','r') as f:
     cred=yaml.safe_load(f)

encoded_password = quote(cred['password'])
DATABASE_URL= f"{cred['dialect']}+{cred['driver']}://{cred['username']}:{encoded_password}@{cred['hostname']}:{cred['port']}/{cred['db']}"
engine=create_engine(DATABASE_URL)
localsession=sessionmaker(bind=engine)
db=localsession()

class Base(DeclarativeBase):
   pass
print("connected",engine)
