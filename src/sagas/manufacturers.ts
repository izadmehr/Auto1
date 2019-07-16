import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import ManufacturerActions from '../stores/manufacturers';
import { ApiType } from '../services/api';

export function* getManufacturers(api: ApiType): SagaIterator {
  const response = yield call(api.getManufacturers);

  if (response.ok) {
    const manufacturers = response.data.manufacturers.map(
      ({
        name
      }: {
        name: string;
      }): {
        label: string;
        value: string;
      } => ({
        label: name,
        value: name
      })
    );

    yield put(ManufacturerActions.getManufacturersSuccess(manufacturers));
  } else {
    yield put(
      ManufacturerActions.getManufacturersFailure(response.originalError)
    );
  }
}
