// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint to check server
app.get('/', (req, res) => {
  res.send('Alt-text backend is running!');
});

// Alt-text generation endpoint (mock for now)
app.post('/api/generate-alt-text', (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ error: 'No image URL provided.' });
  }

  // Temporary placeholder until AI integration
  const altText = "A placeholder description of the image.";

  res.json({ altText });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
