import { takeLatest, all } from 'redux-saga/effects';

import API from '../services/api';
import { getCars } from './cars';
import { CarsTypes } from '../stores/cars';

const api = API.create();
export default function* root() {
  yield all([takeLatest(CarsTypes.GET_CARS_REQUEST, getCars, api)]);
}
