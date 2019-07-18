import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/theme';
import { Button } from '../../components/Button';

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

function FavouriteBox(): JSX.Element {
  return (
    <Container>
      <Description>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </Description>
      <Button>Save</Button>
    </Container>
  );
}

export default FavouriteBox;
