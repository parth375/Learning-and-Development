from schemas.common import HealthInfo
from typing import Callable
import logging

logger=logging.getLogger(__name__)

def get_status()->HealthInfo:

    '''
    The function return the heatlh/status of index
    '''
    try:
        return HealthInfo(status="ok")
    except:
        print('Error occurred while fetching')



def readhiness_check(conn_check:Callable[[],bool]):
    '''
    The function check Database connection
    '''
    try:
        if conn_check():
            return{"Connected"}
        else:
            return{"Not Connectef"}
    except:
      print('Error occurred')