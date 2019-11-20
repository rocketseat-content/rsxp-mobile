import types from './types';

export function signInRequest(email, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function updateProfileSuccess(data) {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
    payload: { data },
  };
}

export function signInFailure() {
  return {
    type: types.SIGN_IN_FAILURE,
  };
}

export function signOutRequest() {
  return {
    type: types.SIGN_OUT_REQUEST,
  };
}

export function acceptRegulation() {
  return {
    type: types.ACCEPT_REGULATION,
  };
}
