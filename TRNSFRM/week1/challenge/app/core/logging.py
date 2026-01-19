import logging
from app.core.config import config

logger=logging.getLogger(config.APP_NAME)
logger.setLevel(logging.DEBUG)
console_handler=logging.StreamHandler()
console_handler.setLevel(logging.INFO)
formatter=logging.Formatter(
    "%(asctime)s - %(levelname)s - %(name)s - %(message)s"
)
console_handler.setFormatter(formatter)
logger.addHandler(console_handler)
