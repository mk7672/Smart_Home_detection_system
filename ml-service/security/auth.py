registered_devices = {
    "cam_01": "pass123",
    "sensor_01": "pass456"
}

def authenticate(device_id, password):
    if device_id in registered_devices:
        if registered_devices[device_id] == password:
            return True
    return False