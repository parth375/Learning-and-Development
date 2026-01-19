from app.schemas.common import HealthInfo,CheckInfo,VersionInfo
from app.core.config import config
from app.core.logging import logger
from app.core.exception import ServiceUnavailableError


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


def readiness_check(db)->CheckInfo:
    '''
    The function check Database connection
    '''
    try:
        if db:
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
 