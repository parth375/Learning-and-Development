from pydantic_settings import BaseSettings

class Config(BaseSettings):
    APP_NAME:str='health-backend'
    env:str='dev'


confg=Config()


def db_connect()->bool:
    try:
       return True
    except:
        print('Error connecting to DB')