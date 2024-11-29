const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const videoRoutes = require("./routes/videoRoutes");
const transcriptionRoutes = require("./routes/transcriptionRoutes");
const realTimeRoutes = require("./routes/realTimeRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Enable Cross-Origin Requests (CORS)
app.use(express.json()); // Middleware for parsing JSON bodies

// Define routes
app.use("/api/videos", videoRoutes);
app.use("/api/transcription", transcriptionRoutes);
app.use("/api/real-time", realTimeRoutes);

// Default route for home
app.get("/", (req, res) => {
  res.send("AI Captioning API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

