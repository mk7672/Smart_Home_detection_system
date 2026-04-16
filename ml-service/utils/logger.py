import logging

logging.basicConfig(filename="security.log", level=logging.INFO)

def log_event(message):
    logging.info(message)
    print("Logged:", message)