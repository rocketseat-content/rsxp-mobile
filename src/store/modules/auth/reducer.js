import types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { loading: true };
    case types.SIGN_IN_SUCCESS:
      return {
        token: action.payload.token,
        signed: true
      };
    default:
      return state;
  }
}
