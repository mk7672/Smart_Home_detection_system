from sklearn.ensemble import IsolationForest
import numpy as np

def detect_anomaly():
    print("\nRunning ML-based anomaly detection...")

    data = np.array([[10], [12], [15], [200], [14]])

    model = IsolationForest(contamination=0.2)
    model.fit(data)

    predictions = model.predict(data)

    for i, val in enumerate(predictions):
        if val == -1:
            print(f"🚨 Anomaly detected in traffic: {data[i][0]}")
        else:
            print(f"Normal traffic: {data[i][0]}")