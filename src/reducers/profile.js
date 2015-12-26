import * as types from '../constants/ActionTypes';

const initialState = {
  username: 'Default Username'
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      return {
        ...state,
        username: action.username
      }
    case types.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        username: action.response.username
      }
    case types.LOAD_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error.message
      }
    default:
      return state
  }
}
