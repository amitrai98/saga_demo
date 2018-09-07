import * as types from './actionTypes';

export function LoginRequest(payload) {
  return {
    type: types.API_REQUEST_LOGIN,
    payload: payload
  }
}

export function apiLoginRequestSucceeded(payload) {
  return {
    type: types.API_REQUEST_SUCCEEDED_LOGIN,
    payload: payload
  }
}

export function apiLoginRequestFailed(payload) {
  return {
    type: types.API_REQUEST_FAILED_LOGIN,
    payload: payload
  }
}
