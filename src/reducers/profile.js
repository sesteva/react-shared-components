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
      };
    default:
      return state;
  }
}
