import sys
import os

# Add ml-service root to Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from flask import Flask, request, jsonify
from detection.inference import detect_image
from security.auth import authenticate
from anomaly.anomaly import detect_traffic, detect_bruteforce
from anomaly.ml_anomaly import detect_anomaly
from utils.logger import log_event

app = Flask(__name__)

API_KEY = "secure123"

@app.route('/process', methods=['POST'])
def process():
    print("HEADERS:", dict(request.headers))
    key = request.headers.get("Api_Key")
    if key != API_KEY:
        return jsonify({"error": "Unauthorized"}), 403

    data = request.json

    device_id = data.get("device_id")
    password = data.get("password")
    image_path = data.get("image_path")

    # 🔐 Device auth
    if not authenticate(device_id, password):
        return jsonify({"error": "Invalid device"}), 403

    # 🤖 YOLO Detection
    detection = detect_image(image_path)

    # 🚨 Security checks
    traffic_result = detect_traffic(120)
    brute_result = detect_bruteforce(3)

    detect_anomaly()

    # 📜 Log
    log_event(f"{device_id} → {detection['label']}")

    return jsonify({
        "label": detection["label"],
        "confidence": detection["confidence"],
        "alert": detection["label"] == "person"
    })


if __name__ == "__main__":
    app.run(port=5000)