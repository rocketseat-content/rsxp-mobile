import { combineReducers } from 'redux';

import auth from './auth/reducer';
import workshop from './workshop/reducer';

export default combineReducers({
  auth,
  workshop
});
