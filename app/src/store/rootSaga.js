import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { launchSaga, loginWatcher } from "../modules/Login/sagas/loginSaga";
import logoutWatcher from "../modules/Login/sagas/logoutSaga";

function* rootSaga() {
  yield all([launchSaga(), apiCallsSaga(), logoutWatcher(), loginWatcher()]);
}

export default rootSaga;
