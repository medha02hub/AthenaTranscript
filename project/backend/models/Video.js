const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  path: { type: String, required: true },
});

module.exports = mongoose.model("Video", videoSchema);
