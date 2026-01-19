from fastapi.testclient import TestClient
from app.main import app

client=TestClient(app)

def testing_health_api_200():
    res = client.get("/readiness_check")
    assert res.status_code == 200
    assert res.json()["status"] == "connected"


def testing_health_api_error():
    res = client.get("/readiness_check")
    assert res.status_code == 503
    assert res.json()["error"] == "service_unavailable"


