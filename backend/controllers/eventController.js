const Event = require("../models/Event");
const s3 = require("../config/s3");
const { v4: uuidv4 } = require("uuid");

exports.uploadEvent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // ✅ Upload to S3 manually
    const key = `images/${uuidv4()}-${req.file.originalname}`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    const uploadResult = await s3.upload(params).promise();

    const imageUrl = uploadResult.Location;

    // ✅ Save to MongoDB
    const newEvent = new Event({
      image_url: imageUrl,
      label: "human",
confidence: 0.9,
    });

    await newEvent.save();

    res.status(201).json({
      message: "Uploaded successfully",
      event: newEvent,
    });

  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
};


// ✅ GET EVENTS (IMPORTANT — fixes previous error too)
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ timestamp: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};