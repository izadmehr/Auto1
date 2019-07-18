import { takeLatest, all } from 'redux-saga/effects';

import API from '../services/api';
import { getCars } from './cars';
import { getColors } from './colors';
import { getManufacturers } from './manufacturers';
import { CarsActionsTypes } from '../stores/cars';
import { ColorsActionsTypes } from '../stores/colors';
import { ManufacturersActionsTypes } from '../stores/manufacturers';
import { SelectedCarActionsTypes } from '../stores/selectedCar';
import { getSelectedCar } from './selectedCar';

const api = API.create();
export function* watcherSaga() {
  yield all([
    takeLatest(
      [
        CarsActionsTypes.GET_CARS_REQUEST,
        CarsActionsTypes.SET_SORT,
        CarsActionsTypes.SET_PAGE
      ],
      getCars,
      api
    ),
    takeLatest(ColorsActionsTypes.GET_COLORS_REQUEST, getColors, api),
    takeLatest(
      ManufacturersActionsTypes.GET_MANUFACTURERS_REQUEST,
      getManufacturers,
      api
    ),
    takeLatest(SelectedCarActionsTypes.GET_SELECTED_CAR_REQUEST, getSelectedCar, api)
  ]);
}
