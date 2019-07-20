// Component which renders list of items, e.g. car list

import React from 'react';

import { CarsType } from '../../stores/cars';
import { CarsTableContainer } from './Styles';
import { TableHeaderContainer } from './TableHeader';
import { TablePaginationContainer } from '../Pagination';
import { TableBody } from './TableBody';

interface Props {
  cars: CarsType;
  loadingStatus: boolean;
}

export function Table(props: Props): JSX.Element {
  return (
    <CarsTableContainer>
      <TableHeaderContainer />
      <TableBody cars={props.cars} loadingStatus={props.loadingStatus} />
      <TablePaginationContainer />
    </CarsTableContainer>
  );
}
