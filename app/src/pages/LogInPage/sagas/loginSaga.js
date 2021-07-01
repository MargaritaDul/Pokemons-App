import { takeEvery, take, select } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { SIGN_IN_SUCCESS } from "../actions";
import api from "../../../api/config";

const authSelector = (state) => state.auth;

export function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (api.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(REHYDRATE);

      const state = yield select(authSelector);

      const { accessToken } = state;

      if (accessToken) {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (err) {
      yield console.log(err);
    }
  }
}

export function* loginWatcher() {
  yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}
