import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMechanics } from '../redux/actions/mechanicActions';
import { Container, TextField, Button, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
  },
}));

const SearchMechanics = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const mechanics = useSelector((state) => state.mechanic.mechanics);

  useEffect(() => {
    dispatch(fetchMechanics());
  }, [dispatch]);

  const filteredMechanics = mechanics.filter((mechanic) =>
    mechanic.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Search for Mechanics"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredMechanics.map((mechanic) => (
          <Grid item key={mechanic._id} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{mechanic.name}</Typography>
                <Typography variant="body2">{mechanic.address}</Typography>
                <Typography variant="body2">{mechanic.phone}</Typography>
                <Typography variant="body2">{mechanic.email}</Typography>
                <Typography variant="body2">Services: {mechanic.services.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchMechanics;
