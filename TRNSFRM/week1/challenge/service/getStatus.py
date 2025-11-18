from pydantic import BaseModel

class HealthInfo(BaseModel):
    status:str

def get_status()->HealthInfo:

    '''
    The API return the heatlh/status of index
    '''
    try:
        return HealthInfo(status="ok")
    except:
        print('Error occurred while fetching')

