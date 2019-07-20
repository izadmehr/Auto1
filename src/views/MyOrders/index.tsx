import * as React from 'react';
import { connect } from 'react-redux';

import {CarsContainer, NoSelected} from './Styles';
import { RootState } from '../../stores';
import { CarsType } from '../../stores/cars';
import { FavouritesSelectors } from '../../stores/favourites';
import { TableBody } from '../../components/Table/TableBody';

interface Props {
  cars: CarsType;
  loadingStatus: boolean;
}

export function MyOrdersComponent(props: Props): JSX.Element {
  return (
    <CarsContainer>
      <h3>My orders</h3>
      {props.cars.length === 0 && (
        <NoSelected>Nothing has been selected.</NoSelected>
      )}
      <TableBody loadingStatus={false} cars={props.cars} />
    </CarsContainer>
  );
}

const mapStateToProps = (state: RootState): { cars: CarsType } => ({
  cars: FavouritesSelectors.getData(state)
});

export const MyOrders = connect(mapStateToProps)(MyOrdersComponent);
