import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { carsReducer, CarsState } from './cars';
import { colorsReducer, ColorsState } from './colors';
import { manufacturersReducer, ManufacturersState } from './manufacturers';

export interface RootState {
  cars: CarsState;
  colors: ColorsState;
  manufacturers: ManufacturersState;
}

const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    cars: carsReducer,
    colors: colorsReducer,
    manufacturers: manufacturersReducer
  });

export default rootReducer;
