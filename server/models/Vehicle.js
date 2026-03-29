import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  origin: {
    type: String,
    enum: ['China', 'Other'],
    default: 'China',
  },
  condition: {
    type: String,
    enum: ['New', 'Used'],
    required: true,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['Available', 'In Transit', 'Sold'],
    default: 'Available',
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
