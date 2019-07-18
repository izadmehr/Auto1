import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getSelectedCarRequest: ['id'],
  getSelectedCarSuccess: ['data'],
  getSelectedCarFailure: ['error']
});

export const SelectedCarActionsTypes = Types;
export default Creators;

export interface CarType {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  pictureUrl: string;
}

const initialCar = {
  stockNumber: 0,
  manufacturerName: '',
  modelName: '',
  color: '',
  mileage: {
    number: 0,
    unit: ''
  },
  fuelType: '',
  pictureUrl: ''
};
export type SelectedCarType = Immutable.Immutable<CarType>;

interface State {
  data: CarType;
  loadingStatus: boolean;
  error: string;
}

export type SelectedCarState = Immutable.Immutable<State>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<State>({
  data: initialCar,
  loadingStatus: false,
  error: ''
});

/* ------------- Selectors ------------- */

export const SelectedCarSelectors = {
  getData: ({
    selectedCar
  }: {
    selectedCar: SelectedCarState;
  }): SelectedCarType => selectedCar.data,
  getLoadingStatus: ({
    selectedCar
  }: {
    selectedCar: SelectedCarState;
  }): boolean => selectedCar.loadingStatus
};

/* ------------- Reducers ------------- */

// request the data from an api
const requestGetSelectedCar = (state: SelectedCarState): SelectedCarState =>
  state.merge({ loadingStatus: true, data: initialCar });

// successful api lookup
const successGetSelectedCar = (
  state: SelectedCarState,
  {
    data
  }: {
    data: CarType;
  }
): SelectedCarState =>
  state.merge({
    loadingStatus: false,
    error: '',
    data
  });

// Something went wrong somewhere.
const failureGtSelectedCar = (
  state: SelectedCarState,
  { error }: { error: string }
): SelectedCarState => state.merge({ loadingStatus: false, error });

export const selectedCarReducer = createReducer<
  SelectedCarState,
  {
    type: string;
    data: CarType;
    error: string;
  }
>(INITIAL_STATE, {
  [Types.GET_SELECTED_CAR_REQUEST]: requestGetSelectedCar,
  [Types.GET_SELECTED_CAR_SUCCESS]: successGetSelectedCar,
  [Types.GET_SELECTED_CAR_FAILURE]: failureGtSelectedCar
});
