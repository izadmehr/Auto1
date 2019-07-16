import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import CarActions, { CarsSelectors } from '../stores/cars';
import { ApiType } from '../services/api';
import { ColorsSelectors } from '../stores/colors';
import { ManufacturersSelectors } from '../stores/manufacturers';

export function* getCars(
  api: ApiType,
  action: {
    type: string;
    page: number;
  }
): SagaIterator {
  const sort = yield select(CarsSelectors.getSort);
  const color = yield select(ColorsSelectors.getSelectedColor);
  const manufacturer = yield select(
    ManufacturersSelectors.getSelectedManufacturer
  );

  const response = yield call(
    api.getCars,
    action.page,
    sort,
    manufacturer,
    color
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
