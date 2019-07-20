// ETA: 2 hours
import { render, RenderResult } from '@testing-library/react';
import * as React from 'react';
import Immutable from 'seamless-immutable';
import { Provider } from 'react-redux';

import { CarType } from '../../stores/cars';
import configureStore from '../../stores/configureStore';

import { ShowComponent } from './index';

const car = Immutable<CarType>({
  stockNumber: 9,
  manufacturerName: 'Volkswagen',
  modelName: 'Eos',
  color: 'green',
  mileage: {
    number: 37175,
    unit: 'km'
  },
  fuelType: 'Diesel',
  pictureUrl: 'https://picsum.photos/id/111/200/200'
});
const { store } = configureStore();

function renderWithRedux(): RenderResult {
  return {
    ...render(
      <Provider store={store}>
        <ShowComponent
          match={{
            params: { id: '1' },
            isExact: true,
            path: '/cars/1',
            url: '/cars/1'
          }}
          getSelectedCar={(): void => {}}
          car={car}
        />
      </Provider>
    )
  };
}

describe('<Show />', (): void => {
  // it('should redeirect to 404 if car is not found', (): void => {
  //   expect(false).toBe(true);
  // });

  it('should render car manufacturer name', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Volkswagen', { exact: false })).toBeDefined();
  });

  it('should render car model name', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Eos', { exact: false })).toBeDefined();
  });

  it('should render car stock number', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('#9', { exact: false })).toBeDefined();
  });

  it('should render car mileage', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('37175 km', { exact: false })).toBeDefined();
  });

  it('should render car fuel type', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Diesel', { exact: false })).toBeDefined();
  });

  it('should render car color', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('green', { exact: false })).toBeDefined();
  });

  it('should render "Save" favorites <Button />', (): void => {
    const { getByText } = renderWithRedux();

    expect(getByText('Save')).toBeDefined();
  });
});
