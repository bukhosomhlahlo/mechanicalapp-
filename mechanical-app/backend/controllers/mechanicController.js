// Placeholder file if you want to move logic from routes/mechanics.js to controllers/mechanicController.js

// Example:
const Mechanic = require('../models/Mechanic');
const { validationResult } = require('express-validator');

exports.registerMechanic = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, address, services, location } = req.body;

  try {
    let mechanic = await Mechanic.findOne({ email });

    if (mechanic) {
      return res.status(400).json({ msg: 'Mechanic already exists' });
    }

    mechanic = new Mechanic({
      name,
      email,
      phone,
      address,
      services,
      location,
    });

    await mechanic.save();

    res.json({ msg: 'Mechanic registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.json(mechanics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
