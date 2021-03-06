import {fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './counter';
import {watchApiRequest} from './apiTester';
import {watchProfileApiRequest} from './apiProfile';
import {watchUserSearchRequest} from './searchUser'
import {watchLoginRequest} from './apiLogin';

export default function* rootSaga() {
  yield [
    fork(watchIncrementAsync),
    fork(watchApiRequest),
    fork(watchProfileApiRequest),
    fork(watchUserSearchRequest),
    fork(watchLoginRequest)
  ]
}
