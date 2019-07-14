import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import CarActions from '../stores/cars';
import { ApiType } from '../services/api';

export function* getCars(
  api: ApiType,
  action: {
    type: string;
    sort: string;
    manufacturer: string;
    color: string;
    page: number;
    pageSize: number;
  }
): SagaIterator {
  // @ts-ignore
  const response = yield call(api, action.page);

  if (response.ok) {
    yield put(
      CarActions.getCarsSuccess(
        response.data.data,
        action.page,
        response.data.meta.totalRows
      )
    );
  } else {
    yield put(CarActions.getCarsFailure(response.originalError));
  }
}
