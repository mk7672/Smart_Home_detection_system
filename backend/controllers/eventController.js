const Event = require("../models/Event");
const path = require("path");
const fs = require("fs");

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

    const imageUrl = `http://localhost:3000/uploads/${fileName}`;

    // 🔥 ML + SECURITY
    const detection = await detectImage(filePath);

    const newEvent = new Event({
      image_url: imageUrl,
      label: detection.label,
      confidence: detection.confidence,
    });

    await newEvent.save();

    if (detection.alert) {
      await sendNotification(newEvent);
      console.log("🔊 BUZZER ON");
    }

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