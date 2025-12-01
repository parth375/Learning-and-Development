from pydantic import BaseModel

class HealthInfo(BaseModel):
    status:str
    app:str


class CheckInfo(BaseModel):
    status:str


class VersionInfo(BaseModel):
    version:str
    app:str