const express = require("express");
const router = express.Router();
const translateText = require("../helpers/translationHelper");

// POST: Translate real-time text
router.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Text and target language are required." });
  }

  try {
    const translatedText = await translateText(text, targetLanguage);
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: "Translation failed." });
  }
});

module.exports = router;
