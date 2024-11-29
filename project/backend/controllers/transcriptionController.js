// backend/controllers/transcriptionController.js
const Transcription = require("../models/Transcription");
const Video = require("../models/Video");

// Controller to generate and save transcription
const generateTranscription = async (req, res) => {
  const { videoId, transcriptionText } = req.body;

  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const transcription = new Transcription({
      text: transcriptionText,
      videoId: video._id,
    });

    await transcription.save();
    res.status(201).json({ message: "Transcription saved successfully", transcription });
  } catch (error) {
    console.error("Error generating transcription:", error);
    res.status(500).json({ message: "Error generating transcription" });
  }
};

// Controller to get transcription by video ID
const getTranscriptionByVideoId = async (req, res) => {
  try {
    const transcription = await Transcription.findOne({ videoId: req.params.videoId });
    if (!transcription) {
      return res.status(404).json({ message: "Transcription not found" });
    }
    res.status(200).json(transcription);
  } catch (error) {
    console.error("Error fetching transcription:", error);
    res.status(500).json({ message: "Error fetching transcription" });
  }
};

module.exports = { generateTranscription, getTranscriptionByVideoId };
