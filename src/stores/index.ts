import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { carsReducer, CarsState } from './cars';
import { colorsReducer, ColorsState } from './colors';

export interface RootState {
  cars: CarsState;
  colors: ColorsState;
}

const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    cars: carsReducer,
    colors: colorsReducer
  });

export default rootReducer;
