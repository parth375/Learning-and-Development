from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from services.health import get_status,readiness_check,check_version,add_values
from .db import db_connect
from core.logging import logger


router=APIRouter()

@router.get('/health')
def get_health():

    '''
    This is an GET API that fetches health of an index as response
    '''
    try:
        return get_status()
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise


@router.get('/readiness_check')
def check_readiness(db:Session=Depends(db_connect)):
    '''
    This is an GET API that checks the readiness of an configuration
    '''
    try:
        return readiness_check(db)
    except Exception as e:
        logger.error(f"Readiness check failed: {e}")
        raise

@router.get('/version')
def get_version():
    '''
    This is an GET API that checks the readiness of an configuration
    '''
    try:
        return check_version()
    except Exception as e:
        logger.error(f"Readiness check failed: {e}")
        raise

@router.post('/check_sum')
def get_sum(data:dict):
 
    return add_values(data['a'],data['b'])
  
   
    