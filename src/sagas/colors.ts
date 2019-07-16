import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import ColorActions from '../stores/colors';
import { ApiType } from '../services/api';

export function* getColors(api: ApiType): SagaIterator {
  const response = yield call(api.getColors);

  if (response.ok) {
    const colors = response.data.colors.map((color: string): {
      label: string;
      value: string;
    } => ({
      label: color,
      value: color
    }));

    yield put(ColorActions.getColorsSuccess(colors));
  } else {
    yield put(ColorActions.getColorsFailure(response.originalError));
  }
}
