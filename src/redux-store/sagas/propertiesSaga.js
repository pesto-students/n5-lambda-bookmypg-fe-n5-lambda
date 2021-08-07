import { call, put } from "redux-saga/effects";
import _ from "lodash";

import propertiesActions from "../actions/propertiesActions";

export function* getPropertiesSaga(propertiesApi, action) {
  try {
    const response = yield call(propertiesApi.getProperties, action.payload);
    yield put(propertiesActions.propertiesReceived(response));
  } catch (e) {
    yield put(
      propertiesActions.getPropetiesFailed({
        message: e.message,
      })
    );
  }
}
