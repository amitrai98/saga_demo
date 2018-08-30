import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

export function* handleUserSearchRequest(action) {
  try {
    console.log('api is about to call');
    const apiConfig = {
      method: 'get',
      url: 'https://api.github.com/search/users?q='+action.username+'',
      
      setTimeout:1000
    };
    const response = yield call(axios, apiConfig);
    console.log("response is "+JSON.stringify( response.data));
    yield put({type: types.API_REQUEST_SUCCEEDED_SEARCH_USER, data_is: response });
  } catch (e) {
    console.log(e);
    yield put({type: types.API_REQUEST_FAILED_SEARCH_USER, payload: e.message });
  }
}


export function* watchUserSearchRequest() {
  console.log('api is about to call');
  yield takeEvery(types.API_REQUEST_SEARCH_USER, handleUserSearchRequest);
}
