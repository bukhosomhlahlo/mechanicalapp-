const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/charge', async (req, res) => {
  const { amount, source, currency } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });

    res.json(charge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
