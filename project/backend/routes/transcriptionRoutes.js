const express = require('express');
const Transcription = require('../models/Transcription'); // Your transcription model
const router = express.Router();

// Example route to get all transcriptions
router.get('/', async (req, res) => {
  try {
    const transcriptions = await Transcription.find();
    res.status(200).json(transcriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transcriptions', error });
  }
});

// Example route to create a new transcription
router.post('/', async (req, res) => {
  const { text, videoId } = req.body;
  const transcription = new Transcription({ text, videoId });
  try {
    await transcription.save();
    res.status(200).json({ message: 'Transcription saved', transcription });
  } catch (error) {
    res.status(500).json({ message: 'Error saving transcription', error });
  }
});

// You can also define other routes for editing, deleting transcriptions, etc.

module.exports = router;
