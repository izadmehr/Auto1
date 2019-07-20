import * as React from 'react';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  ShowContainer,
  CarHeader,
  CarTitle,
  ShowContent,
  CarModel,
  CarDescription,
  Row
} from './Styles';
import selectedCarActions, {
  SelectedCarType,
  SelectedCarSelectors
} from '../../stores/selectedCar';
import { RootState } from '../../stores';
import { FavouriteBoxContainer } from './FavouriteBox';
import { CarType } from '../../stores/cars';
import { Image } from '../../components/Table/Row/Styles';

interface States {
  car: CarType;
}

interface TParams {
  id: string;
}

interface Props {
  match: match<TParams>;
  getSelectedCar: (id: number) => void;
  car: SelectedCarType;
}

export class ShowComponent extends React.Component<Props, States> {
  componentDidMount(): void {
    const { id } = this.props.match.params;

    this.props.getSelectedCar(Number(id));
  }

  render(): JSX.Element {
    const { car } = this.props;

    return (
      <ShowContainer>
        <CarHeader src={car.pictureUrl} />
        <Row>
          <ShowContent>
            <CarTitle>{`${car.manufacturerName} ${car.modelName}`}</CarTitle>
            <CarModel>
              {`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`}
            </CarModel>
            <CarDescription>
              This car is currently available and can bbe delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </CarDescription>
          </ShowContent>
          <FavouriteBoxContainer />
        </Row>
      </ShowContainer>
    );
  }
}

const mapStateToProps = (state: RootState): { car: SelectedCarType } => ({
  car: SelectedCarSelectors.getData(state)
});

const dispatchProps = {
  getSelectedCar: selectedCarActions.getSelectedCarRequest
};

export const Show = connect(
  mapStateToProps,
  dispatchProps
)(ShowComponent);
