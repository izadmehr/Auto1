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
import { Placeholder } from '../Placeholder';

interface Props {
  cars: CarsType;
  getCars: () => void;
  loadingStatus: boolean;
}

const placeholderIndexes = new Array(10).fill(0).map((key, index) => index);

console.log('placeholderIndexes: ', placeholderIndexes);

class Table extends Component<Props> {
  componentDidMount(): void {
    this.props.getCars();
  }

  render(): JSX.Element {
    return (
      <CarsTableContainer>
        <TableHeaderContainer />
        {this.props.loadingStatus
          ? placeholderIndexes.map(
              (key): JSX.Element => <Placeholder key={key} />
            )
          : this.props.cars.map(
              (car: CarType): JSX.Element => (
                <Row key={car.stockNumber} car={car} />
              )
            )}
        <TablePaginationContainer />
      </CarsTableContainer>
    );
  }
}

const mapStateToProps = (
  state: RootState
): { cars: CarsType; loadingStatus: boolean } => ({
  cars: CarsSelectors.getData(state),
  loadingStatus: CarsSelectors.getLoadingStatus(state)
});

const dispatchProps = {
  getCars: carsActions.getCarsRequest
};

export const TableContainer = connect(
  mapStateToProps,
  dispatchProps
)(Table);
