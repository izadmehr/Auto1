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

interface Props {
  cars: CarsType;
  getCars: (
    sort: string,
    manufacturer: string,
    color: string,
    page: number,
    pageSize: number
  ) => void;
}

class Table extends Component<Props> {
  componentDidMount(): void {
    this.props.getCars('', 'audi', 'red', 1, 1);
  }

  render(): JSX.Element {
    return (
      <CarsTableContainer>
        {this.props.cars.map(
          (car: CarType): JSX.Element => (
            <Row key={car.uuid} car={car} />
          )
        )}
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
