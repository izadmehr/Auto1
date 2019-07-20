// ETA: 2 hours
import * as React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Immutable from 'seamless-immutable';

import configureStore from '../../../stores/configureStore';
import { ColorType } from '../../../stores/colors';
import { ManufacturerType } from '../../../stores/manufacturers';

import { NavFilter } from './index';

const { store } = configureStore();

const colors = Immutable<ColorType[]>([{ label: 'black', value: 'black' }]);
const manufacturers = Immutable<ManufacturerType[]>([
  {
    label: 'BMW',
    value: 'BMW',
    name: 'BMW',
    models: ['test']
  }
]);

function renderWithRedux(): RenderResult {
  return {
    ...render(
      <Provider store={store}>
        <NavFilter
          colors={colors}
          getColors={(): void => {}}
          selectColor={(): void => {}}
          selectedColor=""
          manufacturers={manufacturers}
          selectedManufacturer=""
          getManufacturers={(): void => {}}
          selectManufacturer={(): void => {}}
          getCars={(): void => {}}
          push={(url: string): void => {
            window.location.assign(url);
          }}
        />
      </Provider>
    )
  };
}

describe('<NavFilter />', (): void => {
  it('should render "Color" <Label />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Color')).toBeDefined();
  });

  it('should render colors <Select />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('All car colors')).toBeDefined();
  });

  it('should render "Manufacturer" <Label />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Manufacturer')).toBeDefined();
  });

  it('should render manufacturers <Select />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('All Manufacturers')).toBeDefined();
  });

  it('should render "Filter" <Button />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Filter')).toBeDefined();
  });

  it('should change address bar to selected values on "Filter" press', async (): Promise<
    void
  > => {
    /* Valid combinations:
     ?color=black&manufacturer=BMW
     ?color=black&manufacturer=
     ?color=&manufacturer=BMW
     ?color=&manufacturer=
     ?color=black
     ?manufacturer=BMW
     ?color=
     ?manufacturer=
     ?
    */

    const { getByText, getAllByText } = renderWithRedux();

    window.location.assign = jest.fn();

    // ?color=black&manufacturer=BMW
    fireEvent.click(getByText('All car colors'));
    fireEvent.click(getByText('black'));

    fireEvent.click(getByText('All Manufacturers'));
    fireEvent.click(getByText('BMW'));
    await fireEvent.click(getByText('Filter'));
    expect(window.location.assign).toBeCalledWith(
      `?color=black&manufacturer=BMW`
    );

    // ?color=black&manufacturer=
    fireEvent.click(getByText('All car colors'));
    fireEvent.click(getByText('black'));

    fireEvent.click(getByText('All Manufacturers'));
    fireEvent.click(getAllByText('All Manufacturers')[1]);
    await fireEvent.click(getByText('Filter'));
    expect(window.location.assign).toBeCalledWith(`?color=black&manufacturer=`);

    // ?color=&manufacturer=BMW
    fireEvent.click(getByText('All car colors'));
    fireEvent.click(getAllByText('All car colors')[1]);

    fireEvent.click(getByText('All Manufacturers'));
    fireEvent.click(getByText('BMW'));
    await fireEvent.click(getByText('Filter'));
    expect(window.location.assign).toBeCalledWith(`?color=&manufacturer=BMW`);

    // ?color=&manufacturer=
    fireEvent.click(getByText('All car colors'));
    fireEvent.click(getAllByText('All car colors')[1]);

    fireEvent.click(getByText('All Manufacturers'));
    fireEvent.click(getAllByText('All Manufacturers')[1]);
    await fireEvent.click(getByText('Filter'));
    expect(window.location.assign).toBeCalledWith(`?color=&manufacturer=BMW`);
  });
});
