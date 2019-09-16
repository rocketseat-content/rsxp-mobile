import { Alert } from 'react-native';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getWorkshops, subscribe } from '../../../services/workshop';
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

export function* subscribeToWorkshop({ payload }) {
  const { id: workshopId } = payload;
  try {
    yield call(subscribe, workshopId);

    Alert.alert('Parabéns, sua inscrição para esse workshop está confirmada!');
  } catch (err) {
    Alert.alert(err.response.data.error);
  }
}

export default all([
  takeLatest(types.GET_WORKSHOPS_REQUEST, getWorkshopsRequest),
  takeLatest(types.SUBSCRIBE_TO_WORKSHOP, subscribeToWorkshop)
]);
