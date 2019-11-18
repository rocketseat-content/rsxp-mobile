import types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  accepted_regulation: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...state,  loading: true };
    case types.SIGN_IN_SUCCESS:
      return {
        token: action.payload.token,
        accepted_regulation: action.payload.accepted_regulation,
        signed: true,
        loading: false,
      };
    case types.SIGN_IN_FAILURE:
      return { ...state, loading: false };
    case types.ACCEPT_REGULATION:
      return { ...state, accepted_regulation: true };
    case types.SIGN_OUT_REQUEST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
