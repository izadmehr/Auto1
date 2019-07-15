import * as React from 'react';

import { TableContainer as Table } from '../../components/Table';
import { CarsContainer } from './Styles';
import { NavFilter } from '../layout/NavFilter';

export const Cars = (): JSX.Element => {
  return (
    <CarsContainer>
      <NavFilter />
      <Table />
    </CarsContainer>
  );
};
