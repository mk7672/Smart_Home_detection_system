from network_monitor import start_sniffing
from ml_anomaly import detect_anomaly
from logger import log_event

print("=== PHASE 2: NETWORK SECURITY SYSTEM ===\n")

# Step 1: Packet Monitoring
start_sniffing()

# Step 2: ML Anomaly Detection
detect_anomaly()

# Step 3: Logging
log_event("Suspicious activity detected")