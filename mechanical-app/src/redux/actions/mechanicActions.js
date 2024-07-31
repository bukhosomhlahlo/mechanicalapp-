import axios from 'axios';
import { returnErrors } from './errorActions';
import { REGISTER_MECHANIC_SUCCESS, REGISTER_MECHANIC_FAIL } from './types';

// Register Mechanic
export const registerMechanic = (mechanicData) => (dispatch, getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  axios
    .post('/api/mechanics/register', mechanicData, config)
    .then(res =>
      dispatch({
        type: REGISTER_MECHANIC_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_MECHANIC_FAIL')
      );
      dispatch({
        type: REGISTER_MECHANIC_FAIL,
      });
    });
};
