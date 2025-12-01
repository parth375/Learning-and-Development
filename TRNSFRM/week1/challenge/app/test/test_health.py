from fastapi.testclient import TestClient
from app.main import app

client=TestClient(app)

def test_api():
    res=client.get('/health')
    assert res.status_code==200

