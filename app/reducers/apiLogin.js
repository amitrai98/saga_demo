import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: '',
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};


export default function apiLogin(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_REQUEST_LOGIN:
    console.log('i was called');
      return {
        ...state,
        data: [],
        apiMsg:'received login request',
        isFetching: true
      };
      case types.API_REQUEST_SUCCEEDED_LOGIN:
      console.log('payload received is '+JSON.stringify(action.data_is));
      return {
        ...state,
        isFetching: false,
        apiMsg:'login success',
        data: action.data_is
      };
    case types.API_REQUEST_FAILED_LOGIN:
      return {
        ...state,
        apiMsg:'login failed',
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}


