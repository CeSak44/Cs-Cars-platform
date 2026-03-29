import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import trackingRoutes from './routes/tracking.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/track-container', trackingRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'CS Cars API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
