# === PHASE 3: FINAL NS SYSTEM ===

from auth import authenticate
from encryption import encrypt_data
from ml_anomaly import detect_anomaly
from logger import log_event
import requests


# Simulated IoT device
def get_device_data():
    return {
        "device_id": "cam_01",
        "password": "pass123",
        "data": "motion_detected"
    }


def verify_device(device):
    return authenticate(device["device_id"], device["password"])


def secure_data(device):
    encrypted = encrypt_data(str(device))
    return encrypted.decode()   # convert bytes → string

def send_to_server(data):
    try:
        response = requests.post(
            "http://127.0.0.1:5000/data",
            headers={"Api-Key": "secure123"},
            json={"payload": data}
        )
        print("Server Response:", response.json())
    except Exception as e:
      print("⚠️ Error connecting to server:", e)

# === MAIN EXECUTION ===

print("=== PHASE 3: FINAL NS SYSTEM ===\n")

device = get_device_data()

if verify_device(device):
    print("✅ Device authenticated")

    encrypted = secure_data(device)
    print("🔒 Encrypted data:", encrypted)

    print("\nRunning anomaly detection...")
    detect_anomaly()

    send_to_server(encrypted)

    log_event("Secure transmission completed")

else:
    print("❌ Unauthorized device blocked")