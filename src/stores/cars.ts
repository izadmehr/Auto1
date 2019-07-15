import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCarsRequest: ['page'],
  getCarsSuccess: ['data', 'page', 'totalPageCount', 'totalCarsCount'],
  getCarsFailure: ['error'],
  setSort: ['sort']
});

export const CarsActionsTypes = Types;
export default Creators;

export interface CarType {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: number;
  };
  fuelType: string;
  pictureUrl: string;
  uuid: string;
}

export type CarsType = Immutable.Immutable<CarType[]>;

interface State {
  data: CarType[];
  getLoadingStatus: boolean;
  error: string;
  page: number;
  totalPageCount: number;
  totalCarsCount: number;
  sort: string;
}

export type CarsState = Immutable.Immutable<State>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<State>({
  data: [],
  getLoadingStatus: false,
  error: '',
  page: 0,
  totalPageCount: 0,
  totalCarsCount: 0,
  sort: 'none'
});

/* ------------- Selectors ------------- */

export const CarsSelectors = {
  getData: ({ cars }: { cars: CarsState }): CarsType => cars.data,
  getTotalCarsCount: ({ cars }: { cars: CarsState }): number =>
    cars.totalCarsCount,
  getSort: ({ cars }: { cars: CarsState }): string => cars.sort
};

/* ------------- Reducers ------------- */

// request the data from an api
const requestGetCars = (state: CarsState): CarsState =>
  state.merge({ getLoadingStatus: true, data: [] });

// successful api lookup
const successGetCars = (
  state: CarsState,
  {
    data,
    page,
    totalCarsCount,
    totalPageCount
  }: {
    data: CarType[];
    page: number;
    totalCarsCount: number;
    totalPageCount: number;
  }
): CarsState =>
  state.merge({
    getLoadingStatus: false,
    error: '',
    data,
    page,
    totalPageCount,
    totalCarsCount
  });

// Something went wrong somewhere.
const failureGtCars = (
  state: CarsState,
  { error }: { error: string }
): CarsState => state.merge({ getLoadingStatus: false, error });

const setSort = (state: CarsState, { sort }: { sort: string }): CarsState =>
  state.set('sort', sort);

export const carsReducer = createReducer<
  CarsState,
  {
    type: string;
    data: CarType[];
    page: number;
    totalPageCount: number;
    totalCarsCount: number;
    error: string;
    sort: string;
  }
>(INITIAL_STATE, {
  [Types.GET_CARS_REQUEST]: requestGetCars,
  [Types.GET_CARS_SUCCESS]: successGetCars,
  [Types.GET_CARS_FAILURE]: failureGtCars,
  [Types.SET_SORT]: setSort
});
