import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import CarActions, { CarsSelectors } from '../stores/cars';
import { ApiType } from '../services/api';

export function* getCars(
  api: ApiType,
  action: {
    type: string;
    sort: string;
    manufacturer: string;
    color: string;
    page: number;
  }
): SagaIterator {
  const sort = yield select(CarsSelectors.getSort);

  const response = yield call(
    // @ts-ignore
    api.getCars,
    action.page,
    sort,
    action.manufacturer,
    action.color
  );

  if (response.ok) {
    yield put(
      CarActions.getCarsSuccess(
        response.data.cars,
        action.page,
        response.data.totalPageCount,
        response.data.totalCarsCount
      )
    );
  } else {
    yield put(CarActions.getCarsFailure(response.originalError));
  }
}
