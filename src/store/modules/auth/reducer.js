import types from './types';

const INITIAL_STATE = {
  token: null,
  user: {},
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case types.SIGN_IN_SUCCESS:
      return {
        token: action.payload.token,
        user: action.payload.user,
        signed: true,
        loading: false,
      };
    case types.SIGN_IN_FAILURE:
      return { ...state, loading: false };
    case types.ACCEPT_REGULATION:
      return { ...state, user: { ...state.user, accepted_regulation: true } };
    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload.data } };
    case types.SIGN_OUT_REQUEST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
