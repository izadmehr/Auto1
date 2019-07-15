import { takeLatest, all } from 'redux-saga/effects';

import API from '../services/api';
import { getCars } from './cars';
import { getColors } from './colors';
import { CarsActionsTypes } from '../stores/cars';
import { ColorsActionsTypes } from '../stores/colors';

const api = API.create();
export function* watcherSaga() {
  yield all([
    takeLatest(
      [CarsActionsTypes.GET_CARS_REQUEST, CarsActionsTypes.SET_SORT],
      getCars,
      api
    ),
    takeLatest(ColorsActionsTypes.GET_COLORS_REQUEST, getColors, api)
  ]);
}
