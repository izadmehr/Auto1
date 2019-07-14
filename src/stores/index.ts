import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { carsReducer, CarsState } from './cars';

export interface RootState {
  cars: CarsState;
}

const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    cars: carsReducer
  });

export default rootReducer;
