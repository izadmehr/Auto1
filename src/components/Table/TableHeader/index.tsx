import React from 'react';
import { connect } from 'react-redux';

import carsActions, { CarsSelectors } from '../../../stores/cars';
import { RootState } from '../../../stores';
import { H3, LeftHeader, RightHeader, TableHeader } from './Styles';
import { Dropdown } from '../../../views/layout/Dropdown';

interface Props {
  carsAmount: number;
  totalCarsCount: number;
  setSort: (sort: string) => void;
  selectedSort: string;
}

const sortItems = [
  {
    label: 'None',
    value: ''
  },
  {
    label: 'Mileage - Ascending',
    value: 'asc'
  },
  {
    label: 'Mileage - Descending',
    value: 'dsc'
  }
];

function Header(props: Props): JSX.Element {
  return (
    <TableHeader>
      <RightHeader>
        <H3>Available cars</H3>
        <p> {`Showing ${props.carsAmount} of ${props.totalCarsCount}`} </p>
      </RightHeader>
      <LeftHeader>
        <Dropdown
          items={sortItems}
          title="Sort by"
          selectItem={props.setSort}
          selectedItem={props.selectedSort}
        />
      </LeftHeader>
    </TableHeader>
  );
}

const mapStateToProps = (
  state: RootState
): { carsAmount: number; totalCarsCount: number; selectedSort: string } => ({
  carsAmount: CarsSelectors.getData(state).length,
  totalCarsCount: CarsSelectors.getTotalCarsCount(state),
  selectedSort: CarsSelectors.getSort(state)
});

const dispatchProps = {
  setSort: carsActions.setSort
};

export const TableHeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(Header);
