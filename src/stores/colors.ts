import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getColorsRequest: null,
  getColorsSuccess: ['data'],
  getColorsFailure: ['error'],
  selectColor: ['selectedColor']
});

export const ColorsActionsTypes = Types;
export default Creators;

export interface ColorType {
  label: string;
  value: string;
}
export type ColorsType = Immutable.Immutable<ColorType[]>;

interface State {
  data: ColorType[];
  getLoadingStatus: boolean;
  error: string;
  selectedColor: string;
}

export type ColorsState = Immutable.Immutable<State>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable<State>({
  data: [],
  getLoadingStatus: false,
  error: '',
  selectedColor: ''
});

/* ------------- Selectors ------------- */

export const ColorsSelectors = {
  getData: ({ colors }: { colors: ColorsState }): ColorsType => colors.data,
  getSelectedColor: ({ colors }: { colors: ColorsState }): string =>
    colors.selectedColor
};

/* ------------- Reducers ------------- */

// request the data from an api
const requestGetColors = (state: ColorsState): ColorsState =>
  state.merge({ getLoadingStatus: true, data: [] });

// successful api lookup
const successGetColors = (
  state: ColorsState,
  {
    data
  }: {
    data: ColorType[];
  }
): ColorsState =>
  state.merge({
    getLoadingStatus: false,
    error: '',
    data
  });

// Something went wrong somewhere.
const failureGtColors = (
  state: ColorsState,
  { error }: { error: string }
): ColorsState => state.merge({ getLoadingStatus: false, error });

const selectColor = (
  state: ColorsState,
  { selectedColor }: { selectedColor: string }
): ColorsState => state.set('selectedColor', selectedColor);

export const colorsReducer = createReducer<
  ColorsState,
  {
    type: string;
    data: ColorType[];
    error: string;
    selectedColor: string;
  }
>(INITIAL_STATE, {
  [Types.GET_COLORS_REQUEST]: requestGetColors,
  [Types.GET_COLORS_SUCCESS]: successGetColors,
  [Types.GET_COLORS_FAILURE]: failureGtColors,
  [Types.SELECT_COLOR]: selectColor
});
