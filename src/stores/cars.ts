import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCarsRequest: [],
  getCarsSuccess: ['data', 'totalPageCount', 'totalCarsCount'],
  getCarsFailure: ['error'],
  setSort: ['sort'],
  setPage: ['page']
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
  page: 1,
  totalPageCount: 0,
  totalCarsCount: 0,
  sort: 'none'
});

/* ------------- Selectors ------------- */

export const CarsSelectors = {
  getData: ({ cars }: { cars: CarsState }): CarsType => cars.data,
  getTotalCarsCount: ({ cars }: { cars: CarsState }): number =>
    cars.totalCarsCount,
  getTotalPageCount: ({ cars }: { cars: CarsState }): number =>
    cars.totalPageCount,
  getSort: ({ cars }: { cars: CarsState }): string => cars.sort,
  getPage: ({ cars }: { cars: CarsState }): number => cars.page
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
    totalCarsCount,
    totalPageCount
  }: {
    data: CarType[];
    totalCarsCount: number;
    totalPageCount: number;
  }
): CarsState =>
  state.merge({
    getLoadingStatus: false,
    error: '',
    data,
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

const setPage = (state: CarsState, { page }: { page: number }): CarsState =>
  state.set('page', page);

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
  [Types.SET_SORT]: setSort,
  [Types.SET_PAGE]: setPage
});
