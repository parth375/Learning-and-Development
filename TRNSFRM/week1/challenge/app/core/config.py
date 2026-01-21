from pydantic_settings import BaseSettings
from urllib.parse import quote
import yaml


class Config(BaseSettings):
    APP_NAME:str='health-backend'
    APP_VERSION:str='1.0.0'
    env:str='dev'


config=Config()


with open('app/core/env.yaml','r') as f:
     cred=yaml.safe_load(f)

class Settings(BaseSettings):
   DB_PASSWORD:str=quote(cred['password'])
   DB_USERNAME:str=cred['username']
   DIALECT:str=cred['dialect']
   DB_HOST:str=cred['hostname']
   DB_PORT:int=cred['port']
   DRIVER:str=cred['driver']
   DB_NAME:str=cred['db']

setting=Settings()

