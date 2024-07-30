import { REGISTER_MECHANIC_SUCCESS, REGISTER_MECHANIC_FAIL, FETCH_MECHANICS_SUCCESS, FETCH_MECHANICS_FAIL } from '../actions/types';

const initialState = {
  mechanics: [],
  loading: true,
  error: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_MECHANIC_SUCCESS:
      return {
        ...state,
        mechanics: [...state.mechanics, payload],
        loading: false,
      };
    case FETCH_MECHANICS_SUCCESS:
      return {
        ...state,
        mechanics: payload,
        loading: false,
      };
    case REGISTER_MECHANIC_FAIL:
    case FETCH_MECHANICS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
