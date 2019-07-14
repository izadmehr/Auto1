import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCarsRequest: ['page', 'pageSize'],
  getCarsSuccess: ['data', 'page', 'dataTotalSize'],
  getCarsFailure: ['error']
});

export const CarsTypes = Types;
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

export type CarsState = Immutable.Immutable<{
  data: CarType[];
  getLoadingStatus: boolean;
  error: string;
  page: number;
  dataTotalSize: number;
}>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<{
  data: CarType[];
  getLoadingStatus: boolean;
  error: string;
  page: number;
  dataTotalSize: number;
}>({
  data: [],
  getLoadingStatus: false,
  error: '',
  page: 0,
  dataTotalSize: 0
});

/* ------------- Selectors ------------- */

export const CarSelectors = {
  getData: ({ cars }: { cars: CarsState }): Immutable.Immutable<CarType[]> =>
    cars.data
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
    dataTotalSize = 0
  }: { data: CarType[]; page: number; dataTotalSize: number }
): CarsState => {
  return state.merge({
    getLoadingStatus: false,
    error: '',
    data,
    page,
    dataTotalSize
  });
};

// Something went wrong somewhere.
const failureGtCars = (
  state: CarsState,
  { error }: { error: string }
): CarsState => state.merge({ getLoadingStatus: false, error });

export const carsReducer = createReducer<
  CarsState,
  {
    type: string;
    data: CarType[];
    page: number;
    dataTotalSize: number;
    error: string;
  }
>(INITIAL_STATE, {
  [Types.GET_CARS_REQUEST]: requestGetCars,
  [Types.GET_CARS_SUCCESS]: successGetCars,
  [Types.GET_CARS_FAILURE]: failureGtCars
});
