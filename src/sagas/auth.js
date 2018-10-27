import type from 'types/auth';
import { post, get } from 'utils/client';
import { call, put } from 'redux-saga/effects';
import { API_URL } from 'constants';
import logger from 'utils/logger';

export function* authRequest(action) {
  try {
    const response = yield call(post, `${API_URL}auth`, action.payload, false);
    const {
      data: {
        data: { token },
      },
    } = response;

    yield put({
      type: type.SET_TOKEN,
      payload: token,
    });
  } catch (err) {
    yield put({
      type: type.AUTHENTICATING,
      payload: false,
    });
    logger('sagas/auth authRequest, err', err);
  }
}

export function* userRequest(action) {
  try {
    const token = action.payload;
    const response = yield call(get, `${API_URL}me`, token);

    const {
      data: { data },
    } = response;

    yield put({
      type: type.SET_USER,
      payload: data,
    });
  } catch (err) {
    logger('sagas/auth userRequest, err', err);
  }
}

export function* signOut(action) {
  try {
    yield put({
      type: 'RESET',
      payload: false,
    });
  } catch (err) {
    logger('sagas/auth signOut, err', err);
  }
}
