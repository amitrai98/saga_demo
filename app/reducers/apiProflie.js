import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: ''
};

export default function apiProflie(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_REQUEST_LOAD_USER_PROFILE:
    console.log('i was called');
      return {
        ...state,
        apiMsg: 'LOAD USER PROFILE API called succeeded!'
      };
      case types.API_REQUEST_SUCCEEDED:
      return {
        ...state,
        apiMsg: 'API called succeeded!'
      };
    case types.API_REQUEST_FAILED:
      return {
        ...state,
        apiMsg: 'API called failed!'
      };
    default:
      return state;
  }
}


