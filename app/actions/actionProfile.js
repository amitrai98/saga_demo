import * as types from './actionTypes';

export function proflieRequest(payload) {
  return {
    type: types.API_REQUEST_LOAD_USER_PROFILE,
    payload: payload
  }
}

export function apiRequestSucceeded(payload) {
  return {
    type: types.API_REQUEST_SUCCEEDED,
    payload: payload
  }
}

export function apiRequestFailed(payload) {
  return {
    type: types.API_REQUEST_FAILED,
    payload: payload
  }
}
