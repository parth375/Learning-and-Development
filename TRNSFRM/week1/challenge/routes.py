from fastapi import FastAPI
from TRNSFRM.week1.challenge.service.getStatus import get_status
app=FastAPI()

@app.get('/health')
def get_health():

    '''
    This is an GET API that fetches health of an index as response
    '''
    try:
        return get_status()
    except:
        print('Error occurred while fetching')


