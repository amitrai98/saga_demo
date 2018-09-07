import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

export function* handleLoginRequest(action) {
  try {
    console.log('api is about to call');
    const apiConfig = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        section_id: '1',
        // password: action.payload.password
      },
      setTimeout:1000
    };
    const response = yield call(axios, apiConfig);
    console.log("response is "+JSON.stringify( response.data));
    yield put({type: types.API_REQUEST_SUCCEEDED_LOGIN, data_is: response.data});
  } catch (e) {
    console.log(e);
    yield put({type: types.API_REQUEST_FAILED_LOGIN, payload: e.message });
  }
}


export function* watchLoginRequest() {
  console.log('api is about to call');
  yield takeEvery(types.API_REQUEST_LOGIN, handleLoginRequest);
}
