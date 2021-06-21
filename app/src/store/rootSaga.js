import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { launchSaga } from "../modules/Login/sagas/loginSaga";

function* rootSaga() {
  yield all([launchSaga(), apiCallsSaga()]);
}

export default rootSaga;
