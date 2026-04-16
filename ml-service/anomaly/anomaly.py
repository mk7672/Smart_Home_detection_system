def detect_traffic(traffic):
    if traffic > 100:
        return "🚨 Suspicious traffic detected"
    return "Normal traffic"

def detect_bruteforce(attempts):
    if attempts > 5:
        return "🚨 Brute force attack detected"
    return "Safe"