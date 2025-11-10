from fastapi import FastAPI
from service import get_status
app=FastAPI()

@app.get('/health')
def get_health():

    '''
    The API return the heatlh/status of index
    '''
    try:
        return get_status()
    except:
        print('Error occurred while fetching')


