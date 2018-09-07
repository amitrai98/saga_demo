import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: '',
};

export default function apiLogin(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_REQUEST_LOGIN:
    console.log('i was called');
      return {
        ...state,
        apiMsg: 'LOAD USER PROFILE API called succeeded!'
      };
      case types.API_REQUEST_SUCCEEDED_LOGIN:
      console.log('payload received is '+JSON.stringify(action.data_is));
      return {
        ...state,
        apiMsg: 'API called succeeded!'
      };
    case types.API_REQUEST_FAILED_LOGIN:
      return {
        ...state,
        apiMsg: 'API called failed!'
      };
    default:
      return state;
  }
}


