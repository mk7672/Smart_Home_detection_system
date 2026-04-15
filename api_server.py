from flask import Flask, request

app = Flask(__name__)

API_KEY = "secure123"

@app.route('/data', methods=['POST'])
def receive_data():
    key = request.headers.get("API_KEY")

    if key != API_KEY:
        return {"error": "Unauthorized"}, 403

    return {"status": "Secure data received"}

if __name__ == "__main__":
    app.run(port=5000)