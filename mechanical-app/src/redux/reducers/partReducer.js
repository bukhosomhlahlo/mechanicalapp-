import { FETCH_PARTS_SUCCESS, FETCH_PARTS_FAIL } from '../actions/types';

const initialState = {
  parts: [],
  loading: true,
  error: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PARTS_SUCCESS:
      return {
        ...state,
        parts: payload,
        loading: false,
      };
    case FETCH_PARTS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
