from schemas.common import HealthInfo,CheckInfo,VersionInfo
from typing import Callable
from core.config import config
from core.logging import logger
from core.exception import ServiceUnavailableError


def get_status()->HealthInfo:
    '''
    The function return the heatlh/status of index
    '''
    try:
        logger.info("API HIT")
        return HealthInfo(status="ok",app=config.APP_NAME)
    except Exception as e:
        logger.error(f"Failed to fetch health data: {e}")
        raise


def readiness_check(conn_check:Callable[[],bool])->CheckInfo:
    '''
    The function check Database connection
    '''
    try:
        if conn_check():
            return CheckInfo(status="connected")
        else:
           raise ServiceUnavailableError("Dependency check failed")
    except Exception as e:
        logger.error(f"Readiness check failed: {e}")
        raise
        

def check_version()->VersionInfo:
    """
    Return service version information.
    """
    try:
       return VersionInfo(version=config.APP_VERSION, app=config.APP_NAME)
    except Exception as e:
        logger.error(f"Version check failed: {e}")
        raise

def add_values(a:int, b:int) -> int:
    try:
       return a+b
    except Exception:
       logger.exception("Error Occured")
       raise ServiceUnavailableError()
 