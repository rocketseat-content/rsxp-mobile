import types from './types';

export function signInRequest(email, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function signInSuccess(token) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token }
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
    payload: {}
  };
}
