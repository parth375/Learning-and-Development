from fastapi.testclient import TestClient
from app.main import app

client=TestClient(app)

def testing_health_api():
    res = client.get("/readiness_check")
    assert res.status_code == 503
    assert res.json()["error"] == "service_unavailable"

    # data=res.json()
    # assert data['status']=='ok'
    # assert "app" in data

