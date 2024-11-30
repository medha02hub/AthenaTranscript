const express = require("express");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const { SpeechClient } = require('@google-cloud/speech');
const openai = require("openai");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Summarize transcription route
router.post("/summarize", async (req, res) => {
    const { transcription } = req.body;
  
    try {
      const summary = await openAiClient.completions.create({
        model: "text-davinci-003", // You can choose other models as well
        prompt: `Summarize the following transcription for students: \n\n${transcription}`,
        max_tokens: 100,
      });
  
      const summarizedText = summary.choices[0].text.trim();
      res.status(200).json({
        summary: summarizedText,
      });
    } catch (err) {
      console.error("Error summarizing transcription: ", err);
      res.status(500).send("Error summarizing transcription.");
    }
  });
  
// Initialize OpenAI
const openAiClient = new openai.OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your OpenAI API Key
});

// Initialize Google Cloud Speech-to-Text Client
const speechClient = new SpeechClient();

// Video Upload and Process Route
router.post("/upload", upload.single("video"), async (req, res) => {
  const videoPath = req.file.path;
  const audioPath = `uploads/${req.file.filename}.wav`;

  // Extract audio from video using ffmpeg
  ffmpeg(videoPath)
    .output(audioPath)
    .audioCodec("pcm_s16le")
    .audioChannels(1)
    .audioFrequency(16000)
    .on("end", () => {
      console.log("Audio extraction complete.");
      transcribeAudio(audioPath, res);
    })
    .on("error", (err) => {
      console.log("Error extracting audio: ", err);
      res.status(500).send("Error extracting audio from video.");
    })
    .run();
});

// Function to transcribe audio using Google Cloud Speech-to-Text
async function transcribeAudio(audioPath, res) {
  const file = fs.readFileSync(audioPath);
  const audioBytes = file.toString("base64");

  const request = {
    audio: {
      content: audioBytes,
    },
    config: {
      encoding: "LINEAR16",
      sampleRateHertz: 16000,
      languageCode: "en-US",
    },
  };

  try {
    const [response] = await speechClient.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");

    console.log("Transcription:", transcription);
    res.status(200).json({ transcription });
  } catch (err) {
    console.error("Error transcribing audio: ", err);
    res.status(500).send("Error transcribing audio.");
  }
}

// Function to summarize transcription using OpenAI API
async function summarizeTranscription(transcription, res) {
  try {
    const summary = await openAiClient.completions.create({
      model: "text-davinci-003", // You can choose other models as well
      prompt: `Summarize the following transcription for students: \n\n${transcription}`,
      max_tokens: 100,
    });

    const summarizedText = summary.choices[0].text.trim();
    res.status(200).json({
      transcription,
      summary: summarizedText,
    });
  } catch (err) {
    console.error("Error summarizing transcription: ", err);
    res.status(500).send("Error summarizing transcription.");
  }
}

module.exports = router;
