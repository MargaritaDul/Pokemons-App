import { takeEvery } from "redux-saga/effects";
import { SIGN_OUT } from "../actions";

function logoutWorker() {
  localStorage.clear();
  window.location.reload(true);
  window.location.href = "/";
}

function* logoutWatcher() {
  yield takeEvery(SIGN_OUT, logoutWorker);
}

export default logoutWatcher;
