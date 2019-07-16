import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getManufacturersRequest: null,
  getManufacturersSuccess: ['data'],
  getManufacturersFailure: ['error'],
  selectManufacturer: ['selectedManufacturer']
});

export const ManufacturersActionsTypes = Types;
export default Creators;

export interface ManufacturerType {
  label: string;
  value: string;
  name: string;
  models: string[];
}
export type ManufacturersType = Immutable.Immutable<ManufacturerType[]>;

interface State {
  data: ManufacturerType[];
  getLoadingStatus: boolean;
  error: string;
  selectedManufacturer: string;
}

export type ManufacturersState = Immutable.Immutable<State>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<State>({
  data: [],
  getLoadingStatus: false,
  error: '',
  selectedManufacturer: ''
});

/* ------------- Selectors ------------- */

export const ManufacturersSelectors = {
  getData: ({
    manufacturers
  }: {
    manufacturers: ManufacturersState;
  }): ManufacturersType => manufacturers.data,
  getSelectedManufacturer: ({
    manufacturers
  }: {
    manufacturers: ManufacturersState;
  }): string => manufacturers.selectedManufacturer
};

/* ------------- Reducers ------------- */

// request the data from an api
const requestGetManufacturers = (
  state: ManufacturersState
): ManufacturersState => state.merge({ getLoadingStatus: true, data: [] });

// successful api lookup
const successGetManufacturers = (
  state: ManufacturersState,
  {
    data
  }: {
    data: ManufacturerType[];
  }
): ManufacturersState =>
  state.merge({
    getLoadingStatus: false,
    error: '',
    data
  });

// Something went wrong somewhere.
const failureGtManufacturers = (
  state: ManufacturersState,
  { error }: { error: string }
): ManufacturersState => state.merge({ getLoadingStatus: false, error });

const selectManufacturer = (
  state: ManufacturersState,
  { selectedManufacturer }: { selectedManufacturer: string }
): ManufacturersState =>
  state.set('selectedManufacturer', selectedManufacturer);

export const manufacturersReducer = createReducer<
  ManufacturersState,
  {
    type: string;
    data: ManufacturerType[];
    error: string;
    selectedManufacturer: string;
  }
>(INITIAL_STATE, {
  [Types.GET_MANUFACTURERS_REQUEST]: requestGetManufacturers,
  [Types.GET_MANUFACTURERS_SUCCESS]: successGetManufacturers,
  [Types.GET_MANUFACTURERS_FAILURE]: failureGtManufacturers,
  [Types.SELECT_MANUFACTURER]: selectManufacturer
});
