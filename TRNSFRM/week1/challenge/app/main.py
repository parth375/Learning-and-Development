import logging
from fastapi import FastAPI, HTTPException, Request
from routers.routes import router
from fastapi.responses import JSONResponse

logger=logging.getLogger(__name__)

app=FastAPI()

app.include_router(router)

@app.exception_handler(Exception)
def global_exception_handler(request:Request, exc:Exception)-> JSONResponse:
    return JSONResponse(
         status_code=503,
        content={
            "error": "service_unavaiable",
            "message": "Something went wrong. Please try again later."
        }
    )


