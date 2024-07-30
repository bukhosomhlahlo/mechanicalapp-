import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mechanicReducer from './mechanicReducer';
import partReducer from './partReducer';

export default combineReducers({
  auth: authReducer,
  mechanic: mechanicReducer,
  part: partReducer,
});
