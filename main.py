from auth import authenticate
from encryption import encrypt_data, decrypt_data
from anomaly import detect_traffic, detect_bruteforce

print("=== CYBER-SECURE SMART HOME SYSTEM ===\n")

# Step 1: Device Authentication
device_id = "cam_01"
password = "pass123"

print("Checking device authentication...")
auth_result = authenticate(device_id, password)
print("Authentication result:", auth_result)

if auth_result:
    print("✅ Device authenticated successfully\n")

    # Step 2: Secure Communication (Encryption)
    message = "Intrusion detected in living room"
    print("Original message:", message)

    encrypted = encrypt_data(message)
    print("🔐 Encrypted message:", encrypted)

    decrypted = decrypt_data(encrypted)
    print("🔓 Decrypted message:", decrypted, "\n")

    # Step 3: Network Traffic Monitoring
    traffic = 150
    print("Analyzing network traffic:", traffic)
    print(detect_traffic(traffic), "\n")

    # Step 4: Brute Force Attack Detection
    attempts = 7
    print("Checking login attempts:", attempts)
    print(detect_bruteforce(attempts))

else:
    print("❌ Unauthorized device detected")