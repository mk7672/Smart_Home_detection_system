def start_sniffing():
    print("Simulating packet capture...\n")
    
    packets = [
        "Normal Packet",
        "Normal Packet",
        "High Traffic Packet",
        "Normal Packet",
        "Suspicious Packet"
    ]
    
    for p in packets:
        print("Packet captured:", p)