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

export function* getPropertiesByOwnerSaga(propertiesApi, action) {
  try {
    const response = yield call(propertiesApi.getPropertiesByOwner, action.payload);
    yield put(propertiesActions.propertiesByOwnerReceived(response));
  } catch (e) {
    yield put(
      propertiesActions.getPropetiesByOwnerFailed({
        message: e.message,
      })
    );
  }
}

export function* getLatestPropertiesSaga(propertiesApi, action) {
  try {
    const response = yield call(propertiesApi.getLatestProperties, action.payload);
    yield put(propertiesActions.latestPropertiesReceived(response));
  } catch (e) {
    yield put(
      propertiesActions.getLatestPropetiesFailed({
        message: e.message,
      })
    );
  }
}

export function* addPropertySaga(propertiesApi, action) {
  try {
    const response = yield call(propertiesApi.addProperty, action.payload);
    yield put(propertiesActions.propertyAdded(response));
  } catch (e) {
    yield put(
      propertiesActions.addPropertyFailed({
        message: e.message,
      })
    );
  }
}
