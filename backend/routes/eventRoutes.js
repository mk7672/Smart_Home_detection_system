const express = require("express");
const multer = require("multer");

// ✅ IMPORT BOTH FUNCTIONS
const { uploadEvent, getEvents } = require("../controllers/eventController");

const router = express.Router();

// ✅ multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ routes
router.post("/upload", upload.single("image"), uploadEvent);
router.get("/", getEvents);

module.exports = router;