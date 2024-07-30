import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../redux/actions/partActions';
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
  },
}));

const PartsStore = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const parts = useSelector((state) => state.part.parts);

  useEffect(() => {
    dispatch(fetchParts());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={2}>
        {parts.map((part) => (
          <Grid item key={part._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{part.name}</Typography>
                <Typography variant="body2">{part.description}</Typography>
                <Typography variant="body2">${part.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PartsStore;
