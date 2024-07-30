import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@material-ui/core';

const Checkout = () => {
  const [formData, setFormData] = useState({
    amount: '',
    source: '',
    currency: 'R',
  });

  const { amount, source, currency } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/payment/charge', { amount, source, currency });
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Typography component="h1" variant="h5">
        Checkout
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField variant="outlined" margin="normal" required fullWidth label="Amount" name="amount" value={amount} onChange={onChange} />
        <TextField variant="outlined" margin="normal" required fullWidth label="Source" name="source" value={source} onChange={onChange} />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Pay
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
