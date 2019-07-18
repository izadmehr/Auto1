import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import CarActions from '../stores/selectedCar';
import { ApiType } from '../services/api';

export function* getSelectedCar(
  api: ApiType,
  { id }: { id: number }
): SagaIterator {
  const response = yield call(api.getCar, id);

  if (response.ok) {
    yield put(CarActions.getSelectedCarSuccess(response.data.car));
  } else {
    yield put(CarActions.getSelectedCarFailure(response.originalError));
  }
}
