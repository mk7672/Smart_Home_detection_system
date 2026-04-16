from ultralytics import YOLO

model = YOLO("yolov8n.pt")

model.train(
    data="config/data.yaml",
    epochs=30,
    imgsz=416,
    batch=4
)