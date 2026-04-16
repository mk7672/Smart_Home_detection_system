import fiftyone as fo
import fiftyone.zoo as foz

classes = ["person", "dog", "cat"]

dataset = foz.load_zoo_dataset(
    "coco-2017",
    split="train",
    label_types=["detections"],
    classes=classes,
    max_samples=800,
    shuffle=True
)

# 🔥 FILTER ONLY REQUIRED OBJECTS
dataset = dataset.filter_labels(
    "ground_truth",
    fo.ViewField("label").is_in(classes)
)

# 🔀 SPLIT DATASET
dataset = dataset.shuffle()

train_size = int(0.8 * len(dataset))
train_view = dataset[:train_size]
val_view = dataset[train_size:]

# 📦 EXPORT TRAIN
train_view.export(
    export_dir="dataset",
    dataset_type=fo.types.YOLOv5Dataset,
    label_field="ground_truth",
    split="train"
)

# 📦 EXPORT VAL
val_view.export(
    export_dir="dataset",
    dataset_type=fo.types.YOLOv5Dataset,
    label_field="ground_truth",
    split="val"
)

print("✅ CLEAN dataset ready (train + val + correct labels)")