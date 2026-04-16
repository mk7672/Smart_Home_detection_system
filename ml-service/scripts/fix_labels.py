import os

LABEL_DIR = "dataset/labels"

# COCO → YOUR mapping
mapping = {
    0: 0,   # person
    16: 1,  # dog
    15: 2   # cat
}

for root, dirs, files in os.walk(LABEL_DIR):
    for file in files:
        if not file.endswith(".txt"):
            continue

        path = os.path.join(root, file)

        with open(path, "r") as f:
            lines = f.readlines()

        new_lines = []
        for line in lines:
            parts = line.strip().split()
            cls = int(parts[0])

            if cls in mapping:
                new_cls = mapping[cls]
                new_lines.append(" ".join([str(new_cls)] + parts[1:]))

        # overwrite with ONLY relevant classes
        with open(path, "w") as f:
            f.write("\n".join(new_lines))

print("✅ Fixed class mapping + removed unwanted labels")