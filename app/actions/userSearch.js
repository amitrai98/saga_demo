import * as types from './actionTypes';
import {actions} from './index';

export function serachUser(payload) {
  return {
    type: types.API_REQUEST_SEARCH_USER,
    isLoading: true,
    payload: payload
  }
}

export function apiRequestSucceeded(payload) {
  return {
    type: types.API_REQUEST_SUCCEEDED_SEARCH_USER,
    isLoading: false,
    payload: payload
  }
}

export function apiRequestFailed(payload) {
  return {
    type: types.API_REQUEST_FAILED_SEARCH_USER,
    isLoading: false,
    payload:payload
  }
}


