import cv2
import os

IMG_DIR = "dataset/images/train"   # 👈 change if needed
LBL_DIR = "dataset/labels/train"

image_files = [f for f in os.listdir(IMG_DIR) if f.endswith((".jpg", ".png", ".jpeg"))]

index = 0

while index < len(image_files):
    file = image_files[index]

    img_path = os.path.join(IMG_DIR, file)
    lbl_path = os.path.join(LBL_DIR, file.rsplit(".", 1)[0] + ".txt")

    img = cv2.imread(img_path)

    if img is None:
        print(f"❌ Error loading: {file}")
        index += 1
        continue

    h, w, _ = img.shape

    # Draw bounding boxes if label exists
    if os.path.exists(lbl_path):
        with open(lbl_path, "r") as f:
            lines = f.readlines()

        for line in lines:
            parts = line.strip().split()
            if len(parts) != 5:
                continue

            cls, xc, yc, bw, bh = map(float, parts)

            x1 = int((xc - bw/2) * w)
            y1 = int((yc - bh/2) * h)
            x2 = int((xc + bw/2) * w)
            y2 = int((yc + bh/2) * h)

            cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.putText(img, str(int(cls)), (x1, y1-5),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0,255,0), 2)

    else:
        print(f"⚠️ No label for: {file}")

    cv2.imshow("Dataset Check", img)

    key = cv2.waitKey(0)

    if key == 27:  # ESC → exit
        break
    elif key == ord('a'):  # go back
        index = max(0, index - 1)
    else:  # next image
        index += 1

cv2.destroyAllWindows()