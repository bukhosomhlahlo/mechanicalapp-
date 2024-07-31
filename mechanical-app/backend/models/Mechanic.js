// const mongoose = require('mongoose');

// const MechanicSchema = new mongoose.Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users',
//       },
//   businessName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   services: [
//     {
//       type: String,
//       required: true,
//     }
//   ],
//   images: {
//     type: [String],
//   },
//   location: {
//     type: {
//       type: String,
//       enum: ['Point'],
//       required: true,
//     },
//   },
// });

// MechanicSchema.index({ location: '2dsphere' });

// module.exports = mongoose.model('Mechanic', MechanicSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to define Schema

const MechanicSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  businessName: {
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
  images: {
    type: [String],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
  },
});

MechanicSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Mechanic', MechanicSchema);
