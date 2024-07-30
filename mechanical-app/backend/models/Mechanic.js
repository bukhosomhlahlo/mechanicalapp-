const mongoose = require('mongoose');

const MechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  services: [
    {
      type: String,
      required: true,
    }
  ],
  rating: {
    type: Number,
    default: 0,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
});

MechanicSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Mechanic', MechanicSchema);
