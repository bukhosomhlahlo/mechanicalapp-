import axios from 'axios';
import { FETCH_MECHANICS_SUCCESS, FETCH_MECHANICS_FAIL } from './types';

export const fetchMechanics = () => async dispatch => {
  try {
    const res = await axios.get('/api/mechanics');

    dispatch({
      type: FETCH_MECHANICS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_MECHANICS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
