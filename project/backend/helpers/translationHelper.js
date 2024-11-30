const axios = require("axios");

const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "en", // Default source language
      target: targetLanguage,
      format: "text",
    }, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    throw error;
  }
};

module.exports = translateText;
