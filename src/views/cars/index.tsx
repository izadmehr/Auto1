import * as React from 'react';
import { connect } from 'react-redux';

import { Table } from '../../components/Table';
import { CarsContainer } from './Styles';
import { NavFilterContainer } from '../layout/NavFilter';
import { RootState } from '../../stores';
import carsActions, { CarsSelectors, CarsType } from '../../stores/cars';

interface Props {
  cars: CarsType;
  getCars: () => void;
  loadingStatus: boolean;
}

export class CarsComponent extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getCars();
  }

  render(): JSX.Element {
    return (
      <CarsContainer>
        <NavFilterContainer />
        <Table
          loadingStatus={this.props.loadingStatus}
          cars={this.props.cars}
        />
      </CarsContainer>
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

export const Cars = connect(
  mapStateToProps,
  dispatchProps
)(CarsComponent);
