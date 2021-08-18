import { call, put } from "redux-saga/effects";
import _ from "lodash";

import amenitiesActions from "../actions/amenitiesActions";

export function* getAmenitiesSaga(amenitiesApi, action) {
  try {
    const response = yield call(amenitiesApi.getAmenities, action.payload);
    yield put(amenitiesActions.amenitiesReceived(response));
  } catch (e) {
    yield put(
      amenitiesActions.getAmenitiesFailed({
        message: e.message,
      })
    );
  }
}

export function* addAmenitySaga(amenitiesApi, action) {
  try {
    const response = yield call(amenitiesApi.addAmenity, action.payload);
    yield put(amenitiesActions.amenityAdded(response));
  } catch (e) {
    yield put(
      amenitiesActions.addAmenityFailed({
        message: e.message,
      })
    );
  }
}

export function* updateAmenitySaga(amenitiesApi, action) {
  try {
    const response = yield call(amenitiesApi.updateAmenity, action.payload);
    yield put(amenitiesActions.amenityUpdated(response));
  } catch (e) {
    yield put(
      amenitiesActions.updateAmenityFailed({
        message: e.message,
      })
    );
  }
}
