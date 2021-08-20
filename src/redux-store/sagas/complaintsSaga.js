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

export function* raiseComplaintSaga(complaintsApi, action) {
  try {
    const response = yield call(complaintsApi.raiseComplaint, action.payload);
    yield put(complaintsActions.complaintRaised(response));
  } catch (e) {
    yield put(
      complaintsActions.raiseComplaintFailed({
        message: e.message,
      })
    );
  }
}

export function* updateComplaintSaga(complaintsApi, action) {
  try {
    const response = yield call(complaintsApi.updateComplaint, action.payload);
    yield put(complaintsActions.complaintUpdated(response));
  } catch (e) {
    yield put(
      complaintsActions.updateComplaintFailed({
        message: e.message,
      })
    );
  }
}