// Component which renders list of items, e.g. car list

import React from 'react';

import { CarsType, CarType } from '../../stores/cars';
import Row from './Row';
import { Placeholder } from '../Placeholder';

interface Props {
  cars: CarsType;
  loadingStatus: boolean;
}

const placeholderIndexes = new Array(10)
  .fill(0)
  .map((key, index): number => index);

export function TableBody(props: Props): JSX.Element {
  return (
    <>
      {props.loadingStatus
        ? placeholderIndexes.map(
            (key): JSX.Element => <Placeholder key={key} />
          )
        : props.cars.map(
            (car: CarType): JSX.Element => (
              <Row key={car.stockNumber} car={car} />
            )
          )}
    </>
  );
}
