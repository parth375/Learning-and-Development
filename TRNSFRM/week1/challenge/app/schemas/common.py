from pydantic import BaseModel

class HealthInfo(BaseModel):
    status:str