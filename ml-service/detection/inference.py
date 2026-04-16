from ultralytics import YOLO

model = YOLO("models/best.pt")

def detect_image(image_path):
    results = model(image_path)

    boxes = results[0].boxes

    if boxes is None or len(boxes) == 0:
        return {
            "label": "none",
            "confidence": 0.0
        }

    cls = int(boxes.cls[0])
    conf = float(boxes.conf[0])

    labels = ["person", "dog", "cat"]

    return {
        "label": labels[cls],
        "confidence": conf
    }