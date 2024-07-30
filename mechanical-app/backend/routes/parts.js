const express = require('express');
const router = express.Router();
const Part = require('../models/Part');
const { check, validationResult } = require('express-validator');

// @route    POST api/parts
// @desc     Add new part
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('stock', 'Stock is required').isNumeric(),
    check('imageUrl', 'Image URL is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, stock, imageUrl } = req.body;

    try {
      let part = new Part({
        name,
        description,
        price,
        stock,
        imageUrl,
      });

      await part.save();

      res.json({ msg: 'Part added successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/parts
// @desc     Get all parts
// @access   Public
router.get('/', async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
