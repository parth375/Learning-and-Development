from schemas.common import HealthInfo

def get_status()->HealthInfo:

    '''
    The API return the heatlh/status of index
    '''
    try:
        return HealthInfo(status="ok")
    except:
        print('Error occurred while fetching')

