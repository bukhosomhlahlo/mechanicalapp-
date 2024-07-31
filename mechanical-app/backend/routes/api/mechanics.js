const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Mechanic = require('../../models/Mechanic');
const cloudinary = require('../../config/cloudinary');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/',
  upload.single('image'),
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('services', 'Services are required').isArray().not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
  ],
  async (req, res) => {
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

      let imageUrl = '';
      if (req.file) {
        const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) {
            throw error;
          }
          imageUrl = result.secure_url;
        }).end(req.file.buffer);
      }

      mechanic = new Mechanic({
        name,
        email,
        phone,
        address,
        services,
        location,
        imageUrl,
      });

      await mechanic.save();

      res.json({ msg: 'Mechanic registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.json(mechanics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
