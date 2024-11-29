const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const videoRoutes = require('./routes/videoRoutes');
const transcriptionRoutes = require('./routes/transcriptionRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // For parsing JSON bodies

// API Routes
app.use('/api/videos', videoRoutes); // Use the videoRoutes
app.use('/api/transcription', transcriptionRoutes); // Use the transcriptionRoutes

// Root route for testing purposes
app.get('/', (req, res) => {
  res.send('Welcome to the AI Captioning API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
