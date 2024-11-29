const mongoose = require("mongoose");

const transcriptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
});

module.exports = mongoose.model("Transcription", transcriptionSchema);
