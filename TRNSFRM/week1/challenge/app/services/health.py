from schemas.common import HealthInfo,CheckInfo
from typing import Callable
from core.config import config
import logging

logger=logging.getLogger(__name__)

def get_status()->HealthInfo:
    '''
    The function return the heatlh/status of index
    '''
    try:
        return HealthInfo(status="ok",app=config.APP_NAME)
    except Exception as e:
        logger.error(f"Failed: {e}")
        raise


def readiness_check(conn_check:Callable[[],bool])->CheckInfo:
    '''
    The function check Database connection
    '''
    try:
        if conn_check():
            return CheckInfo(status="Connected")
        else:
            return CheckInfo(status="Failed to Connected")
    except Exception as e:
        logger.error(f"Failed: {e}")
        raise

