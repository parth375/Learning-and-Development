from fastapi import APIRouter
from schemas.user import User
user=APIRouter

user.post("/create_user")
def call_create_user_function(data:User):
    pass


user.get("/get_by_id")
def call_get_by_id_function(data:User):
    pass

user.get("/get_all_user")
def call_get_all_user_function(data:User):
    pass
