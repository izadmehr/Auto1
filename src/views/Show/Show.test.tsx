// ETA: 2 hours
import { render } from '@testing-library/react';
import * as React from 'react';
import Immutable from 'seamless-immutable';

import { CarType } from '../../stores/selectedCar';

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

describe('<Show />', () => {
  // it('should redeirect to 404 if car is not found', () => {
  //   expect(false).toBe(true);
  // });

  it('should render car manufacturer name', () => {
    const { getByText } = render(
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
    );

    expect(getByText('Volkswagen', { exact: false })).toBeDefined();
  });

  it('should render car model name', () => {
    const { getByText } = render(
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
    );

    expect(getByText('Eos', { exact: false })).toBeDefined();
  });

  it('should render car stock number', () => {
    const { getByText } = render(
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
    );

    expect(getByText('#9', { exact: false })).toBeDefined();
  });

  it('should render car mileage', () => {
    const { getByText } = render(
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
    );

    expect(getByText('37175 km', { exact: false })).toBeDefined();
  });

  it('should render car fuel type', () => {
    const { getByText } = render(
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
    );

    expect(getByText('Diesel', { exact: false })).toBeDefined();
  });

  it('should render car color', () => {
    const { getByText } = render(
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
    );

    expect(getByText('green', { exact: false })).toBeDefined();
  });

  it('should render "Save" favorites <Button />', () => {
    const { getByText } = render(
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
    );

    expect(getByText('Save')).toBeDefined();
  });
});
