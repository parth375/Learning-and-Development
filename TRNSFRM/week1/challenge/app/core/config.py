from pydantic_settings import BaseSettings

class Config(BaseSettings):
    APP_NAME:str='health-backend'
    APP_VERSION:str='1.0.0'
    env:str='dev'


config=Config()


