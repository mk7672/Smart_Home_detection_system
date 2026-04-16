import os
import random
import shutil

IMG_DIR = "dataset/images/train"
LBL_DIR = "dataset/labels/train"

VAL_IMG = "dataset/images/val"
VAL_LBL = "dataset/labels/val"

os.makedirs(VAL_IMG, exist_ok=True)
os.makedirs(VAL_LBL, exist_ok=True)

files = os.listdir(IMG_DIR)
random.shuffle(files)

split = int(0.2 * len(files))  # 20% validation
val_files = files[:split]

for file in val_files:
    shutil.move(os.path.join(IMG_DIR, file), os.path.join(VAL_IMG, file))
    shutil.move(
        os.path.join(LBL_DIR, file.replace(".jpg", ".txt")),
        os.path.join(VAL_LBL, file.replace(".jpg", ".txt"))
    )

print("✅ Train/Val split created")