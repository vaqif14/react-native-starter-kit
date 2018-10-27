import authTypes from 'types/auth';
import { takeLatest, all } from 'redux-saga/effects';
import { authRequest, userRequest, signOut } from 'sagas/auth';

export default function* rootSaga() {
  yield all([takeLatest(authTypes.AUTH_REQUEST, authRequest), takeLatest(authTypes.SET_TOKEN, userRequest), takeLatest(authTypes.SIGN_OUT, signOut)]);
}
