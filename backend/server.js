require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");

const app = express(); // ✅ MUST BE FIRST

// ✅ CORS (VERY IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/events", eventRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});