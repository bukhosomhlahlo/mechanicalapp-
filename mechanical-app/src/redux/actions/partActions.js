import axios from 'axios';
import { FETCH_PARTS_SUCCESS, FETCH_PARTS_FAIL } from './types';

export const fetchParts = () => async dispatch => {
  try {
    const res = await axios.get('/api/parts');

    dispatch({
      type: FETCH_PARTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PARTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
