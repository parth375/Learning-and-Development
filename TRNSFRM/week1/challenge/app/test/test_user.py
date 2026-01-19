from fastapi.testclient import TestClient
from app.main import app

client=TestClient(app)

def testing_create_user():
    res=client.post("/create_user",json={"name":"Marlo","email":"mb@yt.com"})
    assert res.status_code==200
    assert res.json()['msg']=="User created"

def testing_fetch_user():
    res=client.get("/get_all_user")
    assert res.status_code==200
    assert res.json()['msg']=="Fetched all user"