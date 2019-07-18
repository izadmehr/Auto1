import React from 'react';

import { CarType } from '../../../stores/cars';
import {
  CarDetails,
  Image,
  RowContainer,
  RowRight,
  RowTitle,
  ViewDetails
} from './Styles';

interface Props {
  car: CarType;
}

function Row(props: Props): JSX.Element {
  const { car } = props;

  return (
    <RowContainer>
      <Image src={car.pictureUrl} alt={car.modelName} />
      <RowRight>
        <RowTitle>{`${car.manufacturerName} ${car.modelName}`}</RowTitle>
        <CarDetails>
          {`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} ${car.fuelType} ${car.color}`}
        </CarDetails>
        <ViewDetails to={`/car/${car.stockNumber}`}>view details</ViewDetails>
      </RowRight>
    </RowContainer>
  );
}

export default Row;
