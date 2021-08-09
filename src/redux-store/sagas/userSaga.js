import { call, put } from "redux-saga/effects";
import _ from "lodash";

import userActions from "../actions/userActions";

export function* getUserSaga(userApi, action) {
  try {
    const response = yield call(userApi.getUser, action.payload);
    yield put(userActions.userReceived(response));
  } catch (e) {
    yield put(
      userActions.getUserFailed({
        message: e.message,
      })
    );
  }
}
