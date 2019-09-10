import types from './types';
import authTypes from '../auth/types';

const INITIAL_STATE = {
  loadingWorkshops: true,
  workshops: []
};

export default function workshop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_WORKSHOPS_REQUEST:
      return { loadingWorkshops: true };
    case types.GET_WORKSHOPS_SUCCESS:
      return {
        loadingWorkshops: false,
        workshops: action.payload.workshops
      };
    case authTypes.SIGN_OUT_REQUEST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
