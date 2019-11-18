import { all } from 'redux-saga/effects';

import auth from './auth/saga';

export default function* rootSaga() {
  return yield all([auth]);
}
