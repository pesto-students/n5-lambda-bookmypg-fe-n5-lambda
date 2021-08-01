import { all, takeLatest } from "redux-saga/effects";
import {
  GET_USER_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_MADE,
} from "../../constant";
import { submitGetUserSaga } from "./userSaga";
import { getPropertiesSaga } from "./propertiesSaga";
import AppService from "../../services/index";

const userpApi = AppService.user;
const propertiesApi = AppService.properties;

export default function* rootSaga() {
  yield all([takeLatest(GET_USER_REQUEST_MADE, submitGetUserSaga, userpApi)]);
  yield all([
    takeLatest(GET_PROPERTIES_REQUEST_MADE, getPropertiesSaga, propertiesApi),
  ]);
}
