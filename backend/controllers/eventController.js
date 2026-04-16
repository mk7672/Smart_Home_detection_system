const Event = require("../models/Event");
const path = require("path");
const fs = require("fs");
const uploadToS3 = require("../utils/uploadToS3");
const detectImage = require("../services/dlService");
const sendNotification = require("../services/notificationService");

exports.uploadEvent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // ✅ Save locally
    const fileName = Date.now() + "-" + req.file.originalname;
    const filePath = path.join(__dirname, "../uploads", fileName);

    fs.writeFileSync(filePath, req.file.buffer);

    // ☁️ Upload to S3
    const s3Result = await uploadToS3(filePath, fileName);
    const imageUrl = s3Result.Location;

    // 🧠 ML Detection
    const detection = await detectImage(filePath);

    const newEvent = new Event({
      image_url: imageUrl,
      label: detection.label,
      confidence: detection.confidence,
    });

    await newEvent.save();

    // 🔔 Alert
    if (detection.alert) {
      await sendNotification(newEvent);
      console.log("🔊 BUZZER ON");
    }

    // 🧹 Optional cleanup
    fs.unlinkSync(filePath);

    res.status(201).json({
      message: "Processed successfully",
      event: newEvent,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  const events = await Event.find().sort({ timestamp: -1 });
  res.json(events);
};