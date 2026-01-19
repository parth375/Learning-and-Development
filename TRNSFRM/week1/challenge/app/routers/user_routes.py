from fastapi import APIRouter
from app.schemas.user import User
from fastapi import Depends
from sqlalchemy.orm import Session
from .db import db_connect
from app.services.user import create_user,fetch_all_users,fetch_user_by_id

user=APIRouter()

@user.post("/create_user")
def call_create_user_function(data:User,db:Session=Depends(db_connect)):
    return create_user(data.name,data.email,db)


@user.get("/get_by_id")
def call_get_by_id_function(id:int,db:Session=Depends(db_connect)):
    return fetch_user_by_id(id,db)

@user.get("/get_all_user")
def call_get_all_user_function(db:Session=Depends(db_connect)):
    return fetch_all_users(db)
