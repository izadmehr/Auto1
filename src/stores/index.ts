import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { carsReducer, CarsState } from './cars';
import { colorsReducer, ColorsState } from './colors';
import { manufacturersReducer, ManufacturersState } from './manufacturers';
import { selectedCarReducer, SelectedCarState } from './selectedCar';
import { favouritesReducer } from './favourites';

export interface RootState {
  cars: CarsState;
  colors: ColorsState;
  manufacturers: ManufacturersState;
  selectedCar: SelectedCarState;
}

const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    cars: carsReducer,
    colors: colorsReducer,
    manufacturers: manufacturersReducer,
    selectedCar: selectedCarReducer,
    favourites: favouritesReducer
  });

export default rootReducer;
