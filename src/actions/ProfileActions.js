import * as types from '../constants/ActionTypes'

export function updateProfile(username) {
  return { type: types.UPDATE_PROFILE, username: username}
}
