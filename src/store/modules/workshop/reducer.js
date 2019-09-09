import types from './types';

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
    default:
      return state;
  }
}
