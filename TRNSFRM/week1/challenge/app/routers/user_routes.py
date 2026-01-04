from fastapi import APIRouter
from schemas.user import User
from services.user import create_user,fetch_all_users,fetch_user_by_id

user=APIRouter()

@user.post("/create_user")
def call_create_user_function(data:User):
    return create_user(data.name,data.email)


@user.get("/get_by_id")
def call_get_by_id_function(id:int):
    return fetch_user_by_id(id)

@user.get("/get_all_user")
def call_get_all_user_function():
    return fetch_all_users()
