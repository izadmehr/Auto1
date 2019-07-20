import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { colors } from '../../utils/theme';
import { Button } from '../../components/Button';
import { RootState } from '../../stores';
import selectedCarActions, {
  SelectedCarSelectors,
  SelectedCarType
} from '../../stores/selectedCar';
import favouritesActions, {
  FavouritesSelectors
} from '../../stores/favourites';
import { CarType } from '../../stores/cars';

const Container = styled.div`
  border: 1px solid ${colors.lightGray};
  padding: 1.5rem;
  margin: 1.5rem;
  width: 35%;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
`;

interface Props {
  car: CarType;
  addFavourite: (car: CarType) => void;
  removeFavourite: (stockNumber: number) => void;
  isFavorite: boolean;
}

function FavouriteBox(props: Props): JSX.Element {
  return (
    <Container>
      <Description>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </Description>
      <Button
        type="button"
        onClick={(): void => {
          if (props.isFavorite) {
            props.removeFavourite(props.car.stockNumber);
          } else {
            props.addFavourite(props.car);
          }
        }}
      >
        {props.isFavorite ? 'Remove' : 'Save'}
      </Button>
    </Container>
  );
}

const mapStateToProps = (
  state: RootState
): { car: SelectedCarType; isFavorite: boolean } => {
  const car = SelectedCarSelectors.getData(state);

  return {
    car,
    isFavorite: FavouritesSelectors.isFavorited(state, car.stockNumber)
  };
};

const dispatchProps = {
  getSelectedCar: selectedCarActions.getSelectedCarRequest,
  addFavourite: favouritesActions.add,
  removeFavourite: favouritesActions.remove
};

export const FavouriteBoxContainer = connect(
  mapStateToProps,
  dispatchProps
)(FavouriteBox);
