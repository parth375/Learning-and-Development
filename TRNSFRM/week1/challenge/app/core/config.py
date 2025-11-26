from pydantic_settings import BaseSettings

class Config(BaseSettings):
    APP_NAME:str='health-backend'
    env:str='dev'


config=Config()
