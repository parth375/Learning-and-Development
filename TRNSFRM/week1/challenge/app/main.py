import logging
from fastapi import FastAPI
from routers.routes import router

logger=logging.getLogger(__name__)

app=FastAPI()

app.include_router(router)

logger.info("Server Started....")
