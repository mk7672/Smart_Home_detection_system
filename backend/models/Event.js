// models/Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  confidence: {
    type: Number,
    required: true,
  },
  device_id: {
    type: String,
    default: "cam_1",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", EventSchema); 