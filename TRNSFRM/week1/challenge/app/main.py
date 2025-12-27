from fastapi import FastAPI,Request
from routers.routes import router
from fastapi.responses import JSONResponse
from core.logging import logger
from core.exception import ServiceUnavailableError

app=FastAPI()

app.include_router(router)

logger.info("Server Started...")



@app.exception_handler(ServiceUnavailableError)
async def service_error(request:Request, exc:Exception)->JSONResponse:
    logger.exception(exc)
    return JSONResponse(
        status_code=503,
        content={ "error": "service_unavailable", "message": "Service Down" }
    )

@app.exception_handler(Exception)
async def global_handler(request:Request,exc:Exception)->JSONResponse:
    logger.exception(exc)
    return JSONResponse(
        status_code=500,
        content={"Message":"We are facing some issue right now try after sometime"}
    )
