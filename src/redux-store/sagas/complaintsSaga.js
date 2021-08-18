import { call, put } from "redux-saga/effects";
import _ from "lodash";

import complaintsActions from "../actions/complaintsActions";

export function* getComplaintsSaga(complaintsApi, action) {
  try {
    const response = yield call(complaintsApi.getComplaints, action.payload);
    yield put(complaintsActions.complaintsReceived(response));
  } catch (e) {
    yield put(
      complaintsActions.getComplaintsFailed({
        message: e.message,
      })
    );
  }
}