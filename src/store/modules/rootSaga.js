import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import workshop from './workshop/saga';

export default function* rootSaga() {
  return yield all([auth, workshop]);
}
