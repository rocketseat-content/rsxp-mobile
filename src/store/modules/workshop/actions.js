import types from './types';

export function getWorkshopsRequest() {
  return {
    type: types.GET_WORKSHOPS_REQUEST,
    payload: {}
  };
}

export function getWorkshopsSuccess(workshops) {
  return {
    type: types.GET_WORKSHOPS_SUCCESS,
    payload: { workshops }
  };
}
