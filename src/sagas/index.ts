import { takeLatest, all } from 'redux-saga/effects';

import API from '../services/api';
import { getCars } from './cars';
import { CarsActionsTypes } from '../stores/cars';

const api = API.create();
export function* watcherSaga() {
  yield all([takeLatest(CarsActionsTypes.GET_CARS_REQUEST, getCars, api)]);
}
