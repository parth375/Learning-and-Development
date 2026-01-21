from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.user import UserCreate, UserRead
from app.services.user import create_user, get_user_by_id, get_all_users

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/", response_model=UserRead)
def create_user_endpoint(
    user_in: UserCreate,
    db: Session = Depends(get_db),
):
    return create_user(db, user_in)


@router.get("/{user_id}", response_model=UserRead)
def get_user_endpoint(
    user_id: int,
    db: Session = Depends(get_db),
):
    return get_user_by_id(db, user_id)


@router.get("/", response_model=list[UserRead])
def list_users_endpoint(
    db: Session = Depends(get_db),
):
    return get_all_users(db)
