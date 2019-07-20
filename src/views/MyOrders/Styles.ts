import styled from 'styled-components';

import { colors } from '../../utils/theme';

export const CarsContainer = styled.div`
  justify-content: center;
  padding-top: 1.5rem;
  margin: auto;
  width: 800px;
`;

export const NoSelected = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${colors.darkGray};
  font-size: 1rem;
`;
