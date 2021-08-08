import { call, put } from "redux-saga/effects";
import _ from "lodash";

import locationsActions from "../actions/locationsActions";

export function* getLocationsSaga(locationsApi, action) {
  try {
    const response = yield call(locationsApi.getLocations, action.payload);
    yield put(locationsActions.locationsReceived(response));
  } catch (e) {
    yield put(
      locationsActions.getLocationsFailed({
        message: e.message,
      })
    );
  }
}
