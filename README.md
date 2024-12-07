

# AthenaTranscript: Video Upload and Real-Time Captioning Platform

A React-based web application that allows users to upload videos, transcribe them, edit captions, and perform real-time speech-to-text with optional language translation.

---

## **Table of Contents**
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [APIs Used](#apis-used)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Features**

### 1. **Video Upload and Transcription**
- Upload video files and get their transcription using backend processing.
- Optionally summarize the transcription for easier understanding.

### 2. **Real-Time Captioning**
- Provides real-time speech-to-text captions using the Web Speech API.
- Optionally translate the captions into multiple languages (e.g., Hindi, Tamil, Bengali).

### 3. **Caption Editing**
- Edit captions for uploaded videos directly in the app.

### 4. **Transcription Editing**
- Edit or modify transcriptions generated from uploaded videos.

### 5. **Interactive Navbar**
- Navigate seamlessly between sections like Video Upload, Caption Editing, and Real-Time Captioning.

---

## **Installation**

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (version 16 or above)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/athena.git
   cd athena
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## **Usage**

### Navigation
1. **Upload Video**: Upload a video to generate transcription and optionally summarize it.
2. **Edit Captions**: Modify the captions for the uploaded video.
3. **Edit Transcriptions**: Edit or update the generated transcription.
4. **Real-Time Captioning**: Enable real-time speech recognition and optional translation.

---

## **Folder Structure**

Here’s an overview of the project structure:

```
src/
├── components/
│   ├── CaptionEditor.js          # Caption Editing Component
│   ├── Navbar.js                 # Navbar for navigation
│   ├── RealTimeCaptioning.js     # Real-time speech-to-text and translation
│   ├── TranscriptionEditor.js    # Transcription Editing Component
│   ├── VideoUpload.js            # Video Upload Component
├── App.js                         # Main application entry
├── App.css                        # Global styling
├── index.js                       # Entry point for React
├── index.css                      # Global CSS
```

---

## **APIs Used**

1. **SpeechRecognition API**
   - Used for real-time speech-to-text conversion.
   
2. **MyMemory Translation API**
   - Provides translation for live captions into various languages.

3. **Backend Video Processing (Placeholder)**
   - `POST /api/videos/upload`: Handles video upload and transcription.
   - `POST /api/videos/summarize`: Summarizes the transcription.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to customize this documentation further based on your specific project setup! Let me know if you’d like help with any section.
