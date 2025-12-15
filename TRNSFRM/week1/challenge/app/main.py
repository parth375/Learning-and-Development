from fastapi import FastAPI, HTTPException, Request
from routers.routes import router
from fastapi.responses import JSONResponse
from core.logging import logger

app=FastAPI()

app.include_router(router)

logger.info("Server Started...")


# @app.exception_handler(Exception)
# def global_exception_handler(request:Request, exc:Exception)-> JSONResponse:
#     return JSONResponse(
#          status_code=503,
#         content={
#             "error": "service_unavaiable",
#             "message": "Something went wrong. Please try again later."
#         }
#     )


