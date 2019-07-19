import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { CarType } from './cars';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  add: ['car'],
  remove: ['id']
});

export const FavouritesActionsTypes = Types;
export default Creators;

export type FavouritesType = Immutable.Immutable<CarType[]>;

interface State {
  data: CarType[];
}

export type FavouritesState = Immutable.Immutable<State>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<State>({
  data: []
});

/* ------------- Selectors ------------- */

export const FavouritesSelectors = {
  getData: ({ favourites }: { favourites: FavouritesState }): FavouritesType =>
    favourites.data
};

/* ------------- Reducers ------------- */

// Add to favourites
const add = (
  state: FavouritesState,
  { car }: { car: CarType }
): FavouritesState => state.set('data', state.data.concat(car));

// Remove from favourites by id
const remove = (
  state: FavouritesState,
  { car }: { car: CarType }
): FavouritesState => state.set('data', state.data.concat(car));

export const favouritesReducer = createReducer<
  FavouritesState,
  {
    type: string;
    car: CarType;
  }
>(INITIAL_STATE, {
  [Types.ADD]: add,
  [Types.REMOVE]: remove
});
