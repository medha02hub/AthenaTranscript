const multer = require("multer");
const path = require("path");
const Video = require("../models/Video");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Video upload handler
exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Save video details to database
    const video = new Video({ path: req.file.path });
    await video.save();

    // Placeholder: Add captioning logic here
    const captions = [
      { start: 0, end: 5, text: "Welcome to the video" },
      { start: 6, end: 10, text: "This is an AI captioning demo" },
    ];

    res.status(200).json({
      videoUrl: `http://localhost:5000/${req.file.path}`,
      captions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Middleware to handle file uploads
exports.uploadMiddleware = upload.single("video");
