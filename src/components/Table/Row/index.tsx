import React, { Component } from 'react';

import { CarType } from '../../../stores/cars';
import {
  RowContainer,
  Image,
  RowRight,
  RowTitle,
  CarDetails,
  ViewDetails
} from './Styles';

interface Props {
  car: CarType;
}

class Row extends Component<Props> {
  render(): JSX.Element {
    const { car } = this.props;

    return (
      <RowContainer>
        <Image src={car.pictureUrl} alt={car.modelName} />
        <RowRight>
          <RowTitle>{`${car.manufacturerName} ${car.modelName}`}</RowTitle>
          <CarDetails>
            {`Stock #${car.uuid} - ${car.mileage.number} ${car.mileage.unit} ${car.fuelType} ${car.color}`}
          </CarDetails>
          <ViewDetails>view details</ViewDetails>
        </RowRight>
      </RowContainer>
    );
  }
}

export default Row;
