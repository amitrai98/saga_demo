import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

export function* handleProfileApiRequest(action) {
  try {
    console.log('api is about to call');
    const apiConfig = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        section_id: action.payload.section_id
      }
    };

    const response = yield call(axios, apiConfig);
    // console.log("response is "+JSON.stringify( response));
    yield put({type: types.API_REQUEST_SUCCEEDED, data_is: response });
  } catch (e) {
    console.log(e);
    yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchProfileApiRequest() {
  console.log('api is about to call');
  yield takeEvery('LOAD_USER_PROFILE', handleProfileApiRequest);
}
