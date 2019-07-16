import { takeLatest, all } from 'redux-saga/effects';

import API from '../services/api';
import { getCars } from './cars';
import { getColors } from './colors';
import { getManufacturers } from './manufacturers';
import { CarsActionsTypes } from '../stores/cars';
import { ColorsActionsTypes } from '../stores/colors';
import { ManufacturersActionsTypes } from '../stores/manufacturers';

const api = API.create();
export function* watcherSaga() {
  yield all([
    takeLatest(
      [CarsActionsTypes.GET_CARS_REQUEST, CarsActionsTypes.SET_SORT],
      getCars,
      api
    ),
    takeLatest(ColorsActionsTypes.GET_COLORS_REQUEST, getColors, api),
    takeLatest(ManufacturersActionsTypes.GET_MANUFACTURERS_REQUEST, getManufacturers, api),
  ]);
}
