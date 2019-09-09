import { Alert } from 'react-native';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getWorkshops } from '../../../services/workshop';
import { getWorkshopsSuccess } from './actions';

import types from './types';

export function* getWorkshopsRequest() {
  try {
    const response = yield call(getWorkshops);

    const workshops = response.data;

    yield put(getWorkshopsSuccess(workshops));
  } catch (err) {
    Alert.alert(
      'Houve um erro ao carregar os workshops. Por favor, tente novamente mais tarde.'
    );
  }
}

export default all([
  takeLatest(types.GET_WORKSHOPS_REQUEST, getWorkshopsRequest)
]);
