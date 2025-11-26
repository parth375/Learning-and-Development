from fastapi import FastAPI
import logging
from TRNSFRM.week1.challenge.app.service.health import get_status
from TRNSFRM.week1.challenge.app.service.health import readhiness_check
from TRNSFRM.week1.challenge.app.core.config import db_connect

logger=logging.getLogger(__name__)

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



@app.get('/readniess')
def get_health():

    '''
    This is an GET API that fetches health of an index as response
    '''
    try:
        return readhiness_check(db_connect)
    except:
        print('Error occurred while fetching')



