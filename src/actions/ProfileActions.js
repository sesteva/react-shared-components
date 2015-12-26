import * as types from '../constants/ActionTypes'
import ApiUtils from './apiUtil'

export function updateProfile(username) {
  return { type: types.UPDATE_PROFILE, username: username}
}

export function loadProfileSuccess(userId, response) {
  return {
    type: types.LOAD_PROFILE_SUCCESS,
    userId,
    response
  }
}

export function loadProfileFailure(userId, error){
  return {
    type: types.LOAD_PROFILE_FAILURE,
    userId,
    error
  }
}

export function loadProfileRequest(userId){
  return {
    type: types.LOAD_PROFILE_REQUEST,
    userId
  }
}

export function loadProfile(userId){
  return function (dispatch, getState){
    let { users } = getState()
    if(users && users[userId]) {
      return
    }
    dispatch(loadProfileRequest(userId))
    fetch('http://192.168.1.112:2403/users/'+ userId)
      .then(ApiUtils.checkStatus)
      .then( res => res.json() )
      .then( response => dispatch( loadProfileSuccess(userId, response)))
      .catch( error => dispatch( loadProfileFailure(userId, error)) )

  }
}
