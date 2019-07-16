import React, { Component } from 'react';
import { connect } from 'react-redux';

import carsActions, {
  CarsSelectors,
  CarsType,
  CarType
} from '../../stores/cars';
import { RootState } from '../../stores';
import Row from './Row';
import { CarsTableContainer } from './Styles';
import { TableHeaderContainer } from './TableHeader';
import { TablePaginationContainer } from '../Pagination';

interface Props {
  cars: CarsType;
  getCars: () => void;
}

class Table extends Component<Props> {
  componentDidMount(): void {
    this.props.getCars();
  }

  render(): JSX.Element {
    return (
      <CarsTableContainer>
        <TableHeaderContainer />
        {this.props.cars.map(
          (car: CarType): JSX.Element => (
            <Row key={car.uuid} car={car} />
          )
        )}
        <TablePaginationContainer />
      </CarsTableContainer>
    );
  }
}

const mapStateToProps = (state: RootState): { cars: CarsType } => ({
  cars: CarsSelectors.getData(state)
});

const dispatchProps = {
  getCars: carsActions.getCarsRequest
};

export const TableContainer = connect(
  mapStateToProps,
  dispatchProps
)(Table);
