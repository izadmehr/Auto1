import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { CarType } from './cars';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  add: ['car'],
  remove: ['stockNumber']
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
    favourites.data,
  isFavorited: (
    { favourites }: { favourites: FavouritesState },
    stockNumber: number
  ): boolean =>
    favourites.data.some(
      (favourite): boolean => favourite.stockNumber === stockNumber
    )
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
  { stockNumber }: { stockNumber: number }
): FavouritesState =>
  state.set(
    'data',
    state.data.filter(
      (favourite): boolean => favourite.stockNumber !== stockNumber
    )
  );

export const favouritesReducer = createReducer<
  FavouritesState,
  {
    type: string;
    car: CarType;
    stockNumber: number;
  }
>(INITIAL_STATE, {
  [Types.ADD]: add,
  [Types.REMOVE]: remove
});
